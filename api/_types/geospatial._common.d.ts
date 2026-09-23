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

export type Database = {
  fields?: string[];
  provider?: string;
  sha256_hash?: string;
  updated_at_in_epoch_millis?: Common.EpochTimeUnitMillis;
  valid_for_in_days?: number;
}

export type DataSource = {
  database: Database;
  endpoint: string;
  name: Common.Name;
  next_update_at_in_epoch_millis: Common.EpochTimeUnitMillis;
  state: DataSourceState;
  update_interval_in_days: number;
  update_stats: UpdateStats;
}

export type DataSourceState = 'AVAILABLE' | 'CREATE_FAILED' | 'CREATING' | 'DELETING'

export type Envelope = PointCoordinates[]

export type GeoJSONData = {
  geometry: Geometry;
  properties?: Record<string, any>;
  type: GeoJSONDataType;
}

export type GeoJSONDataType = 'Feature' | 'FeatureCollection'

export type GeoJSONRequest = {
  data: GeoJSONData[];
  field?: string;
  index: Common.IndexName;
  type: GeospatialFieldType;
}

export type Geometry = GeoShapes | GeometryCollection

export type GeometryCollection = {
  geometries: Geometry[];
  type: 'GeometryCollection';
}

export type GeoShapes = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | Envelope

export type GeospatialFieldType = 'geo_point' | 'geo_shape'

export type GeoSpatialGeojsonUploadResponse = {
  errors: boolean;
  failure: number;
  success: number;
  took: Common.DurationValueUnitMillis;
  total: number;
}

export type GeoSpatialUploadStats = {
  metrics: UploadStatsMetric[];
  total: UploadStatsTotal;
}

export type GetDataSourceResponse = {
  datasources: DataSource[];
}

export type LineString = {
  coordinates: LineStringCoordinates;
  type: 'LineString';
}

export type LineStringCoordinates = PointCoordinates[]

export type MultiLineString = {
  coordinates: MultiLineStringCoordinates;
  type: 'MultiLineString';
}

export type MultiLineStringCoordinates = LineStringCoordinates[]

export type MultiPoint = {
  coordinates: MultiPointCoordinates;
  type: 'MultiPoint';
}

export type MultiPointCoordinates = PointCoordinates[]

export type MultiPolygon = {
  coordinates: MultiPolygonCoordinates;
  type: 'MultiPolygon';
}

export type MultiPolygonCoordinates = PolygonCoordinates[]

export type Point = {
  coordinates: PointCoordinates;
  type: 'Point';
}

export type PointCoordinates = number[]

export type Polygon = {
  coordinates: PolygonCoordinates;
  type: 'Polygon';
}

export type PolygonCoordinates = PointCoordinates[][]

export type PutIP2GeoDataSourceRequest = {
  endpoint?: string;
  update_interval_in_days?: number;
}

export type UpdateStats = {
  last_processing_time_in_millis?: Common.EpochTimeUnitMillis;
  last_succeeded_at_in_epoch_millis?: Common.EpochTimeUnitMillis;
}

export type UploadStatsMetric = {
  duration: Common.DurationValueUnitMillis;
  failed: number;
  id: Common.Id;
  node_id: Common.NodeId;
  success: number;
  type: string;
  upload: number;
}

export type UploadStatsTotal = {
  duration: Common.DurationValueUnitMillis;
  failed: number;
  request_count: number;
  success: number;
  upload: number;
}

