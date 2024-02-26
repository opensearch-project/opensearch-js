# Index Lifecycle
This guide covers OpenSearch JavaScript Client API actions for Index Lifecycle. You'll learn how to create, read, update, and delete indices in your OpenSearch cluster. We will also leverage index templates to create default settings and mappings for indices of certain patterns.

## Setup

Let's create a client instance to access an OpenSearch cluster:

```javascript
const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
  node: 'http://localhost:9200',
});

client.info().then(response => {
  console.log(response.body);
}); // Check server info and make sure the client is connected
```

## Index API Actions

### Create a new index
You can quickly create an index with default settings and mappings by using the `indices.create` API action. The following example creates an index named `paintings` with default settings and mappings:

```javascript
client.indices.create({index: 'paintings'})
```
To specify settings and mappings, you can pass them as the `body` of the request. The following example creates an index named `movies` with custom settings and mappings:

```javascript
client.indices.create({
  index: 'movies',
  body: {
    settings: {
      index: {
        number_of_shards: 2,
        number_of_replicas: 1
      }
    },
    mappings: {
      properties: {
        title: { type: 'text' },
        year: { type: 'integer' }
      }
    }
  }
})
```
When you create a new document for an index, OpenSearch will automatically create the index if it doesn't exist:

```javascript
client.indices.exists({ index: 'burner' }).then((exists) => {
  console.log(exists); // => false
});
client.create({index: 'burner', body: { lorem: 'ipsum' }});
client.indices.exists({ index: 'burner' }).then((exists) => {
  console.log(exists); // => true
});
```


### Update an Index
You can update an index's settings and mappings by using the `indices.put_settings` and `indices.put_mapping` API actions. 

The following example updates the `movies` index's number of replicas to `0`:

```javascript
client.indices.put_settings({
  index: 'movies',
  body: {
    index: {
      number_of_replicas: 0
    }
  }
})
```
The following example updates the `movies` index's mappings to add a new field named `director`:

```javascript
client.indices.put_mapping({
  index: 'movies',
  body: {
    properties: {
      director: { type: 'text' }
    }
  }
})
```

### Get Metadata for an Index
Let's check if the index's settings and mappings have been updated by using the `indices.get` API action:

```javascript
client.indices.get({ index: 'movies' })
  .then(response => console.log(response))
```
The response body contains the index's settings and mappings:

```javascript
{
  "movies": {
    "aliases": {},
    "mappings": {
      "properties": {
        "title": { "type": "text" },
        "year": { "type": "integer" },
        "director": { "type": "text" }
      }
    },
    "settings": {
      "index": {
        "creation_date": "1680297372024",
        "number_of_shards": "2",
        "number_of_replicas": "0",
        "uuid": "FEDWXgmhSLyrCqWa8F_aiA",
        "version": { "created": "136277827" },
        "provided_name": "movies"
      }
    }
  }
}
```
### Delete an Index
Let's delete the `movies` index by using the `indices.delete` API action:

```javascript
client.indices.delete({index: 'movies'})
```
We can also delete multiple indices at once:

```javascript
client.indices.delete({index: ['movies', 'paintings', 'burner'], ignore_unavailable: true,})
```
Notice that we are passing `ignore_unavailable: true` to the request. This tells the client to ignore throwing error and deleting the index if it doesn't exist. Without it, the above `delete` request will throw an error because the `movies` index has already been deleted in the previous example.

## Cleanup

All resources created in this guide are automatically deleted when the cluster is stopped. You can stop the cluster by running the following command:

```bash
docker-compose down
```
