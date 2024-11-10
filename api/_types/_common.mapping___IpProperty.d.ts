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

import * as Common_MappingDocValuesPropertyBase from './_common.mapping___DocValuesPropertyBase'
import * as Common_MappingOnScriptError from './_common.mapping___OnScriptError'
import * as CommonScript from './_common___Script'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  boost?: number;
  ignore_malformed?: boolean;
  index?: boolean;
  null_value?: string;
  on_script_error?: Common_MappingOnScriptError.undefined;
  script?: CommonScript.undefined;
  time_series_dimension?: boolean;
  type: 'ip';
}

