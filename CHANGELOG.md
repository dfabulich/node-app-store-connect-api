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