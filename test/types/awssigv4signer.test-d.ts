/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */
import { expectType } from 'tsd';
const { v4: uuidv4 } = require('uuid');
import { AwsSigv4SignerResponse, AwsSigv4Signer } from '../../lib/aws';

const mockCreds = {
  accessKeyId: uuidv4(),
  secretAccessKey: uuidv4(),
  expired: false,
  expireTime: new Date(),
  sessionToken: uuidv4(),
};

const mockRegion = 'us-east-1';

{
  const AwsSigv4SignerOptions = {
    getCredentials: () => Promise.resolve(mockCreds),
    region: mockRegion,
  };

  const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

  expectType<AwsSigv4SignerResponse>(auth);
}
