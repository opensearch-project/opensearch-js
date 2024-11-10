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
import * as CommonName from '../_types/_common___Name'
import * as Global from '../_types/_global'
import * as Indices_GetIndexTemplateIndexTemplateItem from '../_types/indices.get_index_template___IndexTemplateItem'

export type Indices_GetIndexTemplate_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  flat_settings?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  name?: CommonName.undefined;
}

export type Indices_GetIndexTemplate_Response = ApiResponse & {
  body: Indices_GetIndexTemplate_ResponseBody;
}

export type Indices_GetIndexTemplate_ResponseBody = {
  index_templates: Indices_GetIndexTemplateIndexTemplateItem.undefined[];
}

