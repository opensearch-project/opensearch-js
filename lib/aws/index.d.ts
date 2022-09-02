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

/// <reference types="node" />

import { Credentials } from '@aws-sdk/types';
import Connection from '../Connection';
import Transport from '../Transport';
import * as http from 'http';
import { OpenSearchClientError } from '../errors';

interface AwsSigv4SignerOptions {
  getCredentials: () => Promise<Credentials>;
  region: string;
}

interface AwsSigv4SignerResponse {
  Connection: Connection;
  Transport: Transport,
  buildSignedRequestObject(request: any): http.ClientRequestArgs;
}

declare function AwsSigv4Signer (opts: AwsSigv4SignerOptions): Promise<AwsSigv4SignerResponse>;

declare class AwsSigv4SignerError extends OpenSearchClientError {
  name: string;
  message: string;
  data: any;
  constructor(message: string, data: any);
}

export { AwsSigv4Signer, AwsSigv4SignerOptions, AwsSigv4SignerResponse, AwsSigv4SignerError };
