<!-- TOC -->
* [Upgrading The Opensearch JavaScript Client](#upgrading-the-opensearch-javascript-client)
  * [Upgrading from 2.x to 3.x](#upgrading-from-2x-to-3x)
    * [Breaking Changes](#breaking-changes)
      * [Removed camelCase params:](#removed-camelcase-params-)
      * [Removed overridden HTTP methods:](#removed-overridden-http-methods-)
      * [Changes in Request and Response types:](#changes-in-request-and-response-types-)
    * [Deprecations](#deprecations)
<!-- TOC -->

# Upgrading The Opensearch JavaScript Client
## Upgrading from 2.x to 3.x
Starting from 3.x, the API functions and modules in opensearch-js are generated from the [OpenSearch REST API specification](https://github.com/opensearch-project/opensearch-api-specification/). While the vast majority of the API remains the same, there are some breaking changes that may require updating your application when upgrading from 2.x to 3.x.
### Breaking Changes

#### Removed camelCase params: 
Every API function now only accepts parameters matching the OpenSearch API Spec, which are also what the OpenSearch server expects. In previous versions, some API functions would convert camelCase parameters to snake_case before sending them to the server. This is no longer the case. For example, the client now only accepts `filter_path` as a parameter, and passing `filterPath` will result in an error from the server.


#### Removed overridden HTTP methods: 
The 3.x client no longer allows overriding the HTTP method for API functions. In previous versions, some API functions let you pass `method` as a parameter to the API functions to override the default HTTP method. Now, `method` will be considered a querystring param, and using it will likely result in an error. If you need to send a custom request, you should use the `client.http` namespace.

In 2.x:
```ts
// Forcing a GET request even though the API function defaults to POST for search request with a body
client.search({ method: 'GET', body: { query: { match: { director: 'miller' } } } });
```

In 3.x:
```ts
// Use the `client.http` namespace to send a custom request to achieve the same effect
client.http.get({ path: '/_search', body: { query: { match: { director: 'miller' } } } });
```


#### Changes in Request and Response types: 
The biggest improvement in 3.x is the addition of all the request and response types for each API function. This means that you can now see the exact shape of the request and response objects for each API function. This is especially useful for TypeScript users, as it provides a better developer experience. However, previously handwritten request and response types have been replaced by those generated from the spec, so you may need to update your code to match the new types:

In 2.x:
```ts
import { Client, type opensearchtypes, type RequestParams } from '@opensearch-project/opensearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchRequest: RequestParams.Search = { body: { query: { match: { director: 'miller' } } } };
const searchResponse = (await client.search(searchBody)).body as opensearchtypes.SearchResponse;
```

In 3.x:
```ts
import { Client, type API } from '@opensearch-project/opensearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchRequest: API.Search_Request = { body: { query: { match: { director: 'miller' } } } };
const searchResponse = (await client.search(searchBody)).body; 
// Note that the response type is now inferred, and you don't need to cast with `as API.Search_ResponseBody`
```

### Deprecations

- **snake_case API modules and functions**: In 3.x, all API modules and functions are now in camelCase, comforming to the naming convention of Javascript. The snake_case aliases are still available but are deprecated and will be removed in a future version.