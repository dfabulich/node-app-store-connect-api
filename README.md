# App Store Connect API for Node

A library to support [Apple's App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi).

See the [WWDC video introducing the API](https://developer.apple.com/videos/play/wwdc2020/10004/).

Requires Node 16+. (This package uses ES Modules.)

# API Keys Required

You'll have to start by [creating an API key](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api) on the App Store Connect site.

When you're done, you'll have an issuer ID (like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`), an API key (like `XXXXXXXXXX`) and a private key file.

**Keep your private keys private.** Store them securely, outside of your git repository. If you use Apple's Transporter tool, it recommends storing private keys in your home directory, in a file named like `~/.appstoreconnect/private_keys/AuthKey_XXXXXXXXXX.p8` (where that `XXXXXXXXXX` is your API key). If you store your private key in that standard location, you don't have to pass us a `privateKey`; we'll autodetect your key from there.

# Usage

```js
import { api } from `app-store-connect-api`;

const { fetchJson, postJson } = await api({issuerId, apiKey, privateKey});

// log all apps
const apps = (await fetchJson('https://api.appstoreconnect.apple.com/v1/apps')).data;
console.log(apps);
```

You can use an absolute URL, or, at your convenience, you can omit the `https://api.appstoreconnect.apple.com/v1/` part of the URL.

```js
const apps = (await fetchJson('apps')).data;
console.log(apps);
```

You'll need your app's numeric "app ID" to use the API; the `apps` endpoint will provide it, or you can get it directly from the App Store Connect Web UI.

## Creating a new App Store version

```js
// let's use the first app ID, for example
const appId = apps[0].id;

const appStoreVersion = (await postJson('appStoreVersions', {data: {
	type: 'appStoreVersions',
	attributes: {
		platform: 'IOS',
		versionString: '1.0.1',
	},
	relationships: { app: { data: {
		type: "apps",
		id: appId,
	}}}
}})).data;
```

## Uploading an asset (screenshots, app previews)

Uploading an asset (a screenshot or a preview) is a multi-step process.

* Assets are linked to sets (App Screenshot Sets, App Preview Sets)
* Sets have a type, corresponding to the screen size of the device. These are defined as strings given by Apple ([screenshot display types](https://developer.apple.com/documentation/appstoreconnectapi/screenshotdisplaytype) and [preview types](https://developer.apple.com/documentation/appstoreconnectapi/previewtype)).
* Different versions of an app can have different screenshots, and each app version can have multiple "localizations," allowing you to show different screenshots to users in different countries/languages.

So, to upload a screenshot, you must start by fetching or creating:

* App
* App Store Version
* App Store Version Localization
* App Screenshot Set (with the selected `screenshotDisplayType`)
* App Screenshot

But the "App Screenshot" object is just a "reservation" object, allowing you to do the upload. Apple's documentation explains how to upload assets using the App Screenshot reservation, in a series of "upload operations." This API will take care of that for you.

```js
import { stat, readFile } from 'fs/promises';
import { api } from `app-store-connect-api`;

const { fetchJson, postJson, uploadAsset, pollForUploadSuccess } = 
	await api({issuerId, apiKey, privateKey});

// in real life, you might have to create your
// own app, version, localization, and screenshot set
const app = apps[0];
const appStoreVersion = (await fetchJson(app.relationships.appStoreVersions.links.related))[0];
const appStoreVersionLocalization = (await fetchJson(appStoreVersion.relationships.appStoreVersionLocalizations.links.related))[0];
const appScreenshotSet = (await (fetchJson(appStoreVersionLocalization.relationships.appScreenshots.links.related))[0];

const filePath = '/path/to/myScreenshot.png';
const fileSize = (await stat(filePath)).size;

// create the screenshot reservation
const appScreenshot = (await postJson('appScreenshots', { data: {
	type: 'appScreenshots',
	attributes: {
		fileName: 'myScreenshot.png',
		fileSize: fileSize,
	},
	relationships: { appScreenshotSet: { data: {
		type: 'appScreenshotSets',
		id: appScreenshotSet.id,
	}}},
}})).data;

// upload the asset
await uploadAsset(appScreenshot, await readFile(filePath));
// poll the API for upload success/failure
await pollForUploadSuccess(appScreenshot.links.self);
```

**That's a lot of work.** Check out the working samples in the `samples` directory of this repository.