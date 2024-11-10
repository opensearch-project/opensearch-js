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
import * as CommonDateTime from './_common___DateTime'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  boost?: number;
  format?: string;
  ignore_malformed?: boolean;
  index?: boolean;
  null_value?: CommonDateTime.undefined;
  precision_step?: number;
  type: 'date_nanos';
}

