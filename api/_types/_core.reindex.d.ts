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

import * as Common from './_common'
import * as Common_QueryDsl from './_common.query_dsl'
import * as Common_Mapping from './_common.mapping'

export interface Destination {
  index: Common.IndexName;
  op_type?: Common.OpType;
  pipeline?: string;
  routing?: Common.Routing;
  version_type?: Common.VersionType;
}

export interface RemoteSource {
  connect_timeout?: Common.Duration;
  headers?: Record<string, string>;
  host: Common.Host;
  password?: Common.Password;
  socket_timeout?: Common.Duration;
  username?: Common.Username;
}

export interface Source {
  _source?: Common.Fields;
  index: Common.Indices;
  query?: Common_QueryDsl.QueryContainer;
  remote?: RemoteSource;
  runtime_mappings?: Common_Mapping.RuntimeFields;
  size?: number;
  slice?: Common.SlicedScroll;
  sort?: Common.Sort;
}

