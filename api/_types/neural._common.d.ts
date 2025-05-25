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


export type FlatNeuralInfoStats = {
  cluster_version?: InfoStringStat;
  'processors.ingest.text_embedding_processors_in_pipelines'?: InfoCounterStat;
}

export type FlatNeuralNodeStats = {
  'processors.ingest.text_embedding_executions'?: TimestampedEventCounterStat;
}

export type FlatNeuralStats = {
  _nodes?: NodesInfo;
  all_nodes?: FlatNeuralNodeStats;
  cluster_name?: string;
  info?: FlatNeuralInfoStats;
  nodes?: Record<string, FlatNeuralNodeStats>;
}

export type InfoCounterStat = number | (StatMetadata & {
  stat_type?: 'info_counter';
})

export type InfoStringStat = string | (StatMetadata & {
  stat_type?: 'info_string';
})

export type NestedNeuralInfoStats = {
  cluster_version?: InfoStringStat;
  processors?: NestedNeuralInfoStatsProcessors;
}

export type NestedNeuralInfoStatsProcessors = {
  ingest?: NestedNeuralInfoStatsProcessorsIngest;
}

export type NestedNeuralInfoStatsProcessorsIngest = {
  text_embedding_processors_in_pipelines?: InfoCounterStat;
}

export type NestedNeuralNodeStats = {
  processors?: NestedNeuralNodeStatsProcessors;
}

export type NestedNeuralNodeStatsProcessors = {
  ingest?: NestedNeuralNodeStatsProcessorsIngest;
}

export type NestedNeuralNodeStatsProcessorsIngest = {
  text_embedding_executions?: TimestampedEventCounterStat;
}

export type NestedNeuralStats = {
  _nodes?: NodesInfo;
  all_nodes?: NestedNeuralNodeStats;
  cluster_name?: string;
  info?: NestedNeuralInfoStats;
  nodes?: Record<string, NestedNeuralNodeStats>;
}

export type NeuralStats = NestedNeuralStats | FlatNeuralStats

export type NodesInfo = {
  failed?: number;
  successful?: number;
  total?: number;
}

export type StatMetadata = {
  stat_type: 'info_counter' | 'info_string' | 'timestamped_event_counter';
  value: number | string;
}

export type TimestampedEventCounterStat = number | (StatMetadata & {
  minutes_since_last_event?: number;
  stat_type?: 'timestamped_event_counter';
  trailing_interval_value?: number;
})

