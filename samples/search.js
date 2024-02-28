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

const printResponse = (title, response) => {
  console.log(`\n${title}:`);
  console.log(response.body);
};

const refreshIndex = async (indexName) => {
  try {
    const response = await client.indices.refresh({
      index: indexName,
    });

    printResponse(`Refresh response for index ${indexName}`, response);
  } catch (error) {
    handleErrorResponse(error);
  }
};

const handleErrorResponse = (error) => {
  if (error.meta && error.meta.body) {
    console.error('Error:', error.meta.body.error);
  } else {
    console.error('Error:', error.message);
  }
};

const createMoviesIndex = async () => {
  try {
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

    printResponse('Create `movies` Index', response);
  } catch (error) {
    handleErrorResponse(error);
  }
};

const indexMovies = async () => {
  for (let i = 0; i < 10; i++) {
    await client.index({
      index: 'movies',
      id: i,
      body: {
        title: `The Dark Knight ${i}`,
        director: 'Christopher Nolan',
        year: 2008 + i,
      },
    });
  }

  await client.index({
    index: 'movies',
    body: {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      year: 1972,
    },
  });

  await client.index({
    index: 'movies',
    body: {
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      year: 1994,
    },
  });
};

const searchMovies = async (query) => {
  const response = await client.search({
    index: 'movies',
    body: query,
  });

  console.log('\nSearch Results:');
  response.body.hits.hits.forEach((element) => {
    console.log(element._source);
  });
};

const start = async () => {
  try {
    // Check the cluster health
    const clusterHealthResponse = await client.cluster.health({});
    printResponse('Get Cluster Health', clusterHealthResponse);

    // Check if the 'movies' index exists
    const indexExistsResponse = await client.indices.exists({ index: 'movies' });
    if (indexExistsResponse.statusCode === 200) {
      // Delete the 'movies' index if it exists
      const deleteIndexResponse = await client.indices.delete({ index: 'movies' });
      printResponse('Delete existing `movies` Index', deleteIndexResponse);
    }

    await createMoviesIndex();
    await indexMovies();

    // Refresh the 'movies' index
    await refreshIndex('movies');
    console.log('\nRefreshed `movies` Index');

    // List all movies using search
    await searchMovies({});

    // Search for 'dark knight'
    await searchMovies({
      query: {
        match: {
          title: 'dark knight',
        },
      },
    });

    // Delete the movies index
    const deleteIndexResponse = await client.indices.delete({ index: 'movies' });
    printResponse('Delete `movies` Index', deleteIndexResponse);
  } catch (error) {
    handleErrorResponse(error);
  }
};

start();
