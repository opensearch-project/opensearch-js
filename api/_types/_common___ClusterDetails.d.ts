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

import * as CommonClusterSearchStatus from './_common___ClusterSearchStatus'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonShardFailure from './_common___ShardFailure'
import * as CommonShardStatistics from './_common___ShardStatistics'

export type undefined = {
  _shards?: CommonShardStatistics.undefined;
  failures?: CommonShardFailure.undefined[];
  indices: string;
  status: CommonClusterSearchStatus.undefined;
  timed_out: boolean;
  took?: CommonDurationValueUnitMillis.undefined;
}

