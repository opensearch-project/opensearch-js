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

const Connection = require('./Connection');
const aws4 = require('aws4');

module.exports = (awsConfig) => {
  class AmazonConnection extends Connection {
    buildRequestObject(params) {
      const req = super.buildRequestObject(params);

      req.service = 'es';

      if (awsConfig.region) {
        req.region = awsConfig.region;
      }

      if (!req.headers) {
        req.headers = {};
      }

      // Fix the Host header, since HttpConnector.makeReqParams() appends
      // the port number which will cause signature verification to fail
      req.headers.host = req.hostname;

      // This fix allows the connector to work with the older 6.x elastic branch.
      // The problem with that version, is that the Transport object would add a
      // `Content-Length` header (yes with Pascal Case), thus duplicating headers
      // (`Content-Length` and `content-length`), which makes the signature fail.
      let contentLength = 0;
      if (params.body) {
        contentLength = Buffer.byteLength(params.body, 'utf8');
        req.body = params.body;
      }
      const lengthHeader = 'content-length';
      const headerFound = Object.keys(req.headers).find(
        (header) => header.toLowerCase() === lengthHeader
      );
      if (headerFound === undefined) {
        req.headers[lengthHeader] = contentLength;
      }

      return aws4.sign(req, awsConfig.credentials);
    }
  }

  return AmazonConnection;
};
