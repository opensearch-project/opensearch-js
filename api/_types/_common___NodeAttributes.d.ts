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
import * as CommonNodeId from './_common___NodeId'
import * as CommonNodeName from './_common___NodeName'
import * as CommonNodeRoles from './_common___NodeRoles'
import * as CommonTransportAddress from './_common___TransportAddress'

export type undefined = {
  attributes: Record<string, string>;
  ephemeral_id: CommonId.undefined;
  external_id?: string;
  id?: CommonNodeId.undefined;
  name: CommonNodeName.undefined;
  roles?: CommonNodeRoles.undefined;
  transport_address: CommonTransportAddress.undefined;
}

