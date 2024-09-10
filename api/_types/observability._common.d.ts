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


export interface ErrorResponse {
  reason: string;
  root_cause: RootCause[];
  type: string;
}

export interface NotFoundResponse {
  error: ErrorResponse;
  status: number;
}

export interface ObservabilityObject {
  createdTimeMs?: number;
  lastUpdatedTimeMs?: number;
  objectId: string;
  operationalPanel?: OperationalPanel;
  savedQuery?: SavedQuery;
  savedVisualization?: SavedVisualization;
  tenant: string;
}

export interface ObservabilityObjectList {
  observabilityObjectList: ObservabilityObject[];
  startIndex: number;
  totalHitRelation: string;
  totalHits: number;
}

export interface OperationalPanel {
  applicationId: string;
  name: string;
  queryFilter: QueryFilter;
  timeRange: TimeRange;
  visualizations: Visualization[];
}

export interface QueryFilter {
  language: string;
  query: string;
}

export interface RootCause {
  reason: string;
  type: string;
}

export interface SavedQuery {
  description: string;
  name: string;
  query: string;
  selected_date_range: SelectedDateRange;
  selected_fields: SelectedFields;
  selected_timestamp: SelectedTimestamp;
}

export interface SavedVisualization {
  description: string;
  name: string;
  query: string;
  selected_date_range: SelectedDateRange;
  selected_fields: SelectedFields;
  selected_timestamp: SelectedTimestamp;
  type: string;
}

export interface SelectedDateRange {
  end: string;
  start: string;
  text: string;
}

export interface SelectedFields {
  text: string;
  tokens: Token[];
}

export interface SelectedTimestamp {
  name: string;
  type: string;
}

export interface TimeRange {
  from: string;
  to: string;
}

export interface Token {
  name: string;
  type: string;
}

export interface Visualization {
  h: number;
  id: string;
  savedVisualizationId: string;
  w: number;
  x: number;
  y: number;
}

