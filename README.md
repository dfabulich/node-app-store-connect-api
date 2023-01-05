# App Store Connect API for Node

A library to support [Apple's App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi).

See the [WWDC video introducing the API](https://developer.apple.com/videos/play/wwdc2020/10004/).

Requires Node 16+. (This package uses ES Modules.)

# API Keys Required

You'll have to start by [creating an API key](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api) on the App Store Connect site.

When you're done, you'll have an issuer ID (like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`), an API key (like `XXXXXXXXXX`) and a private key file.

**Keep your private keys private.** Store them securely, outside of your git repository. If you store your private key in `~/.appstoreconnect/private_keys/AuthKey_XXXXXXXXXX.p8` (where that `XXXXXXXXXX` is your API key), you don't have to pass us a `privateKey`; we'll autodetect your key from there.

# Usage

```js
import { api } from `node-app-store-connect-api`;

const { read, readAll, create, update, remove } = await api({issuerId, apiKey, privateKey});

// log all apps
const { data: apps } = await readAll('https://api.appstoreconnect.apple.com/v1/apps'));
console.log(apps);
```

The `readAll()` function returns a `Promise` for an object containing `data` (returned by the request) and an optional `included` object. (See the "Data and Inclusions" section below for more details on that.)

When using this API, you'll want to make heavy use of [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). In the example above, we're declaring a variable `apps` and setting it to the value of the `data` object in the response.

You can use an absolute URL, or, at your convenience, you can omit the `https://api.appstoreconnect.apple.com/v1/` part of the URL.

```js
const { data: apps } = await readAll('apps');
console.log(apps);
```

You'll need your app's numeric "app ID" to use the API; the `apps` endpoint will provide it, or you can get it directly from the App Store Connect web site.

Note that some APIs require you to pass an unusual version number, e.g. `v2/inAppPurchases`; you can specify a version number like this:

```js
const { data: inAppPurchase } = await readAll('inAppPurchases/12345678', { version: 2 });
console.log(inAppPurchase);
```

## Pagination: `read()` vs. `readAll()`

The App Store Connect API can return data in multiple pages. You're meant to request each page one at a time, using the data from the `links` section.

`readAll()` automatically crawls all pages in a response by default. If you'd like that not to happen, you can use the `read()` function instead:

```js
const { data: apps } = await read('apps');
```

When using `read()`, consider using a `limit` parameter to limit the number of results:

```js
const { data: [app] } = await read('apps?limit=1');
```

When making requests that return a single object, e.g. `'apps/123456789'`, `read()` and `readAll()` do the same thing. It might be more readable to use `read()` in that case, but that's up to you.

App Store Connect API `read()` responses may also include a `links` section and a `meta` section used mostly for pagination, if you're interested in those. (You typically don't need them, because `readAll()` will paginate for you.)

### `readAll()` and `?limit=N` affects performance, _not_ total results

Most App Store Connect APIs allow a `limit` parameter, allowing you to restrict the number of results returned. But note that `readAll()` and `?limit=1` will _not_ do what you might think.

`limit` means something like "number of results per request." If you have 500 apps, `readAll('apps?limit=1')` will dutifully crawl all 500 apps in 500 requests, one at a time. 😳

If you want to limit the total number of results, use `read('apps?limit=1')` instead of `readAll()`.

On the other hand, if you _do_ have 500 apps, well, the default `limit` is usually 50, so `readAll('apps')` will perform ten requests, one at a time. You can greatly improve the performance of `readAll()` by passing in the maximum limit, like this:

```js
const { data: apps } = readAll('apps?limit=200');
```

Instead of performing ten requests for 500 apps, 50 apps at a time, this will make `readAll()` make just three requests for 500 apps, 200 at a time.

When debugging performance, you might want to pass in an options object, `{ logRequests: true }`. That will show you all the requests we're making.

```js
const { data: apps } = readAll('apps?limit=200', { logRequests: true });
```

## Data and Inclusions

The App Store Connect API endpoint returns all data in a `data` key, like this:

```js
{
  data: [ /* actual data here */ ]
}
```

But there can be information outside the `data` key that you might want/need. If you choose to use an `include` query parameter, like `apps?include=appStoreVersions`, then the App Store Connect API will return that data as a separate `included` key, outside the `data` response:

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

**This library will transform the 'included' data by default.**

Apple's default behavior is to return all `included` data in a flat array of objects. Even if you `include` multiple types of data, like this: `readAll('apps?include=builds,appStoreVersions')`, all of them will be shuffled together into one giant array.

In our experience, having inclusions be one giant array is not ideal, so we decided to transform the `included` data automagically.

Both `read()` and `readAll()` will return the inclusions as a nested JSON object, where the top-level keys are type names (like `builds` and `appStoreVersions`), mapping to another JSON object, mapping IDs to objects.

The result of `readAll('apps?include=builds,appStoreVersions')` would look like this:

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
      "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy": {
        type: "appStoreVersions",
        id: "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
        attributes: { /* ... */ },
        relationships: { /* ... */ }
      }
    }
  }
}
```

Handling inclusions as a tree makes it easier to map from `relationships` to the `included` objects.

```js
const {data: apps, included: { builds, appStoreVersions } =
  await readAll('apps?include=builds,appStoreVersions');
for (const app of apps) {
  const versionStrings = app.relationships.appStoreVersions.data
    .map(rel => appStoreVersions[rel.id])
    .map(appStoreVersion => appStoreVersion.attributes.versionString);
  const buildVersions = app.relationships.builds.data
    .map(rel => builds[rel.id])
    .map(build => build.attributes.version);
  console.log({name: app.attributes.name, versionStrings, buildVersions});
}
```

## Creating, updating, and removing a new App Store version

We create objects with the `create` function. It constructs a create request (a `POST`). It uses the "type" as the URL, and it allows you to pass in a data object as a relationship.

```js
const { read, create, update, remove } = await api({issuerId, apiKey, privateKey});

// let's use the first app ID, for example
const { data: [app] } = await read('apps?limit=1');

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

const { read, create, uploadAsset, pollForUploadSuccess } = 
  await api({issuerId, apiKey, privateKey});

// in real life, you might have to create your
// own app, version, localization, and screenshot set
const { data: [app] } = await read('apps?limit=1');
const { data: [version] } = await read(
  app.relationships.appStoreVersions.links.related);
const { data: [l10n] } = await read(
  version.relationships.appStoreVersionLocalizations.links.related);
const { data: [appScreenshotSet] } = await (read(
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
});

// upload the asset
await uploadAsset(appScreenshot, await readFile(filePath));
// poll the API for upload success/failure
await pollForUploadSuccess(appScreenshot.links.self);
```

**That's a lot of work.** Check out the working samples in the [`samples`](https://github.com/dfabulich/node-app-store-connect-api/tree/main/samples) directory of this repository.


## Working with In-App Purchases

In-app purchases are _really_ tough to work with. They sometimes (but not always) require using `/v2` URLs, and the way they store prices is quite confusing.

Query for all IAPs for your app like this:

```js
const { data: inAppPurchases } = await readAll(`apps/${app.id}/inAppPurchasesV2`);
```

### IAP Price Information

Getting all prices is a pain in the butt. `inAppPurchases` objects are related to `iapPriceSchedule` objects, but those are nothing but `relationships` links to `manualPrices`.

And each "manual price" `inAppPurchasePrices` object has its own territory (there are 175 territories), so if you query for all prices for an IAP, you're going to get at least 175 price objects. Worse, the territory and the "price point" of `inAppPurchasePrices` objects is _hidden_ unless you explicitly `include` them with inclusions. So, to explore all manual prices for a given IAP, you'll do it like this:

```js
const { data: [inAppPurchase] } = await read(`apps/${app.id}/inAppPurchasesV2`);
const { data: inAppPurchasePrices, included: { inAppPurchasePricePoint, territory } } = await readAll(`inAppPurchasePriceSchedules/${inAppPurchase.id}/manualPrices?include=inAppPurchasePricePoint,territory`)
```

But it's very unlikely that you actually want to explore all manual prices for a given IAP; you probably just want price tiers. The easiest way to do that is to filter to a single territory (e.g. `USA`).

```js
const { data: [inAppPurchase] } = await read(`apps/${app.id}/inAppPurchasesV2`);
const { data: inAppPurchasePrices, included: { inAppPurchasePricePoint } } =
  await readAll(`inAppPurchasePriceSchedules/${inAppPurchase.id}/manualPrices?include=inAppPurchasePricePoint&filter[territory]=USA`);
```

That's supposed to return one price object per entry on the price schedule. The one with `startDate: null` represents the current live price.

So, if you want the current latest price for an IAP, you'd do it like this:

```js
async function readPriceForIosIap(iap) {
    const { data: inAppPurchasePrices, included: { inAppPurchasePricePoints} } = await readAll(
        `inAppPurchasePriceSchedules/${iap.id}/manualPrices?include=inAppPurchasePricePoint&filter[territory]=USA`);

    const [currentPriceObject] = inAppPurchasePrices.filter(price => price.attributes.startDate === null);

    const currentPricePoint = inAppPurchasePricePoints[
        currentPriceObject.relationships.inAppPurchasePricePoint.data.id
    ];

    return currentPricePoint;
}

const { attributes: { priceTier, customerPrice } } = await readPriceForIosIap(iap);
```

### Creating an IAP

Creating an IAP requires a `/v2` URL, so you'd do it like this, with `version: 2`:

```js
const inAppPurchase = await create({
  type: 'inAppPurchases',
  attributes: { name: "test", productId: "com.example.test", inAppPurchaseType: "CONSUMABLE"},
  relationships: { app },
  version: 2
});
```

### Setting an IAP's price

First, you'll have to determine the price tier ID you want.

Each price tier ID is a number; most of them are equal to the rounded price in US dollars. The free price tier is `0`. The $5.99 price tier is `6`, the $6.99 price tier is `7`, the $7.99 price tier is `8`, and so on.

But there are also a handful of "alternate price tiers" for low-priced tiers. As of Jan 2023, the alternate price tiers are:

* Alternate Tier 1: 550
* Alternate Tier 2: 560
* Alternate Tier 3: 570
* Alternate Tier 4: 580
* Alternate Tier 5: 590
* Alternate Tier A: 510
* Alternate Tier B: 530

If you want to use another price tier, you might have to query for the price tier ID.

To get a list of all possible price tiers with their prices in a single territory, you do it like this:

const {data: pricePoints} =
  await readAll(`inAppPurchases/${inAppPurchase.id}/pricePoints?filter[territory]=USA`,
    {version: 2}
  );

Each price point has a `customerPrice`, e.g. `4.99`, and a `priceTier`, e.g. `5`.

Once you know which tier ID you want, you can query for the desired price point by price tier ID, and create an entry on the price schedule like this:

```
const priceTier = 5;
const {data: [inAppPurchasePricePoint]} = await read(
  `inAppPurchases/${inAppPurchase.id}/pricePoints?filter[priceTier]=${priceTier}&filter[territory]=USA&limit=1`,
  {version: 2}
);

await create({
  type: 'inAppPurchasePriceSchedules',
  relationships: {
    inAppPurchase,
    manualPrices: [{
      type: "inAppPurchasePrices",
      id: "${price1}"
    }]
  },
  included: [{
    type: "inAppPurchasePrices",
    id: "${price1}",
    attributes: {
      startDate: null,
    },
    relationships: {
      inAppPurchaseV2: inAppPurchase,
      inAppPurchasePricePoint
    }
  }]
});
```

Note the use of an `included` array in the call to `create()`. We're defining a relationship to a new `inAppPurchasePrices` object that we're creating in the `included` array. The `id` string `"${price1}"` isn't a backtick JavaScript template string; we're literally passing the string "`${price1}`" to Apple, including the dollar sign and the brackets. By using the same `id` string in the initial `relationships` object and in the `included` array, Apple understands that we're creating an object and using it immediately as a relationship.

## Raw Requests and Responses

If you want access to the data exactly as App Store Connect provided it, circumventing all of our "helpful" conveniences, (like transforming the `included` results,) the API provides a raw `fetch` function. The `fetch` function follows the rules of the standard `fetch` API, but we automatically add the `Authorization` header, and prepend `https://api.appstoreconnect.apple.com/v1` on relative URLs.

```js
import { api } from `node-app-store-connect-api`;

const { fetch } = await api({issuerId, apiKey, privateKey});

// read the raw JSON from a fetch request
const { data: [app], included: appStoreVersions, links, meta } =
  await fetch('apps?include=appStoreVersions&limit=1').then(r=>r.json());

// create an appStoreVersion the long way
const { appStoreVersion } = await fetch('appStoreVersions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: {
    type: 'appStoreVersions',
    attributes: { platform: 'IOS', versionString: '1.0.1' },
    relationships: { app: { data: { type: "apps", id: app.id } } }
  }})
}).then(r=>r.json());
```
