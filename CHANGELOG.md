v2: Initial public release

v3:
* Added support for `version` parameter, to handle `/v2` URLs
* Retry 500 errors
* Add documentation for working with IAPs

v4:
* Added support for `read()` and `readAll()`, a clearer API than `fetchJson` and its `options` object

v4.1:
* Fixed array relationships
* Add support for `included` array in `create()` and `update()`
* Add documentation for setting IAP prices

v4.2:
* Added `params` object

v5.0:
* The library now works in browsers and in Node.js 18+
* Increased minimum required Node version to v18
* Removed convenience to automatically read the private key from `~/.appstoreconnect` (not compatible with browsers); documented alternative
* Removed dependency on `node-fetch` (now using `fetch` from global, available in browsers and Node.js 18+)
* Replaced dependency on `jsonwebtoken` with `jose`, because `jsonwebtoken` doesn't work in browsers and `jose` does
