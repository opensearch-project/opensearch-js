# Document Lifecycle
This guide covers OpenSearch JavaScript Client API actions for Document Lifecycle. You'll learn how to create, read, update, and delete documents in your OpenSearch cluster. Whether you're new to OpenSearch or an experienced user, this guide provides the information you need to manage your document lifecycle effectively.

## Setup
Assuming you have OpenSearch running locally on port 9200, you can create a client instance
with the following code:
```javascript
const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
  node: 'http://localhost:9200',
});
```
Next, create an index named `movies` with the default settings:
```javascript 
const index = 'movies';
client.indices.exists({ index: index })
  .then(exists => {
    if (!exists) {
      return client.indices.create({ index: index });
    }
  })
  .then(response => console.log(`Index ${response.body.index} created`));
```

## Document API Actions
### Create a new document with specified ID
To create a new document, use the `create` or `index` API action. The following code creates two new documents with IDs of `1` and `2`:
```javascript
client.create({index: index, id: 1, body: { title: 'Beauty and the Beast', year: 1991 }})
client.create({index: index, id: 2, body: { title: 'Beauty and the Beast - Live Action', year: 2017 }})
```
Note that the `create` action is NOT idempotent. If you try to create a document with an ID that already exists, the request will fail: 

```javascript
client.create({ index: index, id: 1, body: { title: 'Just Another Movie' } })
  .catch(err => console.log(`Error creating document: ${err}`));
```

The `index` action, on the other hand, is idempotent. If you try to index a document with an existing ID, the request will succeed and overwrite the existing document. Note that no new document will be created in this case. You can think of the `index` action as an upsert:

```javascript
client.index({index: index, id: 2, body: { title: 'Updated Title' }})
client.index({index: index, id: 2, body: { title: 'The Lion King', year: 1994 }})
```

### Create a new document with auto-generated ID
You can also create a new document with an auto-generated ID by omitting the `id` parameter. The following code creates documents with an auto-generated IDs in the `movies` index:
```javascript
puts client.create({index: index, body: { title: 'The Lion King 2', year: 1998 }})
# OR client.index({index: index, body: { title: 'The Lion King 2', year: 1998 }})
```
In this case, the ID of the created document in the `result` field of the response body:
```javascript
{
  "_index": "movies",
  "_type": "_doc",
  "_id": "1",
  "_version": 1,
  "result": "created",
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 0,
  "_primary_term": 1
}
```

### Get a document
To get a document, use the `get` API action. The following code gets the document with ID `1` from the `movies` index:
```javascript
client.get({
  index: index,
  id: 1
}).then(response => console.log(response._source));
// OUTPUT: {"title": "Beauty and the Beast", "year": 1991}
```
You can also use `_source_include` and `_source_exclude` parameters to specify which fields to include or exclude in the response:
```javascript
client.get({
  index: index,
  id: 1,
  _source_includes: ['title']
}).then(response => console.log(response._source));
// OUTPUT: {"title": "Beauty and the Beast"}
client.get({
  index: index,
  id: 1,
  _source_excludes: ['title']
}).then(response => console.log(response._source));
// OUTPUT: {"year": 1991}
```

### Get multiple documents
To get multiple documents, use the `mget` API action:
```javascript
client.mget({
  index: index,
  body: { docs: [{ _id: 1 }, { _id: 2 }] }
}).then(response => {
  const sources = response.docs.map(doc => doc._source);
  console.log(sources);
});
// OUTPUT: [ { title: 'Beauty and the Beast', year: 1991 }, { title: 'Beauty and the Beast - Live Action', year: 2017 } ]
```

### Check if a document exists
To check if a document exists, use the `exists` API action. The following code checks if the document with ID `1` exists in the `movies` index:
```javascript
client.exists({
  index: index,
  id: 1
}).then(response => {
  console.log(response.body);
});
```

### Update a document
To update a document, use the `update` API action. The following code updates the `year` field of the document with ID `1` in the `movies` index:
```javascript
client.update({index: index, id: 1, body: { doc: { year: 1995 } }})
```
Alternatively, you can use the `script` parameter to update a document using a script. The following code increments the `year` field of the of document with ID `1` by 5 using painless script, the default scripting language in OpenSearch:
```javascript
client.update({index: index, id: 1, body: { script: { source: 'ctx._source.year += 5' } }})
```
Note that while both `update` and `index` actions perform updates, they are not the same. The `update` action is a partial update, while the `index` action is a full update. The `update` action only updates the fields that are specified in the request body, while the `index` action overwrites the entire document with the new document.

### Update multiple documents by query
To update documents that match a query, use the `update_by_query` API action. The following code decreases the `year` field of all documents with `year` greater than 2023:
```javascript
client.update_by_query({index: index, body: { 
  script: { source: 'ctx._source.year -= 1' }, 
  query: { range: { year: { gt: 2023 } } } 
}})
```

### Delete a document
To delete a document, use the `delete` API action. The following code deletes the document with ID `1`:
```javascript 
client.delete({index: index, id: 1})
```
By default, the `delete` action is not idempotent. If you try to delete a document that does not exist, or delete the same document twice, you will run into Not Found (404) error. You can make the `delete` action idempotent by setting the `ignore` parameter to `404`:
```javascript
client.delete({index: index, id: 1, ignore: 404})
```

### Delete multiple documents by query
To delete documents that match a query, use the `delete_by_query` API action. The following code deletes all documents with `year` greater than 2023:
```javascript
client.delete_by_query({index: index, body: { 
  query: { range: { year: { gt: 2023 } } } 
}})
```

## Cleanup
To clean up the resources created in this guide, delete the `movies` index:
```javascript
client.indices.delete({index: index})
```
