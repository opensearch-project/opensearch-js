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

const AwsSigv4Signer = require('../../../../lib/aws/AwsSigv4Signer');
const AwsSigv4SignerV3 = require('../../../../lib/aws/AwsSigv4Signer-sdk-v3');
const AwsSigv4SignerError = require('../../../../lib/aws/errors');

const { Client, buildServer } = require('../../../utils');

test('Sign with SigV4 using default getCredentials provider', (t) => {
  t.plan(2);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    const AwsSigv4SignerOptions = {
      region: mockRegion,
    };

    const client = new Client({
      ...AwsSigv4Signer(AwsSigv4SignerOptions),
      node: `http://localhost:${port}`,
    });

    client
      .search({
        index: 'test',
        q: 'foo:bar',
      })
      .catch((err) => {
        t.ok(err instanceof AwsSigv4SignerError);
        t.same(
          err.message,
          'Unable to find a valid AWS SDK, please provide a valid getCredentials function to AwsSigv4Signer options.'
        );
      })
      .finally(() => {
        server.stop();
      });
  });
});

test('Sign with SigV4 using default getCredentials provider aws sdk v3', (t) => {
  t.plan(2);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    const AwsSigv4SignerOptions = {
      region: mockRegion,
    };
    const client = new Client({
      ...AwsSigv4SignerV3(AwsSigv4SignerOptions),
      node: `http://localhost:${port}`,
    });

    client
      .search({
        index: 'test',
        q: 'foo:bar',
      })
      .catch((err) => {
        t.ok(err instanceof AwsSigv4SignerError);
        t.same(
          err.message,
          "Missing '@aws-sdk/credential-provider-node' module. Install it as a dependency."
        );
      })
      .finally(() => {
        server.stop();
      });
  });
});
