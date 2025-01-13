<!-- TOC -->
* [Upgrading The Opensearch JavaScript Client](#upgrading-the-opensearch-javascript-client)
  * [Upgrading from 2.x to 3.x](#upgrading-from-2x-to-3x)
    * [Removed camelCase params:](#removed-camelcase-params-)
    * [Removed overridden HTTP methods:](#removed-overridden-http-methods-)
    * [Typescript - New request and response types:](#typescript---new-request-and-response-types-)
    * [Typescript - Stricter type definitions:](#typescript---stricter-type-definitions)
    * [Deprecations](#deprecations)
<!-- TOC -->

# Upgrading The Opensearch JavaScript Client
## Upgrading from 2.x to 3.x
Starting from 3.x, the API functions and modules in opensearch-js are generated from the [OpenSearch REST API specification](https://github.com/opensearch-project/opensearch-api-specification/). While the vast majority of the API remains the same, there are some breaking changes that may require updating your application when upgrading from 2.x to 3.x.

Here are some of the breaking changes you should be aware of when upgrading from 2.x to 3.x:

### Removed camelCase params: 
Every API function now only accepts parameters matching the OpenSearch API Spec, which are also what the OpenSearch server expects. In previous versions, some API functions would convert camelCase parameters to snake_case before sending them to the server. This is no longer the case. For example, the client now only accepts `filter_path` as a parameter, and passing `filterPath` will result in an error from the server.

### Removed overridden HTTP methods: 
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


### Typescript - New request and response types: 
The biggest improvement in 3.x is the addition of all the request and response types for each API function. This means that you can now see the exact shape of the request and response objects for each API function. This is especially useful for TypeScript users, as it provides a better developer experience. However, previously handwritten request and response types have been replaced by those generated from the spec, so you may need to update your code to match the new types:

In 2.x:
```ts
import { Client, type opensearchtypes, type RequestParams } from '@opensearch-project/opensearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchRequest: RequestParams.Search = { body: { query: { match: { director: 'miller' } } } };
const searchResponseBody = (await client.search(searchRequest)).body as opensearchtypes.SearchResponse;
```

In 3.x:
```ts
import { Client, type API } from '@opensearch-project/opensearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchRequest: API.Search_Request = { body: { query: { match: { director: 'miller' } } } };
const searchResponseBody = (await client.search(searchRequest)).body; 
// Note that the response type is now inferred, and you don't need to cast with `as API.Search_ResponseBody`
```

### Typescript - Accessing component types:
There are 2 ways to access components of the request and response types. For example, if you want to access the type for an index settings object:
1. Through the Types module (Note that this could result in a breaking change when the name of the component type is changed with the spec)
```typescript

import { type Types } from '@opensearch-project/opensearch';
const settings: Types.Indices_Common.IndexSettings = { number_of_shards: 1, number_of_replicas: 0 };
```

2. Through the API module (This is helpful when you don't know the exact path to the type)
```typescript
import { type API } from '@opensearch-project/opensearch';
const settings: API.Indices_Create_RequestBody['settings'] = { number_of_shards: 1, number_of_replicas: 0 };
```

### Typescript - Stricter type definitions:
In the same vein as the previous point, the typescript definitions are now stricter and more accurate. This means that you may need to update your code to match the new types. For example, the `client.search` function now only accepts a `API.Search_Request` object, and passing an object with a different shape will result in a type error. And since the response object is now inferred to match the proper response type, accessing undefined properties will also result in a type error. 

Since the types are generated from the OpenSearch API spec, they are guaranteed to be accurate and up-to-date, and this rarely results in any breaking changes. However, there are cases where the generated type is a union of multiple types, and you may need to use type guards to access the correct properties.

For example, the response body for the `client.deleteByQuery()` function is defined as a union of two types: `Common.BulkByScrollResponseBase` and `{ task?: Common.TaskId; }`.

```ts
export type DeleteByQuery_ResponseBody = Common.BulkByScrollResponseBase | {
  task?: Common.TaskId;
}

export type BulkByScrollResponseBase = BulkByScrollTaskStatus & {
  failures: BulkByScrollFailure[];
  timed_out: boolean;
  took: number;
}
```
This means that the following code will result in a type error:
```ts
const body = await client.deleteByQuery({ body: { query: { match: { director: 'miller' } } } }).body;
console.log(body.failures); // Type error: Property 'failures' does not exist on type { task?: TaskId; }'.
```
because TypeScript cannot infer the correct type of `body` from the union type. To fix this, you can use a type guard to check the type of `body` before accessing the properties:
```ts
const body = await client.deleteByQuery({ body: { query: { match: { director: 'miller' } } } }).body;

if ('failures' in body) {
  console.log(body.failures);
  console.log(body.took);
  console.log(body.timed_out);
} else {
  console.log(body.task);
}
```

### Deprecations

- **snake_case API modules and functions**: In 3.x, all API modules and functions are now in camelCase, comforming to the naming convention of Javascript. The snake_case aliases are still available but are deprecated and will be removed in a future version.