/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

const { test } = require('tap');
const { Client } = require('../../../');

const client = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  node: 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'admin',
  },
});
const http = client.http;
const index = 'books';

test('Create an index using HTTP functions', async (t) => {
  const response = await http.put({
    path: index,
    body: { settings: { number_of_shards: 5, number_of_replicas: 2 } },
  });
  t.equal(response.body.acknowledged, true);
  t.equal(response.body.index, index);
});

test('Check that the previously created index exists', async (t) => {
  const response = await http.head({ path: index });
  t.equal(response.statusCode, 200);
});


test('Close the previously created index', async (t) => {
  const response = await http.post({ path: `${index}/_close` });
  t.equal(response.body.acknowledged, true);
});

test('Delete the previously created index', async (t) => {
  const response = await http.delete({ path: index });
  t.equal(response.body.acknowledged, true);
});
