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

export type ObservabilityObject = {
  access?: string[];
  createdTimeMs?: number;
  lastUpdatedTimeMs?: number;
  objectId: string;
  operationalPanel?: OperationalPanel;
  savedQuery?: SavedQuery;
  savedVisualization?: SavedVisualization;
  tenant?: string;
}

export type ObservabilityObjectList = {
  observabilityObjectList: ObservabilityObject[];
  startIndex: number;
  totalHitRelation: Common.TotalHitsRelation;
  totalHits: number;
}

export type OperationalPanel = {
  applicationId: string;
  name: string;
  queryFilter: QueryFilter;
  timeRange: TimeRange;
  visualizations: Visualization[];
}

export type QueryFilter = {
  language: string;
  query: string;
}

export type SavedQuery = {
  description: string;
  name: string;
  query: string;
  selected_date_range: SelectedDateRange;
  selected_fields: SelectedFields;
  selected_timestamp: SelectedTimestamp;
}

export type SavedVisualization = {
  application_id?: string;
  description: string;
  metric_type?: string;
  name: string;
  query: string;
  selected_date_range: SelectedDateRange;
  selected_fields: SelectedFields;
  selected_labels?: SelectedFields;
  selected_timestamp: SelectedTimestamp;
  sub_type?: string;
  type: string;
  units_of_measure?: string;
  user_configs?: string;
}

export type SelectedDateRange = {
  end: string;
  start: string;
  text: string;
}

export type SelectedFields = {
  text: string;
  tokens: Token[];
}

export type SelectedTimestamp = {
  name: string;
  type: string;
}

export type TimeRange = {
  from: string;
  to: string;
}

export type Token = {
  name: string;
  type: string;
}

export type Visualization = {
  h: number;
  id: string;
  savedVisualizationId: string;
  w: number;
  x: number;
  y: number;
}

