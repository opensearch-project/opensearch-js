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

import * as CommonErrorCause from './_common___ErrorCause'
import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as Core_TermvectorsTermVector from './_core.termvectors___TermVector'

export type undefined = {
  _id: CommonId.undefined;
  _index: CommonIndexName.undefined;
  _version?: CommonVersionNumber.undefined;
  error?: CommonErrorCause.undefined;
  found?: boolean;
  term_vectors?: Record<string, Core_TermvectorsTermVector.undefined>;
  took?: number;
}

