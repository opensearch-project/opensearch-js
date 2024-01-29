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
const { createSecuredClient } = require('../helper');

const client = createSecuredClient();
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

test('Add documents using bulk endpoint', async (t) => {
  const body = [
    { index: { _index: index } },
    { title: 'The quick brown fox' },
    { index: { _index: index } },
    { title: 'The quick brown fox jumps over the lazy dog' },
  ];
  const response = await http.post({ path: `_bulk`, body });
  t.equal(response.body.errors, false);
});

test('Close the previously created index', async (t) => {
  const response = await http.post({ path: `${index}/_close` });
  t.equal(response.body.acknowledged, true);
});

test('Delete the previously created index', async (t) => {
  const response = await http.delete({ path: index });
  t.equal(response.body.acknowledged, true);
});
