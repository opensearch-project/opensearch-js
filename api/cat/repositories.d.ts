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
import * as Cat_RepositoriesRepositoriesRecord from '../_types/cat.repositories___RepositoriesRecord'
import * as CommonDuration from '../_types/_common___Duration'
import * as Global from '../_types/_global'

export type Cat_Repositories_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  s?: string[];
  v?: boolean;
}

export type Cat_Repositories_Response = ApiResponse & {
  body: Cat_Repositories_ResponseBody;
}

export type Cat_Repositories_ResponseBody = Cat_RepositoriesRepositoriesRecord.undefined[]

