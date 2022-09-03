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

test('Sign with SigV4', (t) => {
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

  const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

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

test('Sign with SigV4 failure (with empty region)', (t) => {
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
    AwsSigv4Signer(AwsSigv4SignerOptions);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof AwsSigv4SignerError);
    t.same(err.message, 'Region cannot be empty');
  }
});

test('Sign with SigV4 failure (without getCredentials function)', (t) => {
  t.plan(2);

  const mockRegion = 'us-west-2';

  const AwsSigv4SignerOptions = { region: mockRegion };

  try {
    AwsSigv4Signer(AwsSigv4SignerOptions);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof AwsSigv4SignerError);
    t.same(err.message, 'getCredentials function is required');
  }
});

test('Basic aws (promises)', (t) => {
  t.plan(4);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    let getCredentialsCalled = 0;
    const AwsSigv4SignerOptions = {
      region: mockRegion,
      getCredentials: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            getCredentialsCalled++;
            resolve({
              accessKeyId: uuidv4(),
              secretAccessKey: uuidv4(),
              expired: false,
              expireTime: new Date(Date.now() + 1000 * 60 * 60),
            });
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
        t.same(getCredentialsCalled, 1);
        client
          .search({
            index: 'test',
            q: 'foo:bar',
          })
          .then(({ body }) => {
            t.same(body, { hello: 'world' });
            t.same(getCredentialsCalled, 1);

            server.stop();
          })
          .catch(t.fail);
      })
      .catch(t.fail);
  });
});

test('Basic with expired token (promises)', (t) => {
  t.plan(4);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    let getCredentialsCalled = 0;
    const getCredentials = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          getCredentialsCalled++;
          resolve({
            accessKeyId: uuidv4(),
            secretAccessKey: uuidv4(),
            expired: true,
            expireTime: new Date(Date.now() - 1000),
          });
        }, 100);
      });

    const AwsSigv4SignerOptions = {
      getCredentials: getCredentials,
      region: mockRegion,
    };

    const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

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
        t.same(getCredentialsCalled, 1);
        client
          .search({
            index: 'test',
            q: 'foo:bar',
          })
          .then(({ body }) => {
            t.same(body, { hello: 'world' });
            t.same(getCredentialsCalled, 2);

            server.stop();
          })
          .catch(t.fail);
      })
      .catch(t.fail);
  });
});

test('Basic with expired token and credentials sdk refresh (promises)', (t) => {
  t.plan(6);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    let getCredentialsCalled = 0;
    let refreshPromiseCalled = 0;
    const getCredentials = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          getCredentialsCalled++;
          resolve({
            accessKeyId: uuidv4(),
            secretAccessKey: uuidv4(),
            needsRefresh: () => true,
            refreshPromise: () =>
              new Promise((resolve) => {
                refreshPromiseCalled++;
                resolve({
                  accessKeyId: uuidv4(),
                  secretAccessKey: uuidv4(),
                  expired: false,
                });
              }),
          });
        }, 100);
      });

    const AwsSigv4SignerOptions = {
      getCredentials: getCredentials,
      region: mockRegion,
    };

    const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

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
        t.same(getCredentialsCalled, 1);
        t.same(refreshPromiseCalled, 0);
        client
          .search({
            index: 'test',
            q: 'foo:bar',
          })
          .then(({ body }) => {
            t.same(body, { hello: 'world' });
            t.same(getCredentialsCalled, 1);
            t.same(refreshPromiseCalled, 1);

            server.stop();
          })
          .catch(t.fail);
      })
      .catch(t.fail);
  });
});
