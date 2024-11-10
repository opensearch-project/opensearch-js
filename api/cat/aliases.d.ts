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
import * as Cat_AliasesAliasesRecord from '../_types/cat.aliases___AliasesRecord'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'

export type Cat_Aliases_Request = Global.Params & {
  expand_wildcards?: CommonExpandWildcards.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  name?: CommonNames.undefined;
  s?: string[];
  v?: boolean;
}

export type Cat_Aliases_Response = ApiResponse & {
  body: Cat_Aliases_ResponseBody;
}

export type Cat_Aliases_ResponseBody = Cat_AliasesAliasesRecord.undefined[]

