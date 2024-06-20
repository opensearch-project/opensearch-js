/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */


export interface Continuous {
  failure_reason?: string;
  next_window_end_time?: number;
  next_window_start_time?: number;
  stats?: Stats;
  status?: string;
}

export interface Cron {
  expression?: string;
  timezone?: string;
}

export interface DateHistogramDimension {
  calendar_interval?: string;
  fixed_interval?: string;
  source_field?: string;
  target_field?: string;
  timezone?: string;
}

export interface DimensionsConfigItem {
  date_histogram?: DateHistogramDimension;
  histogram?: HistogramDimension;
  terms?: TermsDimension;
}

export interface Explain {
  continuous?: Continuous;
  last_updated_time?: number;
  rollup_id?: string;
}

export interface ExplainEntities {
  item?: Explain;
}

export interface HistogramDimension {
  interval?: string;
  source_field?: string;
  target_field?: string;
}

export interface Interval {
  cron?: Cron[] | Cron;
  period?: number;
  schedule_delay?: number;
  start_time?: number;
  unit?: string;
}

export interface MetricsConfigItem {
  metrics?: MetricsConfigMetrics[];
  source_field?: string;
  target_field?: string;
}

export interface MetricsConfigMetrics {
  avg?: Record<string, any>;
  max?: Record<string, any>;
  min?: Record<string, any>;
  sum?: Record<string, any>;
  value_count?: Record<string, any>;
}

export interface Rollup {
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

export interface RollupEntity {
  _id?: string;
  _primaryTerm?: number;
  _seqNo?: number;
  rollup?: Rollup;
}

export interface Schedule {
  interval?: Interval;
}

export interface Stats {
  documents_processed?: number;
  index_time_in_ms?: number;
  pages_processed?: number;
  rollups_indexed?: number;
  search_time_in_ms?: number;
}

export interface TermsDimension {
  source_field?: string;
  target_field?: string;
}

