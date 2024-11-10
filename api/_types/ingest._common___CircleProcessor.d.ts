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

import * as CommonField from './_common___Field'
import * as Ingest_CommonProcessorBase from './ingest._common___ProcessorBase'
import * as Ingest_CommonShapeType from './ingest._common___ShapeType'

export type undefined = Ingest_CommonProcessorBase.undefined & {
  error_distance: number;
  field: CommonField.undefined;
  ignore_missing?: boolean;
  shape_type: Ingest_CommonShapeType.undefined;
  target_field?: CommonField.undefined;
}

