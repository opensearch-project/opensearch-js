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

const Transport = require('./Transport');

function awaitAwsCredentials(awsConfig) {
  return new Promise((resolve, reject) => {
    awsConfig.getCredentials((err) => {
      err ? reject(err) : resolve();
    });
  });
}

module.exports = (awsConfig) => {
  class AmazonTransport extends Transport {
    request(params, options = {}, callback = undefined) {
      // options is optional, so if it is omitted, options will be the callback
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      // check if getCredentials exists, if so this is an aws-sdk v2 global config object
      if (typeof awsConfig.getCredentials !== 'function') {
        if (typeof callback === 'undefined') {
          return super.request(params, options);
        } else {
          super.request(params, options, callback);
        }
      } else {
        // Promise support
        if (typeof callback === 'undefined') {
          return awaitAwsCredentials(awsConfig).then(() => super.request(params, options));
        }

        // Callback support
        awaitAwsCredentials(awsConfig)
          .then(() => super.request(params, options, callback))
          .catch(callback);
      }
    }
  }

  return AmazonTransport;
};
