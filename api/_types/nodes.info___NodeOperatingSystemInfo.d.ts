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

import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonName from './_common___Name'
import * as CommonVersionString from './_common___VersionString'
import * as Nodes_InfoNodeInfoMemory from './nodes.info___NodeInfoMemory'
import * as Nodes_InfoNodeInfoOscpu from './nodes.info___NodeInfoOSCPU'

export type undefined = {
  allocated_processors?: number;
  arch?: string;
  available_processors: number;
  cpu?: Nodes_InfoNodeInfoOscpu.undefined;
  mem?: Nodes_InfoNodeInfoMemory.undefined;
  name?: CommonName.undefined;
  pretty_name?: CommonName.undefined;
  refresh_interval_in_millis: CommonDurationValueUnitMillis.undefined;
  swap?: Nodes_InfoNodeInfoMemory.undefined;
  version?: CommonVersionString.undefined;
}

