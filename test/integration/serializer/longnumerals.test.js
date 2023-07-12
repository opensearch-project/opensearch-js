/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

const { createReadStream } = require('fs');
const { join } = require('path');
const split = require('split2');
const { test, beforeEach, afterEach } = require('tap');

const { Client } = require('../../../');

const INDEX = `test-serializer-${process.pid}`;
const client = new Client({
  node: process.env.TEST_OPENSEARCH_SERVER || 'http://localhost:9200',
});

beforeEach(async () => {
  await client.indices.create({ index: INDEX });
  const stream = createReadStream(
    join(__dirname, '..', '..', 'fixtures', 'longnumerals-dataset.ndjson')
  );
  const result = await client.helpers.bulk({
    datasource: stream.pipe(split()),
    refreshOnCompletion: true,
    onDocument() {
      return {
        index: { _index: INDEX },
      };
    },
  });
  if (result.failed > 0) {
    throw new Error('Failed bulk indexing docs');
  }
});

afterEach(async () => {
  await client.indices.delete({ index: INDEX }, { ignore: 404 });
});

test('long numerals', async (t) => {
  const results = await client.helpers.search({
    index: INDEX,
    body: {
      query: {
        range: {
          number: {
            lt: 999999999999999999n,
          },
        },
      },
    },
  });
  t.equal(results.length, 3);
  const object = {};
  for (const result of results) {
    object[result.description] = result.number;
  }
  t.same(object, {
    '-18014398509481982 , -1 , 1 , 18014398509481982': 18014398509481982n,
    '෴18014398509481982': -18014398509481982n,
    'Safer than [18014398509481982]': 9007199254740891,
  });
});
