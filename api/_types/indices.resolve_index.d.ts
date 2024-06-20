/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Common from './_common'

export interface ResolveIndexAliasItem {
  indices: Common.Indices;
  name: Common.Name;
}

export interface ResolveIndexDataStreamsItem {
  backing_indices: Common.Indices;
  name: Common.DataStreamName;
  timestamp_field: Common.Field;
}

export interface ResolveIndexItem {
  aliases?: string[];
  attributes: string[];
  data_stream?: Common.DataStreamName;
  name: Common.Name;
}

