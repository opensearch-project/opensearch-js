/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

import { ConnectionOptions as TlsConnectionOptions } from 'tls';
import Transport, {
  TransportRequestParams,
  TransportRequestOptions,
  nodeFilterFn,
  nodeSelectorFn,
  generateRequestIdFn,
  MemoryCircuitBreakerOptions,
} from '../lib/Transport';
import { URL } from 'url';
import Connection, { AgentOptions, agentFn } from '../lib/Connection';
import {
  ConnectionPool,
  BasicAuth,
  AwsSigv4Auth,
} from '../lib/pool';
import Serializer from '../lib/Serializer';
import * as errors from '../lib/errors';


// Extend API
interface ClientExtendsCallbackOptions {
  ConfigurationError: errors.ConfigurationError;
  makeRequest(
    params: TransportRequestParams,
    options?: TransportRequestOptions
  ): Promise<void> | void;
  result: {
    body: null;
    statusCode: null;
    headers: null;
    warnings: null;
  };
}

interface NodeOptions {
  url: URL;
  id?: string;
  agent?: AgentOptions;
  ssl?: TlsConnectionOptions;
  headers?: Record<string, any>;
  roles?: {
    cluster_manager?: boolean;
    master?: boolean; // Deprecated. Use cluster_manager instead
    data: boolean;
    ingest: boolean;
  };
}

interface ClientOptions {
  node?: string | string[] | NodeOptions | NodeOptions[];
  nodes?: string | string[] | NodeOptions | NodeOptions[];
  Connection?: typeof Connection;
  ConnectionPool?: typeof ConnectionPool;
  Transport?: typeof Transport;
  Serializer?: typeof Serializer;
  maxRetries?: number;
  requestTimeout?: number;
  pingTimeout?: number;
  sniffInterval?: number | boolean;
  sniffOnStart?: boolean;
  sniffEndpoint?: string;
  sniffOnConnectionFault?: boolean;
  resurrectStrategy?: 'ping' | 'optimistic' | 'none';
  suggestCompression?: boolean;
  compression?: 'gzip';
  ssl?: TlsConnectionOptions;
  agent?: AgentOptions | agentFn | false;
  nodeFilter?: nodeFilterFn;
  nodeSelector?: nodeSelectorFn | string;
  headers?: Record<string, any>;
  opaqueIdPrefix?: string;
  generateRequestId?: generateRequestIdFn;
  name?: string | symbol;
  auth?: BasicAuth | AwsSigv4Auth;
  context?: unknown;
  proxy?: string | URL;
  enableMetaHeader?: boolean;
  cloud?: {
    id: string;
    username?: string;
    password?: string;
  };
  disablePrototypePoisoningProtection?: boolean | 'proto' | 'constructor';
  memoryCircuitBreaker?: MemoryCircuitBreakerOptions;
  enableLongNumeralSupport?: boolean;
}

export {
  ClientExtendsCallbackOptions,
  ClientOptions,
  NodeOptions,
};