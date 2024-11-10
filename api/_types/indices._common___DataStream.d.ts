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

import * as CommonDataStreamName from './_common___DataStreamName'
import * as CommonHealthStatusCapitalized from './_common___HealthStatusCapitalized'
import * as CommonMetadata from './_common___Metadata'
import * as CommonName from './_common___Name'
import * as Indices_CommonDataStreamIndex from './indices._common___DataStreamIndex'
import * as Indices_CommonDataStreamTimestampField from './indices._common___DataStreamTimestampField'
import * as Indices_CommonManagedBy from './indices._common___ManagedBy'

export type undefined = {
  _meta?: CommonMetadata.undefined;
  allow_custom_routing?: boolean;
  generation: number;
  hidden?: boolean;
  ilm_policy?: CommonName.undefined;
  indices: Indices_CommonDataStreamIndex.undefined[];
  name: CommonDataStreamName.undefined;
  next_generation_managed_by?: Indices_CommonManagedBy.undefined;
  prefer_ilm?: boolean;
  replicated?: boolean;
  status: CommonHealthStatusCapitalized.undefined;
  system?: boolean;
  template: CommonName.undefined;
  timestamp_field: Indices_CommonDataStreamTimestampField.undefined;
}

