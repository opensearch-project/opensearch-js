/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */
const { test } = require('tap');
const { URL } = require('url');
const { v4: uuidv4 } = require('uuid');
const AwsSigv4Signer = require('../../lib/aws/AwsSigv4Signer');
const AwsSigv4SignerError = require('../../lib/aws/errors');
const { Connection } = require('../../index');
const { Client, buildServer } = require('../utils');

test('Sign with SigV4', async (t) => {
  t.plan(2);

  const mockCreds = {
    accessKeyId: uuidv4(),
    secretAccessKey: uuidv4(),
  };

  const mockRegion = 'us-west-2';

  const AwsSigv4SignerOptions = {
    getCredentials: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(mockCreds), 100);
      }),
    region: mockRegion,
  };

  const auth = await AwsSigv4Signer(AwsSigv4SignerOptions);

  const connection = new Connection({
    url: new URL('https://localhost:9200'),
  });

  const request = connection.buildRequestObject({
    path: '/hello',
    method: 'GET',
    headers: {
      'X-Custom-Test': true,
    },
  });

  const signedRequest = auth.buildSignedRequestObject(request);
  t.hasProp(signedRequest.headers, 'X-Amz-Date');
  t.hasProp(signedRequest.headers, 'Authorization');
});

test('Sign with SigV4 failure (with empty region)', async (t) => {
  t.plan(2);

  const mockCreds = {
    accessKeyId: uuidv4(),
    secretAccessKey: uuidv4(),
  };

  const AwsSigv4SignerOptions = {
    getCredentials: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(mockCreds), 100);
      }),
  };

  try {
    await AwsSigv4Signer(AwsSigv4SignerOptions);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof AwsSigv4SignerError);
    t.equal(err.message, 'Region cannot be empty');
  }
});

test('Sign with SigV4 failure (without getCredentials function)', async (t) => {
  t.plan(2);

  const mockRegion = 'us-west-2';

  const AwsSigv4SignerOptions = { region: mockRegion };

  try {
    await AwsSigv4Signer(AwsSigv4SignerOptions);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof AwsSigv4SignerError);
    t.equal(err.message, 'getCredentials function is required');
  }
});

test('Basic aws (promises)', (t) => {
  t.plan(1);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockCreds = {
      accessKeyId: uuidv4(),
      secretAccessKey: uuidv4(),
      expired: false,
    };

    const mockRegion = 'us-east-1';

    const AwsSigv4SignerOptions = {
      region: mockRegion,
      getCredentials: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(mockCreds);
          }, 100);
        }),
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
      .then(({ body }) => {
        t.same(body, { hello: 'world' });
        server.stop();
      })
      .catch(t.fail);
  });
});

test('Basic with expired token (promises)', (t) => {
  t.plan(1);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, async ({ port }, server) => {
    const mockCredsExpired = {
      accessKeyId: uuidv4(),
      secretAccessKey: uuidv4(),
      expiration: new Date(Date.now() - 1000),
    };

    const mockCredsRenewed = {
      accessKeyId: uuidv4(),
      secretAccessKey: uuidv4(),
      expiration: new Date(Date.now() - 1000),
    };

    const mockRegion = 'us-east-1';

    const getCredentials = () => {
      let currentCreds = null;
      return () =>
        new Promise((resolve) => {
          setTimeout(() => {
            if (currentCreds) {
              resolve(mockCredsRenewed);
            } else {
              currentCreds = mockCredsExpired;
              resolve(mockCredsExpired);
            }
          }, 100);
        });
    };

    const AwsSigv4SignerOptions = {
      getCredentials: getCredentials(),
      region: mockRegion,
    };

    const auth = await AwsSigv4Signer(AwsSigv4SignerOptions);

    const client = new Client({
      ...auth,
      node: `http://localhost:${port}`,
    });

    client
      .search({
        index: 'test',
        q: 'foo:bar',
      })
      .then(({ body }) => {
        t.same(body, { hello: 'world' });
        server.stop();
      })
      .catch(t.fail);
  });
});
