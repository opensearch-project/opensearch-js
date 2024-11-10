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
import * as Global from '../_types/_global'

export type Cluster_PutSettings_Request = Global.Params & {
  body: Cluster_PutSettings_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  flat_settings?: boolean;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
}

export type Cluster_PutSettings_RequestBody = {
  persistent?: {
};
  transient?: {
};
}

export type Cluster_PutSettings_Response = ApiResponse & {
  body: Cluster_PutSettings_ResponseBody;
}

export type Cluster_PutSettings_ResponseBody = {
  acknowledged: boolean;
  persistent: {
};
  transient: {
};
}

