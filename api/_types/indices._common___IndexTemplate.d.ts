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

import * as CommonMetadata from './_common___Metadata'
import * as CommonName from './_common___Name'
import * as CommonNames from './_common___Names'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as Indices_CommonIndexTemplateDataStreamConfiguration from './indices._common___IndexTemplateDataStreamConfiguration'
import * as Indices_CommonIndexTemplateSummary from './indices._common___IndexTemplateSummary'

export type undefined = {
  _meta?: CommonMetadata.undefined;
  allow_auto_create?: boolean;
  composed_of?: CommonName.undefined[];
  data_stream?: Indices_CommonIndexTemplateDataStreamConfiguration.undefined;
  index_patterns: CommonNames.undefined;
  priority?: number;
  template?: Indices_CommonIndexTemplateSummary.undefined;
  version?: CommonVersionNumber.undefined;
}

