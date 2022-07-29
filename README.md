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

Note that some APIs require you to pass an unusual version number, e.g. `v2/inAppPurchases`; you can specify a version number like this:

```js
const inAppPurchase = await fetchJson('inAppPurchases/12345678', {version: 2});
console.log(inAppPurchase);
```

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

Note that some APIs require you to pass an unusual version number, e.g. `v2/inAppPurchases`; you must do that by adding version number as the `version`.

```js
const inAppPurchase = await create({
  type: 'inAppPurchases',
  attributes: { name: "test", productId: "com.example.test", inAppPurchaseType: "CONSUMABLE"},
  relationships: { app },
  version: 2
});
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

When updating or removing objects with unusual version numbers, e.g. `v2/inAppPurchases`, you must pass the `version` number in options.

```js
await update(inAppPurchase, { attributes: { name: "Test 2" }, version: 2});
await remove(inAppPurchase, { version: 2 });
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

**That's a lot of work.** Check out the working samples in the [`samples`](https://github.com/dfabulich/node-app-store-connect-api/tree/main/samples) directory of this repository.

## Pagination

The App Store Connect API can return data in multiple pages. You're meant to request each page one at a time, using the data from the `links` section.

This API automatically crawls all pages in a response by default. If you'd like that not to happen, you can pass an object containing options to `fetchJson` like this:

```js
const apps = await fetchJson('apps', { crawlAllPages: false });
```

But, instead, consider using a `limit` parameter to limit the number of results:

```js
const apps = await fetchJson('apps?limit=1');
```

## Data and Inclusions

By default, the App Store Connect API endpoint returns all data in a `data` key, like this:

```js
{
  data: [ /* actual data here */ ]
}
```

As a convenience, by default, this library automagically returns the `data` array directly, not wrapped in a `{data}` object. Otherwise, you'd have to do this, which can be annoying:

```js
const apps = (await fetchJson('apps')).data;
// or this:
const {data: apps} = await fetchJson('apps');
```

But there is information outside the `data` key that you might want/need. If you choose to use an `include` query parameter, like `apps?include=appStoreVersions`, then the App Store Connect API will return that data as a separate `included` key, outside the `data` response:

```js
{
  data: [
    {
      type: "apps",
      id: 123,
      attributes: { /* ... */ },
      relationships: {
        appStoreVersions: { data: [
          { type: "appStoreVersions", id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" }
        ]}
      }
    }
  ],
  included: [
    {
      type: "appStoreVersions",
      id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      attributes: { /* ... */ },
      relationships: { /* ... */ }
    }
  ]
}
```

**This library will skip/ignore the `included` data by default.**

You can pass an `inclusions` option to `fetchJson` to make it include the `data` key and the `included` key.

```js
const {data: apps, included: appStoreVersions} =
  await fetchJson('apps?include=appStoreVersions', {inclusions: true});
```

In our experience, having inclusions be an array is not ideal, especially if you include multiple kinds of objects, like this: `fetchJson('apps?include=builds,appStoreVersions')`

So, we've also provided an `{inclusions: 'tree'}` option. If you use that, we'll provide the inclusions as a nested JSON object, where the top-level keys are type names (like `builds` and `appStoreVersions`), mapping to another JSON object, mapping IDs to objects.

The result of `fetchJson('apps?include=builds,appStoreVersions', {inclusions: 'tree'})` would look like this:

```js
{
  data: [ /* ... */ ],
  included: {
    builds: {
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx": {
        type: "builds",
        id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        attributes: { /* ... */ },
        relationships: { /* ... */ }
      }
    },
    appStoreVersions: {
      "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx": {
        type: "appStoreVersions",
        id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        attributes: { /* ... */ },
        relationships: { /* ... */ }
      }
    }
  }
}
```

Handling inclusions as a tree makes it easier to map from `relationships` to the `included` objects.

```js
const {data: apps, included} =
  await fetchJson('apps?include=builds,appStoreVersions', {inclusions: 'tree'});
for (const app of apps) {
  const versionStrings = app.relationships.appStoreVersions.data
    .map(rel => included.appStoreVersions[rel.id])
    .map(appStoreVersion => appStoreVersion.attributes.versionString);
  const buildVersions = app.relationships.builds.data
    .map(rel => included.builds[rel.id])
    .map(build => build.attributes.version);
  console.log({name: app.attributes.name, versionStrings, buildVersions});
}
```

## Raw Requests and Responses

App Store Connect API responses also include a `links` section and a `meta` section used mostly for pagination, if you're interested in those. (You typically don't need them, because our API will paginate for you.)

If you want access to the data exactly as App Store Connect provided it, circumventing all of our "helpful" conveniences, the API provides a raw `fetch` function. The `fetch` function follows the rules of the standard `fetch` API, but we automatically add the `Authorization` header, and prepend `https://api.appstoreconnect.apple.com/v1` on relative URLs.

```js
import { api } from `node-app-store-connect-api`;

const { fetch } = await api({issuerId, apiKey, privateKey});

// read the raw JSON from a fetch request
const { data: apps, included: appStoreVersions, links, meta } =
  await fetch('apps?include=appStoreVersions').then(r=>r.json());

// create an appStoreVersion the long way
const appId = apps[0].id;
const { appStoreVersion } = await fetch('appStoreVersions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: {
    type: 'appStoreVersions',
    attributes: { platform: 'IOS', versionString: '1.0.1' },
    relationships: { app: { data: { type: "apps", id: appId } } }
  }})
}).then(r=>r.json());
```
