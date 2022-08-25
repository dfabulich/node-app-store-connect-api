import { Api, ApiConfig, Platform, ScreenshotDisplayType } from './GeneratedApi.js'
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import { homedir } from 'os';
import {readFile} from 'fs/promises';

const {sign} = jwt;

const issuerId = "69a6de98-467d-47e3-e053-5b8c7c11a4d1";
const apiKey = "J5SBQN9W85";
const privateKey = await readFile(`${homedir()}/.appstoreconnect/private_keys/AuthKey_${apiKey}.p8`);

const tokenExpiresInSeconds = 1200;

function _getBearerToken(issuerId, apiKey, privateKey) {
    const NOW = Math.round((new Date()).getTime() / 1000);

    const PAYLOAD = {
        'iss': issuerId,
        'exp': NOW + tokenExpiresInSeconds,
        'aud': 'appstoreconnect-v1'
    };

    const bearerToken = jwt.sign(
        PAYLOAD,
        privateKey,
        {
            'algorithm': 'ES256',
            'header': {
                'alg': 'ES256',
                'kid': apiKey,
                'typ': 'JWT'
            }
        }

    );

    return bearerToken;
}

const bearerToken = _getBearerToken(issuerId, apiKey, privateKey);

const retries = 10;
const log = true;

console.log({bearerToken});

const apiConfig: ApiConfig = {
    securityWorker: () => {
        return {headers: {Authorization: `Bearer ${bearerToken}`}}
    },
    customFetch: async (url, init) => {
        let response;
        for (let i = 0; i < (retries + 1); i++) {
            if (log) console.log(`node-app-store-connect-api: requesting ${url}`);
            try {
                response = await fetch(url, init);
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
        return fetch(url, init);
    }
}

const api = new Api(apiConfig);

(async () => {
    try {
        const {data: [app]} = await api.v1.appsGetCollection({ limit: 1 });
        console.log({app});
        try {
            await api.v1.appStoreVersionsCreateInstance({
                data: {
                    type: "appStoreVersions",
                    attributes: { platform: Platform.IOS, versionString: "1.0.1" },
                    relationships: { app: { data: { id: app.id, type: "apps" } } }
                }
            });
        } catch (e) { } // ENTITY_ERROR.ATTRIBUTE.INVALID.DUPLICATE
        const {data: [version]} = await api.v1.appsAppStoreVersionsGetToManyRelated(app.id, {
            "filter[versionString]": ["1.0.1"],
            "filter[platform]": ["IOS"],
            "limit": 1,
        });
        console.log({version});
        const {data: localizations} = await api.v1.appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated(version.id);
        const localization = localizations.find(localization => localization.attributes.locale === 'en-US');
        console.log(JSON.stringify({localization}, null, 2));
        const {data: appScreenshotSets} = await api.v1.appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(localization.id);
        const appScreenshotSet = appScreenshotSets.find(appScreenshotSet => appScreenshotSet.attributes.screenshotDisplayType === ScreenshotDisplayType.APPIPHONE55);
        console.log({appScreenshotSet});
    } catch (e) {
        console.error(e);
    }
    
})();
