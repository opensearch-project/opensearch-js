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
import * as CommonNodeName from './_common___NodeName'

export type undefined = {
  allow_primary: boolean;
  from_node?: CommonNodeName.undefined;
  index: CommonIndexName.undefined;
  node: CommonNodeName.undefined;
  shard: number;
  to_node?: CommonNodeName.undefined;
}

