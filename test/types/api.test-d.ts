/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { expectAssignable, expectError } from 'tsd';
import { Client } from '../..';

const client = new Client({ node: 'http://localhost:9200' });

// Search hits are an array of hits, not a hit that is also an array (#1112).
(async () => {
  const response = await client.search({ index: 'test' });
  const hits = response.body.hits.hits;
  expectAssignable<string | undefined>(hits[0]._id);
  expectError(hits._source);
})();
