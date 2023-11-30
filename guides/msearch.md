# Multi-Search (msearch)

OpenSearch provides a powerful Multi-Search (msearch) API that enables you to perform multiple search operations for documents in an index. The `msearch` API supports various parameters that allow you to customize the search operation. In this guide, we will explore functionalities such as creating an index, adding documents, performing a multi-search, and cleaning up the index afterward. To complement your exploration of the OpenSearch Multi-Search API and its parameters, a working sample is available in [`../samples/msearch.js`](../samples/msearch.js).


# Setup

```javascript
const host = "localhost";
const protocol = "https";
const port = 9200;
const auth = "admin:admin"; // For testing only. Avoid storing credentials in the code.
const ca_certs_path = "/full/path/to/root-ca.pem";

// Optional client certificates if you don't want to use HTTP basic authentication.
// const client_cert_path = '/full/path/to/client.pem';
// const client_key_path = '/full/path/to/client-key.pem';

// Create a client with SSL/TLS enabled.
const { Client } = require("@opensearch-project/opensearch");
const fs = require("fs");
const client = new Client({
  node: `${protocol}://${auth}@${host}:${port}`,
  ssl: {
    ca: fs.readFileSync(ca_certs_path),
    // You can turn off certificate verification (rejectUnauthorized: false) if using
    // self-signed certificates with a hostname mismatch.
    // cert: fs.readFileSync(client_cert_path),
    // key: fs.readFileSync(client_key_path)
  },
});

await client.bulk({
  body: [
    { index: { _index: 'movies', _id: 1 } },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    { index: { _index: 'movies', _id: 2 } },
    { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
  ],
});

await client.index({ index: 'movies', refresh: true });
```

# Multi Search API
### Basic Multi Search

The multi-search allows you to execute multiple search requests within a single API call. The following example shows how each search query provides a list of documents from the movie index.

```javascript
const queries = [
  {},
  { query: { match: { title: 'The Godfather' } } },
  {},
  { query: { match: { title: 'Part II' } } },
];

const multiSearchResponse = await client.msearch({
  index: 'movies',
  body: queries,
});

multiSearchResponse.body.responses.map((res) =>
  res.hits.hits.map((movie) => {
    console.log(movie._source);
  })
);
```

# Cleanup

```javascript
await client.indices.delete({index: 'movies'});
```
