import { api } from '../index.mjs';
import { basename } from 'path';
import { stat, readFile } from 'fs/promises';

// ported from Python sample at https://developer.apple.com/documentation/appstoreconnectapi/app_metadata/uploading_app_previews

// KEY CONFIGURATION - Put your API Key info here.

const issuerId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
const apiKey = "XXXXXXXXXX";
const privateKey = `
----- BEGIN PRIVATE KEY-----
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXX
----- END PRIVATE KEY-----
`;

// UPLOAD - This is where the interaction with App Store Connect API happens.
async function upload(bundleId, platform, versionString, locale, previewType, filePath) {
    /*
    1. Look up the app by bundle id.
    2. Look up the version by platform and version number.
    3. Get all localizations for the version and looks for the requested locale.
    4. Create the localization if the requested localization doesn't exist.
    5. Get all available app preview sets from the localization.
    6. Create the app preview set for the requested type if it doesn't exist.
    7. Reserve an app preview in the selected app preview set.
    8. Upload the preview
    9. Poll for upload success
    */

    if (apiKey == "XXXXXXXXXX") {
        throw new Error("Missing the API key. Configure your key information at the top of the upload-preview.mjs file first.");
    };

    const {read, readAll, create, uploadAsset, pollForUploadSuccess} = await api({issuerId, apiKey, privateKey});

    console.log("Find (or create) app preview set.");

    // 1. Look up the app by bundle id.
    const { data: [app] } = await read(`apps?filter[bundleId]=${bundleId}&limit=1`);
    if (!app) throw new Error(`No app found with bundle id ${bundleId}`);

    // 2. Look up the version by platform and version number.
    const { data: [version] } = await read(`apps/${app.id}/appStoreVersions?filter[versionString]=${versionString}&filter[platform]=${platform}&limit=1`);
    if (!version) throw new Error(`No app store version found with version ${version}`);

    // 3. Get all localizations for the version and look for the requested locale.
    let { data: localizations } = await readAll(`appStoreVersions/${version.id}/appStoreVersionLocalizations`);
    // note that appStoreVersionLocalizations doesn't support filtering by locale; we have to do it ourselves, client-side.
    let localization = localizations.find(localization => localization.attributes.locale === locale);

    // 4. If the requested localization does not exist, create it.
    // Localized attributes are copied from the primary locale so there's no need to worry about them here.
    if (!localization) {
        localization = await create({
            type: "appStoreVersionLocalizations",
            attributes: { locale },
            relationships: { appStoreVersion: version }
        });
    }

    // 5. Get all available app preview sets from the localization.
    let { data: appPreviewSets } = await readAll(localization.relationships.appPreviewSets.links.related);
    let appPreviewSet = appPreviewSets.find(appPreviewSet => appPreviewSet.attributes.previewType === previewType);

    // 6. If an app preview set for the requested type doesn't exist, create it.
    if (!appPreviewSet) {
        appPreviewSet = await create({
            type: "appPreviewSets",
            attributes: { previewType },
            relationships: {appStoreVersionLocalization: localization}
        });
    }

    // 7. Reserve an app preview in the selected app preview set.
    // Tell the API to create a preview before uploading the preview data.
    console.log("Reserve new app preview.");

    const preview = await create({
        type: "appPreviews",
        attributes: {
            fileName: basename(filePath),
            fileSize: (await stat(filePath)).size,
        },
        relationships: { appPreviewSet }
    });

    // 8. Upload each part according to the returned upload operations.
    console.log("Upload preview asset.");
    await uploadAsset(preview, await readFile(filePath));

    // 9. Poll for upload success
    console.log("Asset uploaded. Poll for success.");
    await pollForUploadSuccess(preview.links.self);

    console.log(`App preview successfully uploaded to: ${preview.links.self}`);
    console.log("You can verify success in App Store Connect or using the API.");
}

if (process.argv.length !== 8) {
    console.error("usage: node upload-preview.mjs bundleId platform version locale previewType filePath");
    console.error(" e.g.  com.example.myapp IOS 1.0.2 en-US IPHONE_65 /path/to/movie.mp4")
    process.exit(1);
}

const [,,bundleId, platform, version, locale, previewType, filePath] = process.argv;
await upload(bundleId, platform, version, locale, previewType, filePath);