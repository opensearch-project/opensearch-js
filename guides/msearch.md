# Multi-Search (msearch)

OpenSearch's Multi-Search (`msearch`) API allows you to execute multiple search operations for documents within an index efficiently. This API supports various parameters that provide flexibility in customizing your search operations. It's crucial to understand the key differences between `msearch` and a regular `search` operation in OpenSearch. Unlike a single search operation, `msearch` enables you to perform multiple searches in a single API call, significantly reducing network overhead as it need not initialize a new network connection for each search. This proves particularly advantageous for batch operations or scenarios where searches span multiple indices. By combining searches into one request, `msearch` streamlines the process and enhances overall efficiency. However, it's important to note that there will also be a bit more memory overhead in the `msearch`, as the coordinating node will have to accumulate the various search responses in memory before sending back the final response. Explore the functionalities of the msearch API with the provided sample code in [../samples/msearch.js](../samples/msearch.js).

# Setup

```javascript
const client = new Client({
  node: 'http://localhost:9200',
});

await client.bulk({
  body: [
    { index: { _index: 'movies', _id: 1 } },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    { index: { _index: 'movies', _id: 2 } },
    { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
  ],
});

await client.indices.refresh({ index: 'movies' });
```

# Multi Search API

The multi-search allows you to execute multiple search requests within a single API call. The following example shows how each search query provides a list of documents from the movie index.

```javascript
try {
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
} catch (error) {
  console.error('An error occurred:', error);
}
```

# Cleanup

```javascript
await client.indices.delete({index: 'movies'});
```
