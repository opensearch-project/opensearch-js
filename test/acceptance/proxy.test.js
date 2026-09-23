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

// We are using self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const net = require('net');
const { test } = require('tap');
const {
  Client,
  buildProxy: { createProxy, createSecureProxy, createServer, createSecureServer },
} = require('../utils');

test('http-http proxy support', async (t) => {
  const server = await createServer();
  const proxy = await createProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  const client = new Client({
    node: `http://${server.address().address}:${server.address().port}`,
    proxy: `http://${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('http-https proxy support', async (t) => {
  const server = await createSecureServer();
  const proxy = await createProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  const client = new Client({
    node: `https://${server.address().address}:${server.address().port}`,
    proxy: `http://${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('https-http proxy support', async (t) => {
  const server = await createServer();
  const proxy = await createSecureProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  const client = new Client({
    node: `http://${server.address().address}:${server.address().port}`,
    proxy: `https://${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('https-https proxy support', async (t) => {
  const server = await createSecureServer();
  const proxy = await createSecureProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  const client = new Client({
    node: `https://${server.address().address}:${server.address().port}`,
    proxy: `https://${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('http basic authentication', async (t) => {
  const server = await createServer();
  const proxy = await createProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  proxy.authenticate = function (req, fn) {
    fn(
      null,
      req.headers['proxy-authorization'] ===
        `Basic ${Buffer.from('hello:world').toString('base64')}`
    );
  };

  const client = new Client({
    node: `http://${server.address().address}:${server.address().port}`,
    proxy: `http://hello:world@${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('https basic authentication', async (t) => {
  const server = await createSecureServer();
  const proxy = await createProxy();
  server.on('request', (req, res) => {
    t.equal(req.url, '/_cluster/health');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  proxy.authenticate = function (req, fn) {
    fn(
      null,
      req.headers['proxy-authorization'] ===
        `Basic ${Buffer.from('hello:world').toString('base64')}`
    );
  };

  const client = new Client({
    node: `https://${server.address().address}:${server.address().port}`,
    proxy: `http://hello:world@${proxy.address().address}:${proxy.address().port}`,
  });

  const response = await client.cluster.health();
  t.same(response.body, { hello: 'world' });

  server.close();
  proxy.close();
});

test('https proxy TLS servername', async (t) => {
  const server = await createServer();
  server.on('request', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ hello: 'world' }));
  });

  // SNI must carry a proxy hostname, and must be empty for a proxy IP address.
  for (const [host, expected] of [
    ['localhost', 'localhost'],
    ['127.0.0.1', false],
  ]) {
    const proxy = await createSecureProxy();
    let servername;
    proxy.on('secureConnection', (socket) => {
      servername = socket.servername;
    });

    const client = new Client({
      node: `http://${server.address().address}:${server.address().port}`,
      proxy: `https://${host}:${proxy.address().port}`,
    });

    const response = await client.cluster.health();
    t.same(response.body, { hello: 'world' });
    t.equal(servername, expected, `servername for proxy ${host}`);

    await client.close();
    proxy.close();
  }

  server.close();
});

test('proxy errors', async (t) => {
  const server = await createServer();
  const node = `http://${server.address().address}:${server.address().port}`;

  // The proxy refuses the CONNECT request.
  const proxy = await createProxy();
  proxy.authenticate = (req, fn) => fn(null, false);
  let client = new Client({
    node,
    proxy: `http://${proxy.address().address}:${proxy.address().port}`,
    maxRetries: 0,
  });
  await t.rejects(client.cluster.health(), { message: 'Bad response: 407' });
  await client.close();
  proxy.close();

  // The proxy accepts the connection, but does not answer the CONNECT request.
  const sockets = [];
  const silent = net.createServer((socket) => sockets.push(socket));
  await new Promise((resolve) => silent.listen(0, '127.0.0.1', resolve));
  client = new Client({
    node,
    proxy: `http://127.0.0.1:${silent.address().port}`,
    maxRetries: 0,
    requestTimeout: 100,
  });
  await t.rejects(client.cluster.health(), { message: 'Proxy timeout' });
  await client.close();
  sockets.forEach((socket) => socket.destroy());
  silent.close();

  server.close();
});
