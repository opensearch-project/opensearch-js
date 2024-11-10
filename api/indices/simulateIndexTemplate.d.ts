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

import { ApiResponse } from '../../lib/Transport'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonMetadata from '../_types/_common___Metadata'
import * as CommonName from '../_types/_common___Name'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as Global from '../_types/_global'
import * as Indices_CommonIndexTemplateDataStreamConfiguration from '../_types/indices._common___IndexTemplateDataStreamConfiguration'
import * as Indices_PutIndexTemplateIndexTemplateMapping from '../_types/indices.put_index_template___IndexTemplateMapping'

export type Indices_SimulateIndexTemplate_Request = Global.Params & {
  body?: Indices_SimulateIndexTemplate_RequestBody;
  cause?: string;
  cluster_manager_timeout?: CommonDuration.undefined;
  create?: boolean;
  master_timeout?: CommonDuration.undefined;
  name: CommonName.undefined;
}

export type Indices_SimulateIndexTemplate_RequestBody = {
  _meta?: CommonMetadata.undefined;
  allow_auto_create?: boolean;
  composed_of?: CommonName.undefined[];
  data_stream?: Indices_CommonIndexTemplateDataStreamConfiguration.undefined;
  index_patterns?: CommonIndices.undefined;
  priority?: number;
  template?: Indices_PutIndexTemplateIndexTemplateMapping.undefined;
  version?: CommonVersionNumber.undefined;
}

export type Indices_SimulateIndexTemplate_Response = ApiResponse & {
  body: Indices_SimulateIndexTemplate_ResponseBody;
}

export type Indices_SimulateIndexTemplate_ResponseBody = Record<string, any>

