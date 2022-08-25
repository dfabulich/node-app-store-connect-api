(To do all this, we'd have to discard swagger generator and do it all by hand??)

Fix the bug where swagger double-generates SubscriptionStatusUrlVersion
Copy and rebuild swagger templates from scratch so we don't have to manually edit the generated API (ErrorResponse)
Use node-fetch in the template
Accept issuerId, apiKey, and privateKey in constructor (and jwt sign it ourselves)
stop generating enums; use string types instead

Automatic retries
crawling all pages

swizzle "included" array to a tree (a type-safe tree??)
Follow relationships links (with type safety?!)
    Given an App, hang a bunch of GetToMany functions off of it, so you can say app.getAppStoreVersions({...}) with the id prepopulated

don't require explicit `data:` parameter on create or update

When creating
    don't make me repeat the type
    Accept retrieved object in place of relationships

Uploads
    & poll for upload success

