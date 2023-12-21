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
const { URL } = require('url');
const { v4: uuidv4 } = require('uuid');
const AwsSigv4Signer = require('../../../../lib/aws/AwsSigv4Signer');
const AwsSigv4SignerError = require('../../../../lib/aws/errors');
const { Connection } = require('../../../../index');
const { Client, buildServer } = require('../../../utils');

test('Sign with SigV4', (t) => {
  t.plan(4);

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
  t.same(
    signedRequest.headers['x-amz-content-sha256'],
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  );
  t.same(signedRequest.service, 'es');
});

test('Sign with SigV4 failure (with empty region)', (t) => {
  const mockCreds = {
    accessKeyId: uuidv4(),
    secretAccessKey: uuidv4(),
  };

  const mockRegions = [{ region: undefined }, { region: null }, { region: '' }, {}];

  const AwsSigv4SignerOptions = {
    getCredentials: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(mockCreds), 100);
      }),
  };

  mockRegions.forEach((region) => {
    try {
      AwsSigv4Signer(Object.assign({}, AwsSigv4SignerOptions, region));
      t.fail('Should fail');
    } catch (err) {
      t.ok(err instanceof AwsSigv4SignerError);
      t.same(err.message, 'Region cannot be empty');
    }
  });

  t.end();
});

test('Sign with SigV4 and provided service', (t) => {
  t.plan(1);

  const mockCreds = {
    accessKeyId: uuidv4(),
    secretAccessKey: uuidv4(),
  };

  const mockRegion = 'us-west-2';
  const mockService = 'foo';

  const AwsSigv4SignerOptions = {
    getCredentials: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(mockCreds), 100);
      }),
    region: mockRegion,
    service: mockService,
  };

  const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

  const connection = new Connection({
    url: new URL('https://localhost:9200'),
  });

  const request = connection.buildRequestObject({
    path: '/hello',
    method: 'GET',
  });

  const signedRequest = auth.buildSignedRequestObject(request);
  t.same(signedRequest.service, mockService);
});

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
      .then(() => {
        t.fail('Should fail');
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

test('Basic aws (callback)', (t) => {
  t.plan(6);

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
              expiration: new Date(Date.now() + 1000 * 60 * 60),
            });
          }, 100);
        }),
    };
    const client = new Client({
      ...AwsSigv4Signer(AwsSigv4SignerOptions),
      node: `http://localhost:${port}`,
    });

    client.search(
      {
        index: 'test',
        q: 'foo:bar',
      },
      (err, { body }) => {
        t.error(err);
        t.same(body, { hello: 'world' });
        t.same(getCredentialsCalled, 1);
        client.search(
          {
            index: 'test',
            q: 'foo:bar',
          },
          (err, { body }) => {
            t.error(err);
            t.same(body, { hello: 'world' });
            t.same(getCredentialsCalled, 1);
            server.stop();
          }
        );
      }
    );
  });
});

test('Basic aws failure to refresh credentials', (t) => {
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
        new Promise((resolve, reject) => {
          setTimeout(() => {
            getCredentialsCalled++;
            if (getCredentialsCalled === 1) {
              resolve({
                accessKeyId: uuidv4(),
                secretAccessKey: uuidv4(),
                expireTime: new Date(Date.now() - 1000 * 60 * 60),
              });
            } else {
              reject(new Error('Failed to refresh credentials'));
            }
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
          .then(() => {
            t.same(getCredentialsCalled, 2);
            t.fail('Should fail');
          })
          .catch((err) => {
            t.ok(err);
            t.same(getCredentialsCalled, 2);
          })
          .finally(() => {
            server.stop();
          });
      })
      .catch(t.fail);
  });
});

test('Basic aws sdk v3 when token TTL value is smaller than 2*requestTimeout', (t) => {
  t.plan(4);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    let getCredentialsCalled = 0;

    const AwsSigv4SignerOptions = {
      getCredentials: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            getCredentialsCalled++;
            resolve({
              accessKeyId: uuidv4(),
              secretAccessKey: uuidv4(),
              expiration: new Date(Date.now() + 1000 * 55),
            });
          }, 100);
        }),
      region: mockRegion,
    };

    const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

    const client = new Client({
      ...auth,
      node: `http://localhost:${port}`,
      requestTimeout: 1000 * 30,
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

test('Basic aws sdk v3 when token TTL value is slightly bigger than 2*requestTimeout', (t) => {
  t.plan(4);

  function handler(req, res) {
    res.setHeader('Content-Type', 'application/json;utf=8');
    res.end(JSON.stringify({ hello: 'world' }));
  }

  buildServer(handler, ({ port }, server) => {
    const mockRegion = 'us-east-1';

    let getCredentialsCalled = 0;

    const AwsSigv4SignerOptions = {
      getCredentials: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            getCredentialsCalled++;
            resolve({
              accessKeyId: uuidv4(),
              secretAccessKey: uuidv4(),
              expiration: new Date(Date.now() + 1000 * 65),
            });
          }, 100);
        }),
      region: mockRegion,
    };

    const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

    const client = new Client({
      ...auth,
      node: `http://localhost:${port}`,
      requestTimeout: 1000 * 30,
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
