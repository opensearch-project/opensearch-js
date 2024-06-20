/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */


export interface Cursor {
  keep_alive?: string;
}

export interface Explain {
  fetch_size?: number;
  filter?: Record<string, any>;
  query?: string;
}

export interface ExplainBody {
  children?: ExplainBody[];
  description?: Record<string, any>;
  name?: string;
}

export interface ExplainResponse {
  root?: ExplainBody;
}

export interface Plugins {
  ppl?: Ppl;
  query?: PluginsQuery;
  sql?: Sql;
}

export interface PluginsQuery {
  memory_limit?: string;
  size_limit?: string | number;
}

export interface Ppl {
  enabled?: boolean | string;
}

export interface Query {
  fetch_size?: number;
  filter?: Record<string, any>;
  query?: string;
}

export interface QueryResponse {
  cursor?: string;
  datarows?: any[][];
  schema?: Record<string, any>[];
  size?: number;
  status?: number;
  total?: number;
}

export interface Sql {
  cursor?: Cursor;
  enabled?: boolean | string;
  slowlog?: number | string;
}

export interface SqlClose {
  cursor?: string;
}

export interface SqlCloseResponse {
  succeeded?: boolean;
}

export interface SqlSettings {
  transient?: Transient;
}

export interface SqlSettingsPlain {
  transient?: TransientPlain;
}

export interface SqlSettingsResponse {
  acknowledged?: boolean;
  persistent?: Record<string, any>;
  transient?: Transient;
}

export interface Stats {
  cluster_name?: Record<string, any>;
  end_time?: Record<string, any>;
  execution_time?: Record<string, any>;
  index?: Record<string, any>;
  query?: Record<string, any>;
  start_time?: string;
  user?: Record<string, any>;
}

export interface Transient {
  plugins?: Plugins;
}

export interface TransientPlain {
  'plugins.ppl.enabled'?: boolean;
  'plugins.query.memory_limit'?: string;
  'plugins.query.size_limit'?: number;
  'plugins.sql.cursor.keep_alive'?: string;
  'plugins.sql.enabled'?: boolean;
  'plugins.sql.slowlog'?: number;
}

