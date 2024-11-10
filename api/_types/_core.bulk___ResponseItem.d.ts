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

import * as CommonErrorCause from './_common___ErrorCause'
import * as CommonInlineGetDictUserDefined from './_common___InlineGetDictUserDefined'
import * as CommonSequenceNumber from './_common___SequenceNumber'
import * as CommonShardStatistics from './_common___ShardStatistics'
import * as CommonVersionNumber from './_common___VersionNumber'

export type undefined = {
  _id?: undefined | string;
  _index: string;
  _primary_term?: number;
  _seq_no?: CommonSequenceNumber.undefined;
  _shards?: CommonShardStatistics.undefined;
  _type?: string;
  _version?: CommonVersionNumber.undefined;
  error?: CommonErrorCause.undefined;
  forced_refresh?: boolean;
  get?: CommonInlineGetDictUserDefined.undefined;
  result?: string;
  status: number;
}

