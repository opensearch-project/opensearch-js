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
import * as Cat_Aliases from '../_types/cat.aliases'
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'

export interface Cat_Aliases_Request extends Global.Params {
  expand_wildcards?: Common.ExpandWildcards;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  name?: Common.Names;
  s?: string[];
  v?: boolean;
}

export interface Cat_Aliases_Response extends ApiResponse {
  body: Cat_Aliases_ResponseBody;
}

export type Cat_Aliases_ResponseBody = Cat_Aliases.AliasesRecord[]

