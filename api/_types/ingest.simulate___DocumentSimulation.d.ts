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

import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonStringifiedVersionNumber from './_common___StringifiedVersionNumber'
import * as CommonVersionType from './_common___VersionType'
import * as Ingest_SimulateIngest from './ingest.simulate___Ingest'

export type undefined = {
  _id: CommonId.undefined;
  _index: CommonIndexName.undefined;
  _ingest: Ingest_SimulateIngest.undefined;
  _routing?: string;
  _source: Record<string, Record<string, any>>;
  _version?: CommonStringifiedVersionNumber.undefined;
  _version_type?: CommonVersionType.undefined;
}

