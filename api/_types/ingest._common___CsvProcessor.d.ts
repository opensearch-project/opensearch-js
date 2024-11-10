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
import * as CommonFields from './_common___Fields'
import * as Ingest_CommonProcessorBase from './ingest._common___ProcessorBase'

export type undefined = Ingest_CommonProcessorBase.undefined & {
  empty_value?: Record<string, any>;
  field: CommonField.undefined;
  ignore_missing?: boolean;
  quote?: string;
  separator?: string;
  target_fields: CommonFields.undefined;
  trim?: boolean;
}

