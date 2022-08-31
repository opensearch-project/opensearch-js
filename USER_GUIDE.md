# User Guide

- [User Guide](#user-guide)
  - [Initializing a Client](#initializing-a-client)
    - [To authenticate with the Amazon OpenSearch Service use AwsSigv4Signer](#to-authenticate-with-the-amazon-opensearch-service-use-awssigv4signer)
    - [Using specific configuration](#using-specific-configuration)
    - [Using aws-sdk v3](#using-aws-sdk-v3)
  - [Create an Index](#create-an-index)
  - [Add a Document to the Index](#add-a-document-to-the-index)
  - [Add documents in bulk](#add-documents-in-bulk)
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

### To authenticate with the [Amazon OpenSearch Service](https://aws.amazon.com/opensearch-service/) use AwsSigv4Signer

```javascript
const { Client, AmazonTransportFactory, AmazonConnectionFactory } = require('@opensearch-project/opensearch')
const AWS = require('aws-sdk')

// (Optional) load profile credentials from file
AWS.config.update({
  profile: "my-profile",
});

const client = new Client({
  Connection: AmazonConnectionFactory(AWS.config),
  Transport: AmazonTransportFactory(AWS.config),
  node: '' // OpenSearch domain URL e.g. https://search-xxx.region.es.amazonaws.com
})
```

### Using specific configuration

```javascript
const { Client, AmazonTransportFactory, AmazonConnectionFactory } = require('@opensearch-project/opensearch')
const AWS = require('aws-sdk')

const awsConfig = new AWS.Config({
  // Your credentials and settings here, see
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
})

const client = new Client({
  Connection: AmazonConnectionFactory(awsConfig),
  Transport: AmazonTransportFactory(awsConfig),
  node: '' // OpenSearch domain URL e.g. https://search-xxx.region.es.amazonaws.com
})

```

### Using aws-sdk v3

```javascript
const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts");
const { Client, AmazonTransportFactory, AmazonConnectionFactory } = require('@opensearch-project/opensearch')


async function assumeRole(roleArn, region) {
  const client = new STSClient({ region });
  const response = await client.send(
    new AssumeRoleCommand({
      RoleArn: roleArn,
      RoleSessionName: "aws-es-connection",
    })
  );
  return {
    accessKeyId: response.Credentials.AccessKeyId,
    secretAccessKey: response.Credentials.SecretAccessKey,
    sessionToken: response.Credentials.SessionToken,
  };
}

const creds = await assumeRole(
  "arn:aws:iam::0123456789012:role/Administrator",
  "us-east-1"
);
const awsConfig = {
  region: "us-east-1",
  credentials: creds,
};
const client = new Client({
  Connection: AmazonConnectionFactory(awsConfig),
  Transport: AmazonTransportFactory(awsConfig),
  node: '' // OpenSearch domain URL e.g. https://search-xxx.region.es.amazonaws.com
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

## Add documents in bulk

```javascript
// Add documents in bulk
  var bulk_documents = [
    {
        index: {
            _index: 'books-king',
            _id: '2'
        }
    },
    {
        title: 'IT',
        author: 'Stephen Kings',
        year: '1986',
    },
    {
        create: {
            _index: 'test',
            _id: '3'
        }
    },
    {
        title: 'The Green Mile',
        author: 'Stephen Kings',
        year: '1996',
    },
    {
        create: {
            _index: 'test',
            _id: '4'
        }
    },
    {
        title: 'Carrie',
        author: 'Stephen Kings',
        year: '1974',
    }
  ];

  var response = await client.bulk({ body: bulk_documents });
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
