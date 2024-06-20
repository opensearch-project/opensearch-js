/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Indices_Common from './indices._common'
import * as Common_Mapping from './_common.mapping'

export interface IndexTemplateMapping {
  aliases?: Record<string, Indices_Common.Alias>;
  lifecycle?: Indices_Common.DataStreamLifecycle;
  mappings?: Common_Mapping.TypeMapping;
  settings?: Indices_Common.IndexSettings;
}

