import jwt from 'jsonwebtoken';
import md5 from 'md5';
import fs from 'fs/promises';
import { homedir } from 'os';
import fetch from 'node-fetch';

// issuerId and apiKey from https://appstoreconnect.apple.com/access/api
// p8 file was generated initially, and somebody stored it in ~/.appstoreconnect/private_keys (iTMSTransporter?)
export const api = async function AppStoreConnectApiFetcher({ issuerId, apiKey, privateKey, version = 1, urlBase,
    tokenExpiresInSeconds = 1200, automaticRetries = 10, logRequests = false
} = {}) {
    if (!privateKey) privateKey = await fs.readFile(`${homedir()}/.appstoreconnect/private_keys/AuthKey_${apiKey}.p8`);
    if (!urlBase) urlBase = `https://api.appstoreconnect.apple.com`;

    function _getBearerToken(issuerId, apiKey, privateKey) {
        const NOW = Math.round((new Date()).getTime() / 1000);

        const PAYLOAD = {
            'iss': issuerId,
            'exp': NOW + tokenExpiresInSeconds,
            'aud': 'appstoreconnect-v1'
        };

        const SIGN_OPTS = {
            'algorithm': 'ES256',
            'header': {
                'alg': 'ES256',
                'kid': apiKey,
                'typ': 'JWT'
            }
        };

        const bearerToken = jwt.sign(
            PAYLOAD,
            privateKey,
            SIGN_OPTS
        );

        return bearerToken;
    }

    const bearerToken = _getBearerToken(issuerId, apiKey, privateKey);

    const authFetch = async function authFetch(url, options) {
        if (!options) options = {};
        if (!options.headers) options.headers = {};
        options.headers.Authorization = `Bearer ${bearerToken}`;
        const retries = options.automaticRetries ?? automaticRetries;
        const log = options.logRequests ?? logRequests;
        if (!/^https:\/\//.test(url)) {
            // strip leading slash
            url = url.replace(/^\//, "");
            if (/^v\d+\//.test(url)) {
                // URL includes version number
                url = `${urlBase}/${url}`;
            } else {
                // No version number; add our own
                const v = options.version ?? version;
                url = `${urlBase}/v${v}/${url}`;
            }
        }
        // try-try-again; sometimes Apple rejects perfectly good bearer tokens
        let response;
        for (let i = 0; i < (retries+1); i++) {
            if (log) console.log(`node-app-store-connect-api: requesting ${url}`);
            try {
                response = await fetch(url, options);
            } catch (e) {
                if (e.code === 'ETIMEDOUT') {
                    if (log) console.log(`node-app-store-connect-api: timed out ${url}`);
                    if (i === retries) throw e;
                } else {
                    throw e;
                }
            }
            if (response.status != 401 && response.status != 429 && response.status != 500) return response;
            if (log) console.log(`node-app-store-connect-api: failed with ${response.status} ${url}`);
        }
        return response;
    }

    async function read(url, options) {
        const { data, included, meta, links } = await fetchJson(url, { crawlAllPages: false, inclusions: 'tree', ...options});
        return { data, included, meta, links };
    }

    async function readAll(url, options) {
        const { data, included } = await fetchJson(url, { crawlAllPages: true, inclusions: 'tree', ...options });
        return { data, included };
    }

    async function fetchJson(url, options) {
        const inclusions = options?.inclusions;
        if (inclusions && inclusions !== true && inclusions !== 'tree') {
            throw new Error(`inclusions parameter '${inclusions}' must be either boolean true or a string 'tree'`);
        }
        const response = await authFetch(url, options);
        const text = await response.text();
        const contentType = response.headers.get('content-type');
        const isJson = (contentType === 'application/json' || contentType === 'application/vnd.api+json');
        const crawlAllPages = options?.crawlAllPages ?? true;
        if (response.ok) {
            if (isJson) {
                const result = JSON.parse(text);
                if (crawlAllPages && Array.isArray(result.data) && result.links.next) {
                    if (inclusions) {
                        const otherResults = await fetchJson(result.links.next, {...options, inclusions: true});
                        result.data = result.data.concat(otherResults.data);
                        if (otherResults.included) {
                            result.included = (result.included || []).concat(otherResults.included);
                        }
                    } else {
                        return result.data.concat(await fetchJson(result.links.next, options));
                    }
                }
                if (inclusions === 'tree') {
                    const included = {};
                    for (const data of result.included || []) {
                        if (!included[data.type]) included[data.type] = {};
                        included[data.type][data.id] = data;
                    }
                    if (crawlAllPages) {
                        return { data: result.data, included };
                    } else {
                        return { data: result.data, included, meta: result.meta, links: result.links };
                    }
                } else if (inclusions) {
                    return { data: result.data, included: result.included };
                } else {
                    return result.data;
                }
            } else {
                return text;
            }
        } else {
            if (isJson) {
                const error = new Error(text);
                error.data = JSON.parse(text);
                throw error;
            } else {
                throw new Error(text);
            }
        }
    }

    async function postJson(url, data, options) {
        return fetchJson(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            ...options
        })
    }

    // allow users to pass in entire objects, but just send down types and ids
    function _trimRelationships(relationships) {
        const output = {};
        for (const [key, value] of Object.entries(relationships)) {
            if (typeof value === 'object' && value && 'data' in value) {
                output[key] = value;
            } else if (Array.isArray(value)) {
                output[key] = { data: value.map(relation => ({ type: relation.type, id: relation.id })) };
            } else {
                output[key] = { data: { type: value.type, id: value.id } };
            }
        }
        return output;
    }

    async function create({ type, attributes, relationships, included, version }) {
        const data = { type, attributes };
        if (relationships) data.relationships = _trimRelationships(relationships);
        if (included) {
            for (const inclusion of included) {
                if (inclusion.relationships) inclusion.relationships = _trimRelationships(inclusion.relationships);
            }
        }
        const body = { data };
        if (included) body.included = included;
        return postJson(type, body, { version });
    }

    async function update(data, {attributes, relationships, included, version}) {
        const requestData = { type: data.type, id: data.id, attributes };
        if (relationships) requestData.relationships = _trimRelationships(relationships);
        if (included) {
            for (const inclusion of included) {
                if (inclusion.relationships) inclusion.relationships = _trimRelationships(inclusion.relationships);
            }
        }
        const body = { data: requestData };
        if (included) body.included = included;
        return postJson(`${data.type}/${data.id}`, body, {version, method: 'PATCH'});
    }

    async function remove(data, {version}) {
        return fetchJson(`${data.type}/${data.id}`, {version, method: 'DELETE'});
    }

    async function uploadAsset(assetData, buffer, maxTriesPerPart = 10, version) {
        const targetStart = 0;
        const sourceFileChecksum = md5(buffer);
        await Promise.all(assetData.attributes.uploadOperations.map(async (uploadOperation, i) => {
            const body = Buffer.alloc(uploadOperation.length);
            const sourceStart = uploadOperation.offset;
            const sourceEnd = uploadOperation.offset + uploadOperation.length;
            buffer.copy(body, targetStart, sourceStart, sourceEnd);
            const method = uploadOperation.method;
            const headers = {};
            for (const requestHeader of uploadOperation.requestHeaders) {
                headers[requestHeader.name] = requestHeader.value;
            }
            for (let tries = 1; tries <= maxTriesPerPart; tries++) {
                // https://developer.apple.com/documentation/appstoreconnectapi/uploading_assets_to_app_store_connect
                // The provided upload URLs are unauthenticated and time-limited.
                // You don’t need to supply a JWT; don’t share the URLs.
                const response = await fetch(uploadOperation.url, { method, headers, body });
                if (response.ok) {
                    break;
                } else {
                    const errorText = `Failed uploading chunk ${i} of ${assetData.data.type}/${assetData.data.id}: ` +
                        `${response.status} ${response.statusText} ${await response.text()}`;
                    // console.log(errorText);
                    if (tries >= maxTriesPerPart) {
                        throw new Error(errorText);
                    }
                }
            }
        }));
        await update(assetData, { version, attributes: {
            uploaded: true,
            sourceFileChecksum,
        }});
    }

    async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    async function pollForUploadSuccess(assetUrl, logHeader = "", delayInMilliseconds = 1000, maxTries = 60) {
        if (logHeader) logHeader += ' ';
        let tries = 0;
        while (true) {
            if (maxTries) {
                tries++;
                if (tries >= maxTries) throw new Error(`${logHeader}${assetUrl} upload state was ${state} after ${maxTries} tries`);
            }
            let assetData;
            try {
                assetData = await fetchJson(assetUrl);
            } catch (e) {
                if (e?.data?.errors?.[0]?.status == 500) {
                    console.log(`${logHeader}${assetUrl} 500 error`);
                    await sleep(delayInMilliseconds);
                    continue;
                }
            }
            const assetDeliveryState = assetData?.attributes?.assetDeliveryState;
            const state = assetDeliveryState?.state;
            if (!state) throw new Error(`${logHeader}${assetUrl} couldn't find attributes.assetDeliveryState.state: ${JSON.stringify(assetData)}`);
            if (state === 'COMPLETE') return;
            if (state === 'FAILED') throw new Error(`${logHeader}${assetUrl} upload failed: ${JSON.stringify(assetDeliveryState.errors)}`);
            //console.log(`${logHeader} ${state} ${assetUrl}`);
            await sleep(delayInMilliseconds);
        }
    }

    return { read, readAll, fetch: authFetch, fetchJson, postJson, create, update, remove, uploadAsset, pollForUploadSuccess };
}

