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
import * as CommonInlineScript from '../_types/_common___InlineScript'
import * as Core_ScriptsPainlessExecutePainlessContextSetup from '../_types/_core.scripts_painless_execute___PainlessContextSetup'
import * as Global from '../_types/_global'

export type ScriptsPainlessExecute_Request = Global.Params & {
  body?: ScriptsPainlessExecute_RequestBody;
}

export type ScriptsPainlessExecute_RequestBody = {
  context?: string;
  context_setup?: Core_ScriptsPainlessExecutePainlessContextSetup.undefined;
  script?: CommonInlineScript.undefined;
}

export type ScriptsPainlessExecute_Response = ApiResponse & {
  body: ScriptsPainlessExecute_ResponseBody;
}

export type ScriptsPainlessExecute_ResponseBody = {
  result: Record<string, any>;
}

