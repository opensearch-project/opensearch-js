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

import * as CommonScript from './_common___Script'
import * as Core_SearchSourceConfig from './_core.search___SourceConfig'

export type undefined = {
  _source?: Core_SearchSourceConfig.undefined;
  detect_noop?: boolean;
  doc?: Record<string, any>;
  doc_as_upsert?: boolean;
  script?: CommonScript.undefined;
  scripted_upsert?: boolean;
  upsert?: Record<string, any>;
}

