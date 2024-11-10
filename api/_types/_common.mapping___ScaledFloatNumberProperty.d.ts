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

import * as Common_MappingNumberPropertyBase from './_common.mapping___NumberPropertyBase'

export type undefined = Common_MappingNumberPropertyBase.undefined & {
  null_value?: number;
  scaling_factor?: number;
  type: 'scaled_float';
}

