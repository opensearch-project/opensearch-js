/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

'use strict';

const { AwsSigv4Signer } = require('../../../lib/aws/index');
const { Client } = require('../../../index');

new Client({
  ...AwsSigv4Signer({
    region: 'us-east-1',
    service: 'es',
  }),
  node: 'https://search-xxx.region.es.amazonaws.com',
});
