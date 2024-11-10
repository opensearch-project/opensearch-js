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

import * as Security_CommonIndexPermission from './security._common___IndexPermission'
import * as Security_CommonTenantPermission from './security._common___TenantPermission'

export type undefined = {
  cluster_permissions?: string[];
  description?: string;
  hidden?: boolean;
  index_permissions?: Security_CommonIndexPermission.undefined[];
  reserved?: boolean;
  static?: boolean;
  tenant_permissions?: Security_CommonTenantPermission.undefined[];
}

