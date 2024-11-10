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
import * as Indices_CommonIndexTemplate from '../_types/indices._common___IndexTemplate'
import * as Indices_SimulateTemplateOverlapping from '../_types/indices.simulate_template___Overlapping'
import * as Indices_SimulateTemplateTemplate from '../_types/indices.simulate_template___Template'

export type Indices_SimulateTemplate_Request = Global.Params & {
  body?: Indices_CommonIndexTemplate.undefined;
  cause?: string;
  cluster_manager_timeout?: CommonDuration.undefined;
  create?: boolean;
  master_timeout?: CommonDuration.undefined;
  name?: CommonName.undefined;
}

export type Indices_SimulateTemplate_Response = ApiResponse & {
  body: Indices_SimulateTemplate_ResponseBody;
}

export type Indices_SimulateTemplate_ResponseBody = {
  overlapping?: Indices_SimulateTemplateOverlapping.undefined[];
  template: Indices_SimulateTemplateTemplate.undefined;
}

