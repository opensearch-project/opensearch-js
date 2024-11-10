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

import * as Common_MappingTypeMapping from './_common.mapping___TypeMapping'
import * as CommonDataStreamName from './_common___DataStreamName'
import * as Indices_CommonAlias from './indices._common___Alias'
import * as Indices_CommonIndexSettings from './indices._common___IndexSettings'

export type undefined = {
  aliases?: Record<string, Indices_CommonAlias.undefined>;
  data_stream?: CommonDataStreamName.undefined;
  defaults?: Indices_CommonIndexSettings.undefined;
  mappings?: Common_MappingTypeMapping.undefined;
  settings?: Indices_CommonIndexSettings.undefined;
}

