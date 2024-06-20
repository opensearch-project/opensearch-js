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

import { ApiResponse } from '../../lib/Transport'
import * as Common from '../components/_common'
import * as Indices_Common from '../components/indices._common'
import * as Indices_PutIndexTemplate from '../components/indices.put_index_template'
import * as Global from '../components/_global'

export interface Indices_SimulateIndexTemplate_RequestBody {
  _meta?: Common.Metadata;
  allow_auto_create?: boolean;
  composed_of?: Common.Name[];
  data_stream?: Indices_Common.IndexTemplateDataStreamConfiguration;
  index_patterns?: Common.Indices;
  priority?: number;
  template?: Indices_PutIndexTemplate.IndexTemplateMapping;
  version?: Common.VersionNumber;
}

export interface Indices_SimulateIndexTemplate_Request extends Global.Params {
  body?: Indices_SimulateIndexTemplate_RequestBody;
  cause?: string;
  cluster_manager_timeout?: Common.Duration;
  create?: boolean;
  master_timeout?: Common.Duration;
  name: Common.Name;
}

export type Indices_SimulateIndexTemplate_ResponseBody = Record<string, any>

export interface Indices_SimulateIndexTemplate_Response extends ApiResponse {
  body: Indices_SimulateIndexTemplate_ResponseBody
}
