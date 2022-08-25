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
import { OpenSearchClientError } from '../errors';

export declare class AwsV4SignerError extends OpenSearchClientError {
  name: string;
  message: string;
  data: any;
  constructor(message: string, data: any);
}
