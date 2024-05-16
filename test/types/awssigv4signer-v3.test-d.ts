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
import {
  AwsSigv4SignerResponse as AwsSigv4SignerResponseV3,
  AwsSigv4Signer as AwsSigv4SignerV3,
} from '../../lib/aws/index-v3';

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

  const auth = AwsSigv4SignerV3(AwsSigv4SignerOptions);

  expectType<AwsSigv4SignerResponseV3>(auth);
}
