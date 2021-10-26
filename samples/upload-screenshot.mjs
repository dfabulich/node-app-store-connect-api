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
async function upload(bundleId, platform, versionString, locale, screenshotDisplayType, filePath) {
    /*
    1. Look up the app by bundle id.
    2. Look up the version by platform and version number.
    3. Get all localizations for the version and looks for the requested locale.
    4. Create the localization if the requested localization doesn't exist.
    5. Get all available app screenshot sets from the localization.
    6. Create the app screenshot set for the requested type if it doesn't exist.
    7. Reserve an app screenshot in the selected app screenshot set.
    8. Upload the screenshot
    9. Poll for upload success
    */

    if (apiKey == "XXXXXXXXXX") {
        throw new Error("Missing the API key. Configure your key information at the top of the upload-screenshot.mjs file first.");
    };

    const {fetchJson, create, uploadAsset, pollForUploadSuccess} = await api({issuerId, apiKey, privateKey});

    console.log("Find (or create) app screenshot set.");

    // 1. Look up the app by bundle id.
    const [app] = await fetchJson(`apps?filter[bundleId]=${bundleId}`);
    if (!app) throw new Error(`No app found with bundle id ${bundleId}`);

    // 2. Look up the version by platform and version number.
    const [version] = await fetchJson(`apps/${app.id}/appStoreVersions?filter[versionString]=${versionString}&filter[platform]=${platform}`);
    if (!version) throw new Error(`No app store version found with version ${version}`);

    // 3. Get all localizations for the version and look for the requested locale.
    let localization = (await fetchJson(`appStoreVersions/${version.id}/appStoreVersionLocalizations`))
        .find(localization => localization.attributes.locale === locale);

    // 4. If the requested localization does not exist, create it.
    // Localized attributes are copied from the primary locale so there's no need to worry about them here.
    if (!localization) {
        localization = await create({
            type: "appStoreVersionLocalizations",
            attributes: { locale },
            relationships: {appStoreVersion: version}
        });
    }

    // 5. Get all available app screenshot sets from the localization.
    let appScreenshotSet = (await fetchJson(localization.relationships.appScreenshotSets.links.related))
        .find(appScreenshotSet => appScreenshotSet.attributes.screenshotDisplayType === screenshotDisplayType);

    // 6. If an app screenshot set for the requested type doesn't exist, create it.
    if (!appScreenshotSet) {
        appScreenshotSet = await create({
            type: "appScreenshotSets",
            attributes: { screenshotDisplayType },
            relationships: {appStoreVersionLocalization: localization}
        });
    }

    // 7. Reserve an app screenshot in the selected app screenshot set.
    // Tell the API to create a screenshot before uploading the screenshot data.
    console.log("Reserve new app screenshot.");

    const screenshot = await create({
        type: "appScreenshots",
        attributes: {
            fileName: basename(filePath),
            fileSize: (await stat(filePath)).size,
        },
        relationships: { appScreenshotSet }
    });

    // 8. Upload each part according to the returned upload operations.
    console.log("Upload screenshot asset.");
    await uploadAsset(screenshot, await readFile(filePath));

    // 9. Poll for upload success
    console.log("Asset uploaded. Poll for success.");
    await pollForUploadSuccess(screenshot.links.self);

    console.log(`App screenshot successfully uploaded to: ${screenshot.links.self}`);
    console.log("You can verify success in App Store Connect or using the API.");
}

if (process.argv.length !== 8) {
    console.error("usage: node upload-screenshot.mjs bundleId platform version locale screenshotDisplayType filePath");
    console.error(" e.g.  com.example.myapp IOS 1.0.2 en-US APP_IPHONE_65 /path/to/screenshot.png")
    process.exit(1);
}

const [,,bundleId, platform, version, locale, screenshotDisplayType, filePath] = process.argv;
await upload(bundleId, platform, version, locale, screenshotDisplayType, filePath);