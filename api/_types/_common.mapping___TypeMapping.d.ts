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

import * as Common_MappingAllField from './_common.mapping___AllField'
import * as Common_MappingDataStreamTimestamp from './_common.mapping___DataStreamTimestamp'
import * as Common_MappingDynamicMapping from './_common.mapping___DynamicMapping'
import * as Common_MappingDynamicTemplate from './_common.mapping___DynamicTemplate'
import * as Common_MappingFieldNamesField from './_common.mapping___FieldNamesField'
import * as Common_MappingIndexField from './_common.mapping___IndexField'
import * as Common_MappingProperty from './_common.mapping___Property'
import * as Common_MappingRoutingField from './_common.mapping___RoutingField'
import * as Common_MappingSizeField from './_common.mapping___SizeField'
import * as Common_MappingSourceField from './_common.mapping___SourceField'
import * as CommonMetadata from './_common___Metadata'

export type undefined = {
  _data_stream_timestamp?: Common_MappingDataStreamTimestamp.undefined;
  _field_names?: Common_MappingFieldNamesField.undefined;
  _meta?: CommonMetadata.undefined;
  _routing?: Common_MappingRoutingField.undefined;
  _size?: Common_MappingSizeField.undefined;
  _source?: Common_MappingSourceField.undefined;
  all_field?: Common_MappingAllField.undefined;
  date_detection?: boolean;
  dynamic?: Common_MappingDynamicMapping.undefined;
  dynamic_date_formats?: string[];
  dynamic_templates?: Record<string, Common_MappingDynamicTemplate.undefined>[];
  enabled?: boolean;
  index_field?: Common_MappingIndexField.undefined;
  numeric_detection?: boolean;
  properties?: Record<string, Common_MappingProperty.undefined>;
}

