/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { expectAssignable, expectNotAssignable } from 'tsd';
import { Client, Types } from '../..';

const client = new Client({ node: 'http://localhost:9200' });

// Metric and terms aggregations accept `field` and `script` (#1154).
expectAssignable<Types.Common_Aggregations.MetricAggregationBase>({ field: 'price' });
expectAssignable<Types.Common_Aggregations.MetricAggregationBase>({
  script: { source: 'doc.price.value' },
});
expectAssignable<Types.Common_Aggregations.TermsAggregationFields>({ field: 'brand', size: 10 });

// A terms lookup needs index and path, plus either id or query (#1154).
expectAssignable<Types.Common_QueryDsl.TermsLookup>({ index: 'users', path: 'followers', id: '1' });
expectAssignable<Types.Common_QueryDsl.TermsLookup>({
  index: 'users',
  path: 'followers',
  query: { match_all: {} },
});
expectNotAssignable<Types.Common_QueryDsl.TermsLookup>({ id: '1' });
expectNotAssignable<Types.Common_QueryDsl.TermsLookup>({ index: 'users', path: 'followers' });

(async () => {
  await client.search({
    index: 'sales',
    body: {
      aggs: {
        avg_price: { avg: { field: 'price' } },
        by_brand: {
          terms: { field: 'brand', size: 10 },
          aggs: { max_price: { max: { field: 'price' } } },
        },
      },
      query: { terms: { user: { index: 'users', id: '1', path: 'followers' } } },
    },
  });
})();
