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


export type Continuous = {
  failure_reason?: string;
  next_window_end_time?: number;
  next_window_start_time?: number;
  stats?: Stats;
  status?: string;
}

export type Cron = {
  expression?: string;
  timezone?: string;
}

export type DateHistogramDimension = {
  calendar_interval?: string;
  fixed_interval?: string;
  source_field?: string;
  target_field?: string;
  timezone?: string;
}

export type DimensionsConfigItem = {
  date_histogram?: DateHistogramDimension;
  histogram?: HistogramDimension;
  terms?: TermsDimension;
}

export type Explain = {
  continuous?: Continuous;
  last_updated_time?: number;
  rollup_id?: string;
}

export type ExplainEntities = {
  item?: Explain;
}

export type HistogramDimension = {
  interval?: string;
  source_field?: string;
  target_field?: string;
}

export type Interval = {
  cron?: Cron[] | Cron;
  period?: number;
  schedule_delay?: number;
  start_time?: number;
  unit?: string;
}

export type MetricsConfigItem = {
  metrics?: MetricsConfigMetrics[];
  source_field?: string;
  target_field?: string;
}

export type MetricsConfigMetrics = {
  avg?: Record<string, any>;
  max?: Record<string, any>;
  min?: Record<string, any>;
  sum?: Record<string, any>;
  value_count?: Record<string, any>;
}

export type Rollup = {
  continuous?: boolean;
  delay?: number;
  description?: string;
  dimensions?: DimensionsConfigItem[];
  enabled?: boolean;
  enabled_time?: number;
  error_notification?: string;
  last_updated_time?: number;
  metadata_id?: string;
  metrics?: MetricsConfigItem[];
  page_size?: number;
  rollup_id?: string;
  schedule?: Schedule;
  schema_version?: number;
  source_index?: string;
  target_index?: string;
}

export type RollupEntity = {
  _id?: string;
  _primaryTerm?: number;
  _seqNo?: number;
  rollup?: Rollup;
}

export type Schedule = {
  interval?: Interval;
}

export type Stats = {
  documents_processed?: number;
  index_time_in_ms?: number;
  pages_processed?: number;
  rollups_indexed?: number;
  search_time_in_ms?: number;
}

export type TermsDimension = {
  source_field?: string;
  target_field?: string;
}

