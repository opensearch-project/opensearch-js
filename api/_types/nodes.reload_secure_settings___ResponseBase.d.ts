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

import * as CommonName from './_common___Name'
import * as Nodes_CommonNodeReloadResult from './nodes._common___NodeReloadResult'
import * as Nodes_CommonNodesResponseBase from './nodes._common___NodesResponseBase'

export type undefined = Nodes_CommonNodesResponseBase.undefined & {
  cluster_name: CommonName.undefined;
  nodes: Record<string, Nodes_CommonNodeReloadResult.undefined>;
}

