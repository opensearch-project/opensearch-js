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
import Connection from '../Connection';
import * as http from 'http';

interface AwsV4SignerOptions {
  credentials: Credentials;
  region: string;
}

export interface AwsV4SignerResponse {
  Connection: Connection;
  buildSignedRequestObject(request: any): http.ClientRequestArgs;
}

export default function AwsV4Signer(opts: AwsV4SignerOptions): AwsV4SignerResponse;

export {};
