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

import * as CommonHost from './_common___Host'
import * as CommonIp from './_common___Ip'
import * as CommonName from './_common___Name'
import * as CommonNodeRoles from './_common___NodeRoles'
import * as CommonTransportAddress from './_common___TransportAddress'

export type undefined = {
  attributes?: Record<string, string>;
  host?: CommonHost.undefined;
  ip?: CommonIp.undefined;
  name: CommonName.undefined;
  roles?: CommonNodeRoles.undefined;
  transport_address?: CommonTransportAddress.undefined;
}

