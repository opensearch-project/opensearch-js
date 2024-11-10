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
import * as Cat_ThreadPoolThreadPoolRecord from '../_types/cat.thread_pool___ThreadPoolRecord'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'

export type Cat_ThreadPool_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  s?: string[];
  size?: number;
  thread_pool_patterns?: CommonNames.undefined;
  v?: boolean;
}

export type Cat_ThreadPool_Response = ApiResponse & {
  body: Cat_ThreadPool_ResponseBody;
}

export type Cat_ThreadPool_ResponseBody = Cat_ThreadPoolThreadPoolRecord.undefined[]

