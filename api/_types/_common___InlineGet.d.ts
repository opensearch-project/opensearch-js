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

import * as CommonRouting from './_common___Routing'
import * as CommonSequenceNumber from './_common___SequenceNumber'

export type undefined = {
  _primary_term?: number;
  _routing?: CommonRouting.undefined;
  _seq_no?: CommonSequenceNumber.undefined;
  _source?: Record<string, any>;
  fields?: Record<string, Record<string, any>>;
  found: boolean;
}

