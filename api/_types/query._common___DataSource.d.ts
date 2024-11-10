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

import * as Query_CommonDataSourceConfiguration from './query._common___DataSourceConfiguration'

export type undefined = {
  allowedRoles?: string[];
  configuration?: Query_CommonDataSourceConfiguration.undefined;
  connector: string;
  description?: string;
  name: string;
  properties: Record<string, any>;
  resultIndex: string;
  status: string;
}

