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

import * as Cluster_AllocationExplainUnassignedInformationReason from './cluster.allocation_explain___UnassignedInformationReason'
import * as CommonDateTime from './_common___DateTime'

export type undefined = {
  allocation_status?: string;
  at: CommonDateTime.undefined;
  delayed?: boolean;
  details?: string;
  failed_allocation_attempts?: number;
  last_allocation_status?: string;
  reason: Cluster_AllocationExplainUnassignedInformationReason.undefined;
}

