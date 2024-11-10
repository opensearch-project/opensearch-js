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

import * as Core_SearchHighlightBase from './_core.search___HighlightBase'
import * as Core_SearchHighlighterEncoder from './_core.search___HighlighterEncoder'
import * as Core_SearchHighlightField from './_core.search___HighlightField'

export type undefined = Core_SearchHighlightBase.undefined & {
  encoder?: Core_SearchHighlighterEncoder.undefined;
  fields: Record<string, Core_SearchHighlightField.undefined>;
}

