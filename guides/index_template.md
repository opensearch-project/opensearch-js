# Index Template
Index templates are a convenient way to define settings, mappings, and aliases for one or more indices when they are created. In this guide, you'll learn how to create an index template and apply it to an index.

## Setup

Assuming you have OpenSearch running locally on port 9200, you can create a client instance
with the following code:
```javascript
const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
  node: 'http://localhost:9200',
});
```

## Index Template API Actions

### Create an Index Template
You can create an index template to define default settings and mappings for indices of certain patterns. The following example creates an index template named `books` with default settings and mappings for indices of the `books-*` pattern:

```javascript
client.indices.put_index_template({
  name: 'books',
  body: {
    index_patterns: ['books-*'],
    settings: {
      index: {
        number_of_shards: 3,
        number_of_replicas: 0
      }
    },
    mappings: {
      properties: {
        title: { type: 'text' },
        author: { type: 'text' },
        published_on: { type: 'date' },
        pages: { type: 'integer' }
      }
    }
  }
}).then(resp => {
  console.log(`Index template created: ${resp}`);
});
```

Now, when you create an index that matches the `books-*` pattern, OpenSearch will automatically apply the template's settings and mappings to the index.
Let's create an index named `books-nonfiction` and verify that its settings and mappings match those of the template:

```javascript
client.indices.create({ index: 'books-nonfiction' })
.then(() => {
  return client.indices.get({ index: 'books-nonfiction' });
})
.then(response => {
  console.log(response);
});
```

### Multiple Index Templates
If multiple index templates match the index's name, OpenSearch will apply the template with the highest priority. The following example creates two index templates named `books-*` and `books-fiction-*` with different settings:

```javascript
client.indices.put_index_template({
  name: 'books',
  body: {
    index_patterns: ['books-*'],
    settings: {
      index: {
        number_of_shards: 3,
        number_of_replicas: 0
      }
    }
  }
})
.then(resp => {
  console.log(`Index template created: ${resp}`);
});

client.indices.put_index_template({
  name: 'books-fiction',
  body: {
    index_patterns: ['books-fiction-*'],
    priority: 1, # higher priority than the `books` template
    template: {
      settings: {
        index: {
          number_of_shards: 1,
          number_of_replicas: 1
        }
      }
    }
  }
})
.then(resp => {
  console.log(`Index template created: ${resp}`);
});
```

When we create an index named `books-fiction-romance`, OpenSearch will apply the `books-fiction-*` template's settings to the index:

```javascript
client.indices.create({ index: 'books-fiction-romance' })
.then(() => {
  return client.indices.get({ index: 'books-fiction-romance' });
})
.then(response => {
  console.log(response);
});
```

### Composable Index Templates
Composable index templates are a new type of index template that allow you to define multiple component templates and compose them into a final template. The following example creates a component template named `books_mappings` with default mappings for indices of the `books-*` and `books-fiction-*` patterns:

```javascript
client.cluster.put_component_template({
  name: 'books_mappings',
  body: {
    template: {
      mappings: {
        properties: {
          title: { type: 'text' },
          author: { type: 'text' },
          published_on: { type: 'date' },
          pages: { type: 'integer' }
        }
      }
    }
  }
})
.then(resp => {
  console.log(`Component template created: ${resp}`);
});

client.indices.put_index_template({
  name: 'books',
  body: {
    index_patterns: ['books-*'],
    composed_of: ['books_mappings'], # use the `books_mappings` component template
    priority: 0,
    template: {
      settings: {
        index: {
          number_of_shards: 3,
          number_of_replicas: 0
        }
      }
    }
  }
})
.then(resp => {
  console.log(`Index template created: ${resp}`);
});

client.indices.put_index_template({
  name: 'books',
  body: {
    index_patterns: ['books-*'],
    composed_of: ['books_mappings'], # use the `books_mappings` component template
    priority: 1,
    template: {
      settings: {
        index: {
          number_of_shards: 1,
          number_of_replicas: 1
        }
      }
    }
  }
})
.then(resp => {
  console.log(`Index template created: ${resp}`);
});
``` 

When we create an index named `books-fiction-horror`, OpenSearch will apply the `books-fiction-*` template's settings, and `books_mappings` template mappings to the index:

```javascript
client.indices.create({ index: 'books-fiction-horror' })
.then(() => {
  return client.indices.get({ index: 'books-fiction-horror' });
})
.then(response => {
  console.log(response);
});
```

### Get an Index Template
You can get an index template with the `get_index_template` API action:

```javascript
client.indices.get_index_template({name: 'books'}).then(response => {
  console.log(response.body);
});
```

### Delete an Index Template
You can delete an index template with the `delete_template` API action:

```javascript
client.indices.delete_index_template({
  name: 'books'
}).then((response) => {
  console.log(`Index template deleted: ${response}`);
});
```

## Cleanup
Let's delete all resources created in this guide:

```javascript
client.indices.delete({
  index: 'books-*'
}).then(response => {
  console.log(`Index deleted: ${response}`)
});

client.indices.delete_index_template({
  name: 'books-fiction'
}).then(response => {
  console.log(`Index template deleted: ${response}`)
});

client.cluster.delete_index_template({
  name: 'books_mappings'
}).then(response => {
  console.log(`Component template deleted: ${response}`)
});
```
