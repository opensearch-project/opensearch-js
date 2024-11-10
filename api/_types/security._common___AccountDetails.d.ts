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

import * as Security_CommonUserTenants from './security._common___UserTenants'

export type undefined = {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  is_hidden?: boolean;
  is_internal_user?: boolean;
  is_reserved?: boolean;
  roles?: string[];
  tenants?: Security_CommonUserTenants.undefined;
  user_name?: string;
  user_requested_tenant?: undefined | string;
}

