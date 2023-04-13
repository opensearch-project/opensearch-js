# Search
OpenSearch provides a powerful search API that allows you to search for documents in an index. The search API supports a number of parameters that allow you to customize the search operation. In this guide, we will explore the search API and its parameters.
# Setup
Let's start by creating an index and adding some documents to it:
```javascript
var host = "localhost";
var protocol = "https";
var port = 9200;
var auth = "admin:admin"; // For testing only. Don't store credentials in code.
var ca_certs_path = "/full/path/to/root-ca.pem";

// Optional client certificates if you don't want to use HTTP basic authentication.
// var client_cert_path = '/full/path/to/client.pem'
// var client_key_path = '/full/path/to/client-key.pem'

// Create a client with SSL/TLS enabled.
var { Client } = require("@opensearch-project/opensearch");
var fs = require("fs");
var client = new Client({
  node: protocol + "://" + auth + "@" + host + ":" + port,
  ssl: {
    ca: fs.readFileSync(ca_certs_path),
    // You can turn off certificate verification (rejectUnauthorized: false) if you're using 
    // self-signed certificates with a hostname mismatch.
    // cert: fs.readFileSync(client_cert_path),
    // key: fs.readFileSync(client_key_path)
  },
});

await client.indices.create({index: 'movies'});

for(let i = 0; i < 10; i++) {
  await client.index({
      index: 'movies',
      id: i,
      body: {
          title: `The Dark Knight ${i}`,
          director: 'Christopher Nolan',
          year: 2008 + i
      }
  });
}

await client.index({
  index: 'movies',
  body: {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972
  }
});

await client.index({
  index: 'movies',
  body: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994
  }
});

await client.index({index: 'movies', refresh: true});
```
# Search API
### Basic Search
The search API allows you to search for documents in an index. The following example searches for ALL documents in the movies index:

```javascript
const response = await client.search({
  index: 'movies'
});
```
You can also search for documents that match a specific query. The following example searches for documents that match the query `dark knight`:
```javascript
const response = await client.search({
  index: 'movies',
  body: {
    query: {
      match: {
        title: 'dark knight'
      }
    }
  }
});
console.log(response.body.hits.hits);
```

OpenSearch query DSL allows you to specify complex queries. Check out the [OpenSearch query DSL documentation](https://opensearch.org/docs/latest/query-dsl/) for more information.

### Basic Pagination
The search API allows you to paginate through the search results. The following example searches for documents that match the query `dark knight`, sorted by `year` in ascending order, and returns the first 2 results after skipping the first 5 results:
```javascript
search_body = {
  query: {
    match: {
      title: 'dark knight'
    }
  },
  sort: [
    {
      year: {
        order: 'asc'
      }
    }
  ]
}

await client.search({
  index: 'movies',
  size: 2,
  from: 5,
  body: search_body
});
```

With sorting, you can also use the `search_after` parameter to paginate through the search results. Let's say you have already displayed the first page of results, and you want to display the next page. You can use the `search_after` parameter to paginate through the search results. The following example will demonstrate how to get the first 3 pages of results using the search query of the previous example:
```javascript
const page_1 = await client.search({
  index: 'movies',
  size: 2,
  body: search_body
});

const page_2 = await client.search({
  index: 'movies',
  size: 2,
  body: {
    ...search_body,
    search_after: page_1[page_1.length - 1].sort
  }
});

const page_3 = await client.search({
  index: 'movies',
  size: 2,
  body: {
    ...search_body,
    search_after: page_2[page_2.length - 1].sort
  }
})
```
### Pagination with scroll
When retrieving large amounts of non-real-time data, you can use the `scroll` parameter to paginate through the search results.
```javascript
const page_1 = await client.search({
  index: 'movies',
  scroll: '1m',
  size: 2,
  body: search_body
});

const page_2 = await client.scroll({
  scroll_id: page_1._scroll_id,
  scroll: '1m'
});

const page_3 = await client.scroll({
  scroll_id: page_2._scroll_id,
  scroll: '1m'
});
```
### Pagination with point in time
The scroll example above has one weakness: if the index is updated while you are scrolling through the results, they will be paginated inconsistently. To avoid this, you should use the "Point in Time" feature. The following example demonstrates how to use the `point_in_time` and `pit_id` parameters to paginate through the search results:
```javascript
/** Create a point in time */
const pit = client.create_pit({
  index: 'movies',
  keep_alive: '1m'
});

/** Include pit info in the search body */
const pit_search_body = {
  ..search_body,
  pit: {
    id: pit.pit_id,
    keep_alive: '1m'
  }
}

/** Get the first 3 pages of results */
const page_1 = await client.search({
  size: 2,
  body: pit_search_body
});
console.log(page_1.body.hits.hits);

const page_2 = await client.search({
  size: 2,
  body: {
    ...pit_search_body,
    search_after: page_1[page_1.length - 1].sort  
  }
});
console.log(page_2.body.hits.hits);

const page_3 = await client.search({
  size: 2,
  body: {
    ...pit_search_body,
    search_after: page2[page_2.length-1].sort
  }
});
console.log(page_3.body.hits.hits);

/** Print out the titles of the first 3 pages of results */
console.log(page_1.map(hit => hit._source.title));
console.log(page_2.map(hit => hit._source.title));
console.log(page_3.map(hit => hit._source.title));

/** Delete the point in time */
client.delete_pit({body: {pit_id: pit.pit_id}});
```
Note that a point-in-time is associated with an index or a set of index. So, when performing a search with a point-in-time, you DO NOT specify the index in the search.
# Cleanup
```javascript
await client.indices.delete({index: 'movies'});
```