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

import * as CommonIndexName from './_common___IndexName'
import * as CommonRouting from './_common___Routing'
import * as Core_SearchContext from './_core.search___Context'

export type undefined = {
  _id?: string;
  _index?: CommonIndexName.undefined;
  _routing?: CommonRouting.undefined;
  _score?: number;
  _source?: Record<string, any>;
  collate_match?: boolean;
  contexts?: Record<string, Core_SearchContext.undefined[]>;
  fields?: Record<string, Record<string, any>>;
  score?: number;
  text: string;
}

