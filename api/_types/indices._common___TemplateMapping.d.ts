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
import * as CommonName from './_common___Name'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as Indices_CommonAlias from './indices._common___Alias'

export type undefined = {
  aliases: Record<string, Indices_CommonAlias.undefined>;
  index_patterns: CommonName.undefined[];
  mappings: Common_MappingTypeMapping.undefined;
  order: number;
  settings: Record<string, Record<string, any>>;
  version?: CommonVersionNumber.undefined;
}

