# Making raw HTTP requests

The OpenSearch client implements many high-level REST DSLs that invoke OpenSearch APIs. However, you may find yourself in a situation that requires you to invoke an API that is not supported by the client. In this case, you can use raw HTTP requests to invoke any OpenSearch API. This guide shows you different ways to make custom API calls using the OpenSearch JS client.

## Setup
First, create a client instance with the following code to interact with an OpenSearch cluster with default security settings:

```javascript
const client = new Client({
  node: 'http://localhost:9200',
});
```

## The http Namespace
The `http` namespace comes with all functions representing HTTP methods like `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put`, and `trace`.

Let's create in index using `http.put`:
```javascript
await client.http.put({
  path: '/movies',
  body: {
    mappings: {
      properties: {
        title: { type: 'text' },
        director: { type: 'text' },
        year: { type: 'integer' },
      },
    },
  },
});
```

Make sure that the index was created successfully using `http.head`:
    
```javascript
await client.http.head({ path: '/movies' });
```

Add two documents to the index using `http.post` and the bulk endpoint
```javascript
const body = [
    { index: { _index: index } },
    { title: 'The quick brown fox' },
    { index: { _index: index } },
    { title: 'The quick brown fox jumps over the lazy dog' },
  ];
await client.http.post({ path: `_bulk`, body });
```

Delete the index using `http.delete`:
```javascript
await client.http.delete({ path: '/movies' });
```
