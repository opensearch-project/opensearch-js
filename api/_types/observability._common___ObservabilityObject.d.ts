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

import * as Observability_CommonOperationalPanel from './observability._common___OperationalPanel'
import * as Observability_CommonSavedQuery from './observability._common___SavedQuery'
import * as Observability_CommonSavedVisualization from './observability._common___SavedVisualization'

export type undefined = {
  createdTimeMs?: number;
  lastUpdatedTimeMs?: number;
  objectId: string;
  operationalPanel?: Observability_CommonOperationalPanel.undefined;
  savedQuery?: Observability_CommonSavedQuery.undefined;
  savedVisualization?: Observability_CommonSavedVisualization.undefined;
  tenant: string;
}

