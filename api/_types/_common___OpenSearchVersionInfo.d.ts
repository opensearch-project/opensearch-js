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

import * as CommonDateTime from './_common___DateTime'
import * as CommonVersionString from './_common___VersionString'

export type undefined = {
  build_date: CommonDateTime.undefined;
  build_flavor?: string;
  build_hash: string;
  build_snapshot: boolean;
  build_type: string;
  distribution: string;
  lucene_version: CommonVersionString.undefined;
  minimum_index_compatibility_version: CommonVersionString.undefined;
  minimum_wire_compatibility_version: CommonVersionString.undefined;
  number: string;
}

