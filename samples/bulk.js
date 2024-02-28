/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// For more information on how to make custom HTTP requests, check out: ./guides/bulk.md

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

const start = async () => {
  const movies = 'movies';
  const books = 'books';

  if ((await client.indices.exists({ index: movies })).body)
    await client.indices.delete({ index: movies });
  if ((await client.indices.exists({ index: books })).body)
    await client.indices.delete({ index: books });

  await client.indices.create({ index: movies });
  await client.indices.create({ index: books });

  client
    .bulk({
      index: movies,
      body: [
        { create: {} },
        { title: 'Beauty and the Beast', year: 2030, director: 'Ella' },
        { index: {} },
        { title: 'Snow White', year: 2031, director: 'Jake' },
        { create: {} },
        { title: 'Cinderella', year: 2032, director: 'Clyde' },
      ],
    })
    .then((response) => {
      console.log(response.body.items);
    });

  client
    .bulk({
      index: movies,
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
};

start().then(() => console.log('done'));
