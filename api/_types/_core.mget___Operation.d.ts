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

import * as CommonFields from './_common___Fields'
import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonRouting from './_common___Routing'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as CommonVersionType from './_common___VersionType'
import * as Core_SearchSourceConfig from './_core.search___SourceConfig'

export type undefined = {
  _id: CommonId.undefined;
  _index?: CommonIndexName.undefined;
  _source?: Core_SearchSourceConfig.undefined;
  routing?: CommonRouting.undefined;
  stored_fields?: CommonFields.undefined;
  version?: CommonVersionNumber.undefined;
  version_type?: CommonVersionType.undefined;
}

