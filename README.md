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
import { api } from `node-app-store-connect-api`;

const { fetchJson, create, update } = await api({issuerId, apiKey, privateKey});

// log all apps
const apps = await fetchJson('https://api.appstoreconnect.apple.com/v1/apps'));
console.log(apps);
```

You can use an absolute URL, or, at your convenience, you can omit the `https://api.appstoreconnect.apple.com/v1/` part of the URL.

```js
const apps = await fetchJson('apps');
console.log(apps);
```

You'll need your app's numeric "app ID" to use the API; the `apps` endpoint will provide it, or you can get it directly from the App Store Connect web site.

## Creating, updating, and removing a new App Store version

We create objects with the `create` function. It constructs a create request (a `POST`). It uses the "type" as the URL, and it allows you to pass in a data object as a relationship.

```js
const { fetchJson, create, update, remove } = await api({issuerId, apiKey, privateKey});

// let's use the first app ID, for example
const [app] = await fetchJson('apps');

const appStoreVersion = await create({
  type: 'appStoreVersions',
  attributes: { platform: 'IOS', versionString: '1.0.1' },
  relationships: { app }
);
```

(Officially, the `relationships` that we submit to Apple aren't supposed to be entire fetched objects; they're supposed to contain just a `data` object containing only the `type` and `id` of the related object. This API takes care of that detail for you, because writing out relationships the official way is much wordier, but you're allowed to write out relationships by hand, if you prefer.)

```js
const appStoreVersion = await create({
  type: 'appStoreVersions',
  attributes: { platform: 'IOS', versionString: '1.0.1' },
  relationships: { app: { data: { type: "apps", id: app.id } } }
);
```

We can also update objects with the `update` function.

```js
await update(appStoreVersion, { attributes: { versionString: '1.0.2' }});
```

Or you can delete objects with the `remove` function. (`delete` is a language keyword in JavaScript!)

```js
await remove(appStoreVersion);

// or, delete by ID, if you don't have the entire object:

await remove({ type: 'appStoreVersions', id: appStoreVersionId });
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
import { api } from `node-app-store-connect-api`;

const { fetchJson, create, uploadAsset, pollForUploadSuccess } = 
  await api({issuerId, apiKey, privateKey});

// in real life, you might have to create your
// own app, version, localization, and screenshot set
const [app] = await fetchJson('apps');
const [version] = await fetchJson(
  app.relationships.appStoreVersions.links.related);
const [l10n] = await fetchJson(
  version.relationships.appStoreVersionLocalizations.links.related);
const [appScreenshotSet] = await (fetchJson(
  l10n.relationships.appScreenshots.links.related);

const filePath = '/path/to/myScreenshot.png';
const fileSize = await stat(filePath)).size;

// create the screenshot reservation
const appScreenshot = await create({
  type: 'appScreenshots',
  attributes: {
    fileName: 'myScreenshot.png',
    fileSize: fileSize,
  },
  relationships: { appScreenshotSet }
}});

// upload the asset
await uploadAsset(appScreenshot, await readFile(filePath));
// poll the API for upload success/failure
await pollForUploadSuccess(appScreenshot.links.self);
```

**That's a lot of work.** Check out the working samples in the `samples` directory of this repository.