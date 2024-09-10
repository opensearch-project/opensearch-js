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

export interface Weights extends WeightsBase {
  weights?: Record<string, any>;
}

export interface WeightsBase {
  _version?: Common.VersionNumber;
}

export interface WeightsResponse extends Weights {
  discovered_cluster_manager?: boolean;
}

