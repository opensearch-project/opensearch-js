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

import * as CommonEpochTimeUnitMillis from './_common___EpochTimeUnitMillis'
import * as CommonName from './_common___Name'
import * as CommonVersionString from './_common___VersionString'
import * as Nodes_InfoNodeInfoJvmMemory from './nodes.info___NodeInfoJvmMemory'

export type undefined = {
  bundled_jdk: boolean;
  gc_collectors?: string[];
  input_arguments?: string[];
  mem: Nodes_InfoNodeInfoJvmMemory.undefined;
  memory_pools?: string[];
  pid: number;
  start_time_in_millis: CommonEpochTimeUnitMillis.undefined;
  using_bundled_jdk?: boolean | undefined;
  using_compressed_ordinary_object_pointers?: boolean | string;
  version?: CommonVersionString.undefined;
  vm_name?: CommonName.undefined;
  vm_vendor?: string;
  vm_version?: CommonVersionString.undefined;
}

