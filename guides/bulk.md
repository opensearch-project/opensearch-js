# Bulk

In this guide, you'll learn how to use the OpenSearch JavaScript Client API to perform bulk operations. You'll learn how to index, update, and delete multiple documents in a single request.

## Setup
First, create a client instance with the following code:

```javascript
const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
  node: 'http://localhost:9200',
});
```

Next, create an index named `movies` and another named `books` with the default settings:

```javascript
const movies = 'movies';
const books = 'books';

if ((await client.indices.exists({ index: movies })).body)
  await client.indices.delete({ index: movies });
if ((await client.indices.exists({ index: books })).body)
  await client.indices.delete({ index: books });

await client.indices.create({ index: movies });
await client.indices.create({ index: books });
```


## Bulk API

The `bulk` API action allows you to perform multiple document operations in a single request. The body of the request is an array of objects that contains the bulk operations and the target documents to index, create, update, or delete.

### Indexing multiple documents

The following code create 3 documents in the `movies` index and one in the `books` index using the `bulk` API action:


```javascript
client
  .bulk({
    index: movies, // the default index
    body: [
      { create: {} },
      { title: 'Beauty and the Beast', year: 2030, director: 'Ella' },
      { index : {} },
      { title: 'Snow White', year: 2031, director: 'Jake' },
      { create: {} },
      { title: 'Cinderella', year: 2032, director: 'Clyde' },
      { index: { _index: books } },
      { title: 'The Lion King', year: 1994, author: 'John' },
    ],
  })
  .then((response) => {
    console.log(response.body.items);
  });
```
As you can see, each `create` operation comprises 2 objects: the first object contain the directive for the operation, and the second object is the document to be indexed. Notice that the first 3 operations do not specify the index name, so the `movies` index is used by default. 

### Mixing Operations

Take a look at the code block below:

```javascript
client
  .bulk({
    index: movies, // The default index
    body: [
      { create: { _id: 1 } },
      { title: 'Beauty and the Beast 1', year: 2050 },
      
      { delete: { _id: 1 } },
      
      { create: { _id: 2 } },
      { title: 'Beauty and the Beast 2', year: 2051 },
      
      { create: {} },
      { title: 'Beauty and the Beast 2', year: 2051 },
      
      { create: { _index: books } },
      { title: '2012', year: 2012 },
    ],
  })
  .then((response) => {
    console.log(response.body.items);
  });
```

This single `bulk` request contains 5 operations:
- Creates a document with the ID `1` in the `movies` index.
- Deletes the document with the ID `1` in the `movies` index.
- Creates a document with the ID `2` in the `movies` index.
- Creates a document in the `movies` index (since `_id` is not specified, a new ID is generated automatically).
- Creates a document in the `books` index (since `movies` is the default index, you have to specify `books` for `_index`).


## Bulk Helper

The OpenSearch JavaScript client provides a `bulk` helper that simplifies the process of creating a bulk request for operations of the same type. The following code block demonstrates how to use the `bulk` helper to create one document in the `movies` index for each item in the `docs` array:

```javascript
const docs = [
  { title: 'Beauty and the Beast 1', year: 2050 },
  { title: 'Beauty and the Beast 2', year: 2051 },
];

client.helpers
  .bulk({
    datasource: docs,
    onDocument(_) {
      return { index: { _index: movies } };
    },
  })
  .then((result) => {
    console.log(result);
  });
```

## Cleanup
To clean up the resources created in this guide, delete the `movies` and `books` indices:

```javascript
client.indices.delete({ index: [movies, books] });
```
