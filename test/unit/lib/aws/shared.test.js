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
const { giveAwsCredentialProviderLoader } = require('../../../../lib/aws/shared');

test('giveAwsCredentialProviderLoader with SDK not found error', async (t) => {
  t.plan(1);

  const getAwsSDKCredentialsProvider = async () => {
    throw new Error('SDK not found');
  };

  const loader = giveAwsCredentialProviderLoader(getAwsSDKCredentialsProvider);

  try {
    await loader();
    t.fail('Should throw error');
  } catch (err) {
    t.equal(err.message, 'SDK not found');
  }
});

test('giveAwsCredentialProviderLoader with provider credential error', async (t) => {
  t.plan(1);

  const getAwsSDKCredentialsProvider = async () => {
    return () => Promise.reject(new Error('Provider credential error'));
  };

  const loader = giveAwsCredentialProviderLoader(getAwsSDKCredentialsProvider);

  try {
    await loader();
    t.fail('Should throw error');
  } catch (err) {
    t.equal(err.message, 'Provider credential error');
  }
});
