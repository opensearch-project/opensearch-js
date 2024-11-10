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
import * as CommonName from './_common___Name'
import * as CommonUuid from './_common___Uuid'
import * as Indices_CommonManagedBy from './indices._common___ManagedBy'

export type undefined = {
  ilm_policy?: CommonName.undefined;
  index_name: CommonIndexName.undefined;
  index_uuid: CommonUuid.undefined;
  managed_by?: Indices_CommonManagedBy.undefined;
  prefer_ilm?: boolean;
}

