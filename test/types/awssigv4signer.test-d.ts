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

import { Credentials } from '@aws-sdk/types';
import { expectType } from 'tsd';
const { v4: uuidv4 } = require('uuid');
import { AwsSigv4SignerResponse, AwsSigv4Signer } from '../../lib/aws';

const mockCreds: Credentials = {
  accessKeyId: uuidv4(),
  secretAccessKey: uuidv4(),
};

const mockRegion = 'us-west-2';

{
  const AwsSigv4SignerOptions = {
    getCredentials: () => Promise.resolve(mockCreds),
    region: mockRegion,
    refresh: true,
  };

  const auth = AwsSigv4Signer(AwsSigv4SignerOptions);

  expectType<Promise<AwsSigv4SignerResponse>>(auth);
}
