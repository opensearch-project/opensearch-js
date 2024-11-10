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

import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonResult from './_common___Result'
import * as CommonSequenceNumber from './_common___SequenceNumber'
import * as CommonShardStatistics from './_common___ShardStatistics'
import * as CommonType from './_common___Type'
import * as CommonVersionNumber from './_common___VersionNumber'

export type undefined = {
  _id: CommonId.undefined;
  _index: CommonIndexName.undefined;
  _primary_term: number;
  _seq_no: CommonSequenceNumber.undefined;
  _shards: CommonShardStatistics.undefined;
  _type?: CommonType.undefined;
  _version: CommonVersionNumber.undefined;
  forced_refresh?: boolean;
  result: CommonResult.undefined;
}

