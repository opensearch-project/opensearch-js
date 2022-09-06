# User Guide

- [User Guide](#user-guide)
  - [Initializing a Client](#initializing-a-client)
    - [To authenticate with Amazon OpenSearch Service using AwsSigv4Signer](#to-authenticate-with-amazon-opensearch-service-using-awssigv4signer)
  - [Create an Index](#create-an-index)
  - [Add a Document to the Index](#add-a-document-to-the-index)
  - [Search for the Document](#search-for-the-document)
  - [Delete the document](#delete-the-document)
  - [Delete the index](#delete-the-index)

## Initializing a Client
```javascript
'use strict';

var host = 'localhost';
var protocol = 'https';
var port = 9200;
var auth = 'admin:admin'; // For testing only. Don't store credentials in code.
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

### To authenticate with [Amazon OpenSearch Service](https://aws.amazon.com/opensearch-service/) using AwsSigv4Signer

```javascript
const AWS = require('aws-sdk'); // V2 SDK.
const { defaultProvider } = require("@aws-sdk/credential-provider-node"); // V3 SDK.
const { Client } = require('@opensearch-project/opensearch');
const { AwsSigv4Signer } = require('@opensearch-project/opensearch/aws');

const client = new Client({
  ...AwsSigv4Signer({
    region: 'us-east-1',
    // Must return a Promise that resolve to an AWS.Credentials object.
    // This function is used to acquire the credentials when the client start and
    // when the credentials are expired.
    // The Client will refresh the Credentials only when they are expired.
    // With AWS SDK V2, Credentials.refreshPromise is used when available to refresh the credentials.

    // Example with AWS SDK V3:
    getCredentials: async () => {
      // Any other method to acquire a new Credentials object can be used.
      const credentialsProvider = defaultProvider();
      return credentialsProvider();
    },

    // Example with AWS SDK V2:
    getCredentials: () =>
      new Promise((resolve, reject) => {
        // Any other method to acquire a new Credentials object can be used.
        AWS.config.getCredentials((err, credentials) => {
          if (err) {
            reject(err);
          } else {
            resolve(credentials);
          }
        });
      }),
  }),
  node: "https://search-xxx.region.es.amazonaws.com", // OpenSearch domain URL
});

```

## Create an Index

```javascript
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

  console.log('Creating index:');
  console.log(response.body);
```

## Add a Document to the Index

```javascript
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

  console.log('Adding document:');
  console.log(response.body);
```

## Search for the Document

```javascript
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

  console.log('Search results:');
  console.log(response.body.hits);
```

## Delete the document

```javascript
  var response = await client.delete({
    index: index_name,
    id: id,
  });

  console.log('Deleting document:');
  console.log(response.body);
```

## Delete the index

```javascript
  var response = await client.indices.delete({
    index: index_name,
  });

  console.log('Deleting index:');
  console.log(response.body);
}
```