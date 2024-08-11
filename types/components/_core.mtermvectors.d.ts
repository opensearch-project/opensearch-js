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

import * as Common from './_common'
import * as Core_Termvectors from './_core.termvectors'

export interface Operation {
  _id: Common.Id;
  _index?: Common.IndexName;
  doc?: Record<string, any>;
  field_statistics?: boolean;
  fields?: Common.Fields;
  filter?: Core_Termvectors.Filter;
  offsets?: boolean;
  payloads?: boolean;
  positions?: boolean;
  routing?: Common.Routing;
  term_statistics?: boolean;
  version?: Common.VersionNumber;
  version_type?: Common.VersionType;
}

export interface TermVectorsResult {
  _id: Common.Id;
  _index: Common.IndexName;
  _version?: Common.VersionNumber;
  error?: Common.ErrorCause;
  found?: boolean;
  term_vectors?: Record<string, Core_Termvectors.TermVector>;
  took?: number;
}

