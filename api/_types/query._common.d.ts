/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */


export interface Credentials {
  password: string;
  username: string;
}

export interface DataSource {
  allowedRoles?: string[];
  configuration?: DataSourceConfiguration;
  connector: string;
  description?: string;
  name: string;
  properties: Record<string, any>;
  resultIndex: string;
  status: string;
}

export interface DataSourceConfiguration {
  credentials: Credentials;
  endpoint: string;
}

export type DataSourceList = DataSource[]

export interface DataSourceNotFound {
  error: ErrorResponse;
}

export interface DataSourceRetrieve {
  allowedRoles?: string[];
  configuration?: DataSourceConfiguration;
  connector: string;
  description?: string;
  name: string;
  properties: Record<string, any>;
  resultIndex: string;
  status: string;
}

export interface ErrorResponse {
  reason: string;
  root_cause: RootCause[];
  type: string;
}

export interface RootCause {
  reason: string;
  type: string;
}

