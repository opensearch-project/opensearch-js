/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */
const { Client } = require('@opensearch-project/opensearch');

// Instantiate a client with basic auth as setup in the README.md file
const client = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  node: 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'myStrongPassword123!',
  },
});

const printResponse = (title, body) => {
  console.log(`\n${title}:`);
  console.log(body);
};

const handleErrorResponse = (error) => {
  if (error.meta && error.meta.body) {
    console.error('Error:', error.meta.body.error);
  } else {
    console.error('Error:', error.message);
  }
};

const refreshIndex = async (indexName) => {
  try {
    const response = await client.indices.refresh({
      index: indexName,
    });
    printResponse(`Refresh response for index ${indexName}`, response.body);
  } catch (error) {
    handleErrorResponse(error);
  }
};

const deleteIndexIfExists = async (indexName) => {
  const indexExistsResponse = await client.indices.exists({ index: indexName });
  if (indexExistsResponse.statusCode === 200) {
    const response = await client.indices.delete({ index: indexName });
    printResponse(`Delete existing \`${indexName}\` Index`, response.body);
  }
};

const createMoviesIndex = async () => {
  const response = await client.indices.create({
    index: 'movies',
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
  printResponse('Create `movies` Index', response.body);
};

const addDocumentsToMoviesIndex = async () => {
  const response = await client.bulk({
    body: [
      { index: { _index: 'movies', _id: 1 } },
      { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
      { index: { _index: 'movies', _id: 2 } },
      { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
    ],
  });
  printResponse('Add documents to the `movies` Index using the Bulk API', response.body);
};

const multiSearchExample = async () => {
  const queries = [
    {},
    {
      query: { match: { title: 'The Godfather' } },
    },
    {},
    {
      query: { match: { title: 'Part II' } },
    },
  ];

  const multiSearchResponse = await client.msearch({
    index: 'movies',
    body: queries,
  });

  printResponse(
    'MultiSearch Response',
    multiSearchResponse.body.responses.map((res) => res.hits.hits.map((movie) => movie._source))
  );
};

const deleteMoviesIndex = async () => {
  const response = await client.indices.delete({ index: 'movies' });
  printResponse('Delete `movies` Index', response.body);
};

const start = async () => {
  try {
    await deleteIndexIfExists('movies');
    await createMoviesIndex();
    await addDocumentsToMoviesIndex();

    // Refresh the 'movies' index
    await refreshIndex('movies');

    // Multi-search example
    await multiSearchExample();

    // Delete the 'movies' index
    await deleteMoviesIndex();
  } catch (error) {
    handleErrorResponse(error);
  }
};

start();
