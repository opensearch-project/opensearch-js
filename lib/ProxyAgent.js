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
 * Derived from hpagent 1.2.0 (https://github.com/delvedor/hpagent).
 * Change: an IP address is not sent as the TLS servername of the proxy.
 * RFC 6066 does not allow it, and Node.js >= 26 throws ERR_INVALID_ARG_VALUE.
 *
 * MIT License
 *
 * Copyright (c) 2020 Tomas Della Vedova
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

const http = require('http');
const https = require('https');
const net = require('net');

// Opens a CONNECT tunnel through agent.proxy and gives the socket to onSocket.
function connect(agent, options, callback, onSocket) {
  const { proxy, proxyRequestOptions } = agent;
  const requestOptions = {
    ...proxyRequestOptions,
    method: 'CONNECT',
    host: proxy.hostname,
    port: proxy.port,
    path: `${options.host}:${options.port}`,
    setHost: false,
    headers: {
      ...proxyRequestOptions.headers,
      connection: agent.keepAlive ? 'keep-alive' : 'close',
      host: `${options.host}:${options.port}`,
    },
    agent: false,
    timeout: options.timeout || 0,
  };

  if (proxy.username || proxy.password) {
    const credentials = `${decodeURIComponent(proxy.username || '')}:${decodeURIComponent(
      proxy.password || ''
    )}`;
    requestOptions.headers['proxy-authorization'] = `Basic ${Buffer.from(credentials).toString(
      'base64'
    )}`;
  }

  // Necessary for the TLS check with the proxy to succeed. Without it, Node.js
  // takes the servername from the Host header, which is the target, not the proxy.
  // An empty string disables SNI for IP addresses, as Node.js does for IP hosts.
  if (proxy.protocol === 'https:') {
    requestOptions.servername = net.isIP(proxy.hostname) ? '' : proxy.hostname;
  }

  const request = (proxy.protocol === 'http:' ? http : https).request(requestOptions);
  request.once('connect', (response, socket) => {
    request.removeAllListeners();
    socket.removeAllListeners();
    if (response.statusCode === 200) {
      callback(null, onSocket(socket));
    } else {
      socket.destroy();
      callback(new Error(`Bad response: ${response.statusCode}`), null);
    }
  });
  request.once('timeout', () => {
    request.destroy(new Error('Proxy timeout'));
  });
  request.once('error', (err) => {
    request.removeAllListeners();
    callback(err, null);
  });
  request.end();
}

class HttpProxyAgent extends http.Agent {
  constructor({ proxy, proxyRequestOptions, ...opts }) {
    super(opts);
    this.proxy = typeof proxy === 'string' ? new URL(proxy) : proxy;
    this.proxyRequestOptions = proxyRequestOptions || {};
  }

  createConnection(options, callback) {
    connect(this, options, callback, (socket) => socket);
  }
}

class HttpsProxyAgent extends https.Agent {
  constructor({ proxy, proxyRequestOptions, ...opts }) {
    super(opts);
    this.proxy = typeof proxy === 'string' ? new URL(proxy) : proxy;
    this.proxyRequestOptions = proxyRequestOptions || {};
  }

  createConnection(options, callback) {
    connect(this, options, callback, (socket) => super.createConnection({ ...options, socket }));
  }
}

module.exports = { HttpProxyAgent, HttpsProxyAgent };
