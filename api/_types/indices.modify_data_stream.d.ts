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

import * as Common from './_common'

export type Action = {
  add_backing_index?: AddBackingIndexAction;
  remove_backing_index?: RemoveBackingIndexAction;
}

export type AddBackingIndexAction = {
  data_stream: Common.DataStreamName;
  index: Common.IndexName;
}

export type RemoveBackingIndexAction = {
  data_stream: Common.DataStreamName;
  index: Common.IndexName;
}

