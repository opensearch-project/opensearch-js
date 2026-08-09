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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as Nodes_Common from '../_types/nodes._common'

export interface SearchRelevance_GetNodeStats_Request extends Global.Params {
  flat_stat_paths?: string;
  include_all_nodes?: string;
  include_individual_nodes?: string;
  include_info?: string;
  include_metadata?: string;
  node_id: string;
  stat?: string;
}

export interface SearchRelevance_GetNodeStats_Response extends ApiResponse {
  body: SearchRelevance_GetNodeStats_ResponseBody;
}

export interface SearchRelevance_GetNodeStats_ResponseBody extends Nodes_Common.NodesResponseBase {
  all_nodes?: Record<string, any>;
  cluster_name?: Common.Name;
  info?: Record<string, any>;
  nodes: Record<string, any>;
}

