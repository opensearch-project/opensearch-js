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

import * as Cluster_AllocationExplainAllocationDecision from './cluster.allocation_explain___AllocationDecision'
import * as Cluster_AllocationExplainAllocationStore from './cluster.allocation_explain___AllocationStore'
import * as Cluster_AllocationExplainDecision from './cluster.allocation_explain___Decision'
import * as CommonId from './_common___Id'
import * as CommonName from './_common___Name'
import * as CommonTransportAddress from './_common___TransportAddress'

export type undefined = {
  deciders: Cluster_AllocationExplainAllocationDecision.undefined[];
  node_attributes: Record<string, string>;
  node_decision: Cluster_AllocationExplainDecision.undefined;
  node_id: CommonId.undefined;
  node_name: CommonName.undefined;
  store?: Cluster_AllocationExplainAllocationStore.undefined;
  transport_address: CommonTransportAddress.undefined;
  weight_ranking?: number;
}

