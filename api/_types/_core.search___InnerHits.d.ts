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

import * as Common_QueryDslFieldAndFormat from './_common.query_dsl___FieldAndFormat'
import * as CommonFields from './_common___Fields'
import * as CommonName from './_common___Name'
import * as CommonScriptField from './_common___ScriptField'
import * as CommonSort from './_common___Sort'
import * as Core_SearchFieldCollapse from './_core.search___FieldCollapse'
import * as Core_SearchHighlight from './_core.search___Highlight'
import * as Core_SearchSourceConfig from './_core.search___SourceConfig'

export type undefined = {
  _source?: Core_SearchSourceConfig.undefined;
  collapse?: Core_SearchFieldCollapse.undefined;
  docvalue_fields?: Common_QueryDslFieldAndFormat.undefined[];
  explain?: boolean;
  fields?: CommonFields.undefined;
  from?: number;
  highlight?: Core_SearchHighlight.undefined;
  ignore_unmapped?: boolean;
  name?: CommonName.undefined;
  script_fields?: Record<string, CommonScriptField.undefined>;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: CommonSort.undefined;
  stored_field?: CommonFields.undefined;
  track_scores?: boolean;
  version?: boolean;
}

