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
import * as Cat_NodesNodesRecord from '../_types/cat.nodes___NodesRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_Nodes_Request = Global.Params & {
  bytes?: CommonByteUnit.undefined;
  cluster_manager_timeout?: CommonDuration.undefined;
  format?: string;
  full_id?: boolean | string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_Nodes_Response = ApiResponse & {
  body: Cat_Nodes_ResponseBody;
}

export type Cat_Nodes_ResponseBody = Cat_NodesNodesRecord.undefined[]

