/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// For more information on how to make custom HTTP requests, check out: ./guides/json.md

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

let response;

const print_response = (title) => {
  console.log(`\n${title}:`);
  console.log(response.body);
};

const start = async () => {
  // Check the cluster health
  response = await client.http.get({ path: '/_cluster/health' });
  print_response('Get Cluster Health');

  // Create the movies index
  response = await client.http.put({
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
  print_response('Create `movies` Index');

  // Make sure the index is created before indexing documents
  response = await client.http.head({ path: '/movies' });
  print_response('Check If Index Exists');

  // Add 2 documents to the index using the bulk endpoint
  response = await client.http.post({
    path: '/_bulk',
    body: [
      { index: { _index: 'movies' } },
      { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
      { index: { _index: 'movies' } },
      { title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974 },
    ],
  });
  print_response('Add 2 documents to the `movies` Index using the Bulk API');

  // Delete the movies index
  response = await client.http.delete({ path: '/movies' });
  print_response('Delete `movies` Index');
};

start();
