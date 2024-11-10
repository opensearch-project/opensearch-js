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

import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'
import * as CommonIndexName from './_common___IndexName'
import * as CommonNodeId from './_common___NodeId'
import * as CommonVersionString from './_common___VersionString'

export type undefined = {
  committed?: string;
  compound?: string;
  'docs.count'?: string;
  'docs.deleted'?: string;
  generation?: string;
  id?: CommonNodeId.undefined;
  index?: CommonIndexName.undefined;
  ip?: string;
  prirep?: string;
  searchable?: string;
  segment?: string;
  shard?: string;
  size?: CommonHumanReadableByteCount.undefined;
  'size.memory'?: string;
  version?: CommonVersionString.undefined;
}

