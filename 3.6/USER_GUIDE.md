<!-- TOC -->
* [User Guide](#user-guide)
  * [Initializing a Client](#initializing-a-client)
    * [Authenticate with Amazon OpenSearch Service](#authenticate-with-amazon-opensearch-service)
      * [Using AWS V2 SDK](#using-aws-v2-sdk)
      * [Using AWS V3 SDK](#using-aws-v3-sdk)
  * [Special topics](#special-topics)
    * [TypeScript: Handling Request and Response Types](#typescript-handling-request-and-response-types)
    * [Enable Handling of Long Numerals](#enable-handling-of-long-numerals)
  * [Examples](#examples)
    * [Create an Index](#create-an-index)
    * [Add a Document to the Index](#add-a-document-to-the-index)
    * [Search for the Document](#search-for-the-document)
    * [Multi-Search (msearch)](#multi-search-msearch)
    * [Delete the document](#delete-the-document)
    * [Delete the index](#delete-the-index)
    * [Create a Point in Time](#create-a-point-in-time)
    * [Get all PITs](#get-all-pits)
    * [Delete a Point in Time](#delete-a-point-in-time)
    * [Delete all PITs](#delete-all-pits)
    * [Empty all Pool Connections](#empty-all-pool-connections)
<!-- TOC -->

# User Guide

## Initializing a Client

```javascript
'use strict';

var host = 'localhost';
var protocol = 'https';
var port = 9200;
var auth = 'admin:strongPassword@999'; // For testing only. Don't store credentials in code.
var ca_certs_path = '/full/path/to/root-ca.pem';

// Optional client certificates if you don't want to use HTTP basic authentication.
// var client_cert_path = '/full/path/to/client.pem'
// var client_key_path = '/full/path/to/client-key.pem'

// Create a client with SSL/TLS enabled.
var { Client } = require('@opensearch-project/opensearch');
var fs = require('fs');
var client = new Client({
  node: protocol + '://' + auth + '@' + host + ':' + port,
  ssl: {
    ca: fs.readFileSync(ca_certs_path),
    // You can turn off certificate verification (rejectUnauthorized: false) if you're using self-signed certificates with a hostname mismatch.
    // cert: fs.readFileSync(client_cert_path),
    // key: fs.readFileSync(client_key_path)
  },
});
```

### Authenticate with Amazon OpenSearch Service

#### Using AWS V2 SDK

```javascript
const AWS = require('aws-sdk'); // V2 SDK.
const { Client } = require('@opensearch-project/opensearch');
const { AwsSigv4Signer } = require('@opensearch-project/opensearch/aws');

const client = new Client({
  ...AwsSigv4Signer({
    region: 'us-west-2',
    service: 'es', // 'aoss' for OpenSearch Serverless
    // Must return a Promise that resolve to an AWS.Credentials object.
    // This function is used to acquire the credentials when the client start and
    // when the credentials are expired.
    // The Client will refresh the Credentials only when they are expired.
    // With AWS SDK V2, Credentials.refreshPromise is used when available to refresh the credentials.

    // Example with AWS SDK V2:
    getCredentials: () =>
      new Promise((resolve, reject) => {
        // Any other method to acquire a new Credentials object can be used.
        // If you use profiles, make sure to pass role assumer, or use default provider fromNodeProviderChain
        AWS.config.getCredentials((err, credentials) => {
          if (err) {
            reject(err);
          } else {
            credentials.needsRefresh = () => { // Optionally, include the needsRefresh function for short lived credentials
              // Refresh the credentials if they are within 5 minutes of expiration.
              return credentials.expireTime - Date.now() < 300000;
            };
            resolve(credentials);
          }
        });
      }),
  }),
  node: 'https://search-xxx.region.es.amazonaws.com', // OpenSearch domain URL
  // node: "https://xxx.region.aoss.amazonaws.com" for OpenSearch Serverless
});
```

#### Using AWS V3 SDK

```javascript
const { defaultProvider } = require('@aws-sdk/credential-provider-node'); // V3 SDK.
const { Client } = require('@opensearch-project/opensearch');
const { AwsSigv4Signer } = require('@opensearch-project/opensearch/aws-v3'); // use aws-v3 import path if you are using aws-sdk v3
// Unlike the import path in the v2 example above that lazy loads both aws-sdk v3 credential providers & entire aws-sdk v2 if available
// This will only lazy load the aws-sdk v3 credential providers

const client = new Client({
  ...AwsSigv4Signer({
    region: 'us-east-1',
    service: 'es', // 'aoss' for OpenSearch Serverless
    // Must return a Promise that resolve to an AWS.Credentials object.
    // This function is used to acquire the credentials when the client start and
    // when the credentials are expired.
    // The Client will treat the Credentials as expired if within
    // `requestTimeout` ms of expiration (default is 30000 ms).

    // Example with AWS SDK V3:
    getCredentials: () => {
      // Any other method to acquire a new Credentials object can be used.
      const credentialsProvider = defaultProvider();
      return credentialsProvider();
    },
  }),
  requestTimeout: 60000, // Also used for refreshing credentials in advance
  node: 'https://search-xxx.region.es.amazonaws.com', // OpenSearch domain URL
  // node: "https://xxx.region.aoss.amazonaws.com" for OpenSearch Serverless
});
```
## Special topics

### TypeScript: Handling Request and Response Types
All API functions in the client, along with their request and response types, are generated from the OpenSearch REST API specification. This provides a better developer experience, especially for TypeScript users. Here's how you can use the generated types: 

```typescript
import { Client, type API } from '@opensearch-project/opensearch';

const client = new Client({ node: 'http://localhost:9200' });

const searchRequest: API.Search_Request = { body: { query: { match: { director: 'miller' } } } }; // is type checked against API.Search_Request
const searchResponseBody = (await client.search(searchRequest)).body; // is inferred as API.Search_ResponseBody
```

### Typescript: Accessing component types
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

### Enable Handling of Long Numerals

JavaScript can safely work with integers from -(2<sup>53</sup> - 1) to 2<sup>53</sup> - 1. However, 
serialized JSON texts from other languages can potentially have numeric values beyond that range and the native
serialization and deserialization methods of JavaScript's JSON, incapable of parsing them with precision; these
values get rounded to fit the IEEE-754 representation.

The `Client` can be configured to appropriately deserialize long numerals as `BigInt` values and vice versa:

```javascript
const client = new Client({
  enableLongNumeralSupport: true,
});
```
## Examples

(for more examples, see the [guides](guides) directory)

### Create an Index

```javascript
console.log('Creating index:');

var index_name = 'books';
var settings = {
  settings: {
    index: {
      number_of_shards: 4,
      number_of_replicas: 3,
    },
  },
};

var response = await client.indices.create({
  index: index_name,
  body: settings,
});

console.log(response.body);
```

### Add a Document to the Index

```javascript
console.log('Adding document:');

var document = {
  title: 'The Outsider',
  author: 'Stephen King',
  year: '2018',
  genre: 'Crime fiction',
};

var id = '1';

var response = await client.index({
  id: id,
  index: index_name,
  body: document,
  refresh: true,
});

console.log(response.body);
```

### Search for the Document

```javascript
console.log('Search results:');

var query = {
  query: {
    match: {
      title: {
        query: 'The Outsider',
      },
    },
  },
};

var response = await client.search({
  index: index_name,
  body: query,
});

console.log(response.body.hits);
```

### Multi-Search (msearch)

```javascript
const queries = [
    {},
    { query: { match: { author: 'Stephen King' } } },
    {},
    { query: { match: { title: 'The Outsider' } } },
  ];

  const multiSearchResponse = await client.msearch({
    index: index_name,
    body: queries,
  });

  multiSearchResponse.body.responses.map((res) =>
    res.hits.hits.map((movie) => {
      console.log(movie._source);
    })
  );
```

Explore `msearch` further with a detailed guide in [msearch.md](guides/msearch.md) and find sample code in [msearch.js](samples/msearch.js).

### Delete the document

```javascript
console.log('Deleting document:');

var response = await client.delete({
  index: index_name,
  id: id,
});

console.log(response.body);
```

### Delete the index

```javascript
console.log('Deleting index:');

var response = await client.indices.delete({
  index: index_name,
});

console.log(response.body);
```

### Create a Point in Time

```javascript
console.log('Creating a PIT:');

var response = await client.createPit({
  index: 'books*',
  keep_alive: '100m',
  expand_wildcards: 'all',
});

console.log(response.body);
```

### Get all PITs

```javascript
console.log('Getting all PITs:');

var response = await client.getAllPits();

console.log(response.body);
```

### Delete a Point in Time

```javascript
console.log('Deleting a PIT:');

var response = await client.deletePit({
  body: {
    pit_id: [
      'o463QQEPbXktaW5kZXgtMDAwMDAxFkhGN09fMVlPUkVPLXh6MUExZ1hpaEEAFjBGbmVEZHdGU1EtaFhhUFc4ZkR5cWcAAAAAAAAAAAEWaXBPNVJtZEhTZDZXTWFFR05waXdWZwEWSEY3T18xWU9SRU8teHoxQTFnWGloQQAA',
    ],
  },
});

console.log(response.body);
```

### Delete all PITs

```javascript
console.log('Deleting all PITs:');

var response = await client.deleteAllPits();

console.log(response.body);
```

### Empty all Pool Connections

```javascript
var pool = new ConnectionPool({ Connection });
pool.addConnection('http://localhost:9200/');
pool.addConnection('http://localhost:9201/');

pool.empty();
// OR
pool.empty(() => {
  // Do something after emptying the pool
});
```
