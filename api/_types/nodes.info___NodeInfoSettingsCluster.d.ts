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
import * as Indices_CommonIndexRouting from './indices._common___IndexRouting'
import * as Nodes_InfoDeprecationIndexing from './nodes.info___DeprecationIndexing'
import * as Nodes_InfoNodeInfoSettingsClusterElection from './nodes.info___NodeInfoSettingsClusterElection'

export type undefined = {
  deprecation_indexing?: Nodes_InfoDeprecationIndexing.undefined;
  election?: Nodes_InfoNodeInfoSettingsClusterElection.undefined;
  initial_cluster_manager_nodes?: string;
  initial_master_nodes?: string;
  name: CommonName.undefined;
  routing?: Indices_CommonIndexRouting.undefined;
}

