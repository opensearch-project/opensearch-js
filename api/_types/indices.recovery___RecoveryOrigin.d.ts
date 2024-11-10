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
import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonIp from './_common___Ip'
import * as CommonName from './_common___Name'
import * as CommonTransportAddress from './_common___TransportAddress'
import * as CommonUuid from './_common___Uuid'
import * as CommonVersionString from './_common___VersionString'

export type undefined = {
  bootstrap_new_history_uuid?: boolean;
  host?: CommonHost.undefined;
  hostname?: string;
  id?: CommonId.undefined;
  index?: CommonIndexName.undefined;
  ip?: CommonIp.undefined;
  isSearchableSnapshot?: boolean;
  name?: CommonName.undefined;
  remoteStoreIndexShallowCopy?: boolean;
  repository?: CommonName.undefined;
  restoreUUID?: CommonUuid.undefined;
  snapshot?: CommonName.undefined;
  sourceRemoteStoreRepository?: undefined | string;
  sourceRemoteTranslogRepository?: undefined | string;
  transport_address?: CommonTransportAddress.undefined;
  version?: CommonVersionString.undefined;
}

