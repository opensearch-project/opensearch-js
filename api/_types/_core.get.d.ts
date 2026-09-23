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

export type GetResult = GetResultBase & {
  _source?: Common.TDocument;
}

export type GetResultBase = {
  _id: Common.Id;
  _index: Common.IndexName;
  _primary_term?: number;
  _routing?: string;
  _seq_no?: Common.SequenceNumber;
  _source?: Common.TDocument;
  _type?: Common.Type;
  _version?: Common.VersionNumber;
  fields?: Record<string, any>;
  found: boolean;
}

