/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

'use strict';

/** @namespace API-Security */

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const {
  handleError,
  snakeCaseKeys,
  encodePathParam,
  normalizeArguments,
  kConfigurationError,
} = require('../utils');
const snakeCase = {};

function SecurityApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Changes the password for the current user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#change-password - Security - Change Password}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.changePassword = function securityChangePasswordApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'account'].filter((c) => c != null).join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or replaces the specified action group.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#create-action-group - Security - Create Action Group}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.action_group - The name of the action group to create or replace
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.createActionGroup = function securityCreateActionGroupApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.actionGroup == null && params.action_group == null) {
    const err = new this[kConfigurationError]('Missing required parameter: action_group');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, actionGroup, action_group, ...querystring } = params;

  action_group = encodePathParam(actionGroup, action_group);

  let path = ['', '_plugins', '_security', 'api', 'actiongroups', action_group]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or replaces the specified role.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#create-role - Security - Create Role}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.createRole = function securityCreateRoleApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'roles', role].filter((c) => c != null).join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or replaces the specified role mapping.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping - Security - Create Role Mapping}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.createRoleMapping = function securityCreateRoleMappingApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping', role]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or replaces the specified tenant.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#create-tenant - Security - Create Tenant}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.tenant
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.createTenant = function securityCreateTenantApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.tenant == null) {
    const err = new this[kConfigurationError]('Missing required parameter: tenant');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, tenant, ...querystring } = params;

  tenant = encodePathParam(tenant);

  let path = ['', '_plugins', '_security', 'api', 'tenants', tenant]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or replaces the specified user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#create-user - Security - Create User}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.username
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.createUser = function securityCreateUserApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.username == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, username, ...querystring } = params;

  username = encodePathParam(username);

  let path = ['', '_plugins', '_security', 'api', 'internalusers', username]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Delete a specified action group.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-action-group - Security - Delete Action Group}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.action_group - Action group to delete.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteActionGroup = function securityDeleteActionGroupApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.actionGroup == null && params.action_group == null) {
    const err = new this[kConfigurationError]('Missing required parameter: action_group');
    return handleError(err, callback);
  }

  let { method, body, actionGroup, action_group, ...querystring } = params;

  action_group = encodePathParam(actionGroup, action_group);

  let path = ['', '_plugins', '_security', 'api', 'actiongroups', action_group]
    .filter((c) => c != null)
    .join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Deletes all distinguished names in the specified cluster’s or node’s allow list.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-distinguished-names - Security - Delete Distinguished Names}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.cluster_name
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteDistinguishedNames = function securityDeleteDistinguishedNamesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.clusterName == null && params.cluster_name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: cluster_name');
    return handleError(err, callback);
  }

  let { method, body, clusterName, cluster_name, ...querystring } = params;

  cluster_name = encodePathParam(clusterName, cluster_name);

  let path = ['', '_plugins', '_security', 'api', 'nodesdn', cluster_name]
    .filter((c) => c != null)
    .join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Delete the specified role.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-role - Security - Delete Role}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteRole = function securityDeleteRoleApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'roles', role].filter((c) => c != null).join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Deletes the specified role mapping.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-role-mapping - Security - Delete Role Mapping}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteRoleMapping = function securityDeleteRoleMappingApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping', role]
    .filter((c) => c != null)
    .join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Delete the specified tenant.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-action-group - Security - Delete Tenant}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.tenant
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteTenant = function securityDeleteTenantApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.tenant == null) {
    const err = new this[kConfigurationError]('Missing required parameter: tenant');
    return handleError(err, callback);
  }

  let { method, body, tenant, ...querystring } = params;

  tenant = encodePathParam(tenant);

  let path = ['', '_plugins', '_security', 'api', 'tenants', tenant]
    .filter((c) => c != null)
    .join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Delete the specified user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-user - Security - Delete User}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.username
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.deleteUser = function securityDeleteUserApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.username == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username');
    return handleError(err, callback);
  }

  let { method, body, username, ...querystring } = params;

  username = encodePathParam(username);

  let path = ['', '_plugins', '_security', 'api', 'internalusers', username]
    .filter((c) => c != null)
    .join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Flushes the Security plugin user, authentication, and authorization cache.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#flush-cache - Security - Flush Cache}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.flushCache = function securityFlushCacheApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'cache'].filter((c) => c != null).join('/');
  method = method || 'DELETE';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Returns account details for the current user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-account-details - Security - Get Account Details}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getAccountDetails = function securityGetAccountDetailsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'account'].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves one action group.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-action-group - Security - Get Action Group}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.action_group - Action group to retrieve.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getActionGroup = function securityGetActionGroupApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.actionGroup == null && params.action_group == null) {
    const err = new this[kConfigurationError]('Missing required parameter: action_group');
    return handleError(err, callback);
  }

  let { method, body, actionGroup, action_group, ...querystring } = params;

  action_group = encodePathParam(actionGroup, action_group);

  let path = ['', '_plugins', '_security', 'api', 'actiongroups', action_group]
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves all action groups.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-action-groups - Security - Get Action Groups}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getActionGroups = function securityGetActionGroupsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'actiongroups']
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves the audit configuration.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#audit-logs - Security - Get Audit Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getAuditConfiguration = function securityGetAuditConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'audit'].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves the cluster’s security certificates.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-certificates - Security - Get Certificates}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getCertificates = function securityGetCertificatesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'ssl', 'certs']
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Returns the current Security plugin configuration in JSON format.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#get-configuration - Security - Get Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getConfiguration = function securityGetConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'securityconfig']
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves all distinguished names in the allow list.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-distinguished-names - Security - Get Distinguished Names}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} [params.cluster_name]
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getDistinguishedNames = function securityGetDistinguishedNamesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, clusterName, cluster_name, ...querystring } = params;

  cluster_name = encodePathParam(clusterName, cluster_name);

  let path = ['', '_plugins', '_security', 'api', 'nodesdn', cluster_name]
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves one role.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-role - Security - Get Role}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getRole = function securityGetRoleApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'roles', role].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves one role mapping.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-role-mapping - Security - Get Role Mapping}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getRoleMapping = function securityGetRoleMappingApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping', role]
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves all role mappings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-role-mappings - Security - Get Role Mappings}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getRoleMappings = function securityGetRoleMappingsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping']
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves all roles.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-roles - Security - Get Roles}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getRoles = function securityGetRolesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'roles'].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves one tenant.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#get-tenant - Security - Get Tenant}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.tenant
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getTenant = function securityGetTenantApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.tenant == null) {
    const err = new this[kConfigurationError]('Missing required parameter: tenant');
    return handleError(err, callback);
  }

  let { method, body, tenant, ...querystring } = params;

  tenant = encodePathParam(tenant);

  let path = ['', '_plugins', '_security', 'api', 'tenants', tenant]
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieves all tenants.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#get-tenants - Security - Get Tenants}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getTenants = function securityGetTenantsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'tenants'].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieve one internal user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-user - Security - Get User}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.username
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getUser = function securityGetUserApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.username == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username');
    return handleError(err, callback);
  }

  let { method, body, username, ...querystring } = params;

  username = encodePathParam(username);

  let path = ['', '_plugins', '_security', 'api', 'internalusers', username]
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Retrieve all internal users.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#get-users - Security - Get Users}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.getUsers = function securityGetUsersApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'internalusers']
    .filter((c) => c != null)
    .join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Checks to see if the Security plugin is up and running.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#health-check - Security - Health}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.health = function securityHealthApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'health'].filter((c) => c != null).join('/');
  method = method || 'GET';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Updates individual attributes of an action group.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-action-group - Security - Patch Action Group}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.action_group
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchActionGroup = function securityPatchActionGroupApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.actionGroup == null && params.action_group == null) {
    const err = new this[kConfigurationError]('Missing required parameter: action_group');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, actionGroup, action_group, ...querystring } = params;

  action_group = encodePathParam(actionGroup, action_group);

  let path = ['', '_plugins', '_security', 'api', 'actiongroups', action_group]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates, updates, or deletes multiple action groups in a single call.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-action-groups - Security - Patch Action Groups}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchActionGroups = function securityPatchActionGroupsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'actiongroups']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * A PATCH call is used to update specified fields in the audit configuration.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#audit-logs - Security - Patch Audit Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchAuditConfiguration = function securityPatchAuditConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'audit'].filter((c) => c != null).join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * A PATCH call is used to update the existing configuration using the REST API.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#patch-configuration - Security - Patch Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchConfiguration = function securityPatchConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'securityconfig']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Bulk update of distinguished names.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#update-all-distinguished-names - Security - Patch Distinguished Names}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchDistinguishedNames = function securityPatchDistinguishedNamesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'nodesdn'].filter((c) => c != null).join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Updates individual attributes of a role.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-role - Security - Patch Role}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchRole = function securityPatchRoleApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'roles', role].filter((c) => c != null).join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Updates individual attributes of a role mapping.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-role-mapping - Security - Patch Role Mapping}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.role
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchRoleMapping = function securityPatchRoleMappingApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.role == null) {
    const err = new this[kConfigurationError]('Missing required parameter: role');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, role, ...querystring } = params;

  role = encodePathParam(role);

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping', role]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates or updates multiple role mappings in a single call.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-role-mappings - Security - Patch Role Mappings}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchRoleMappings = function securityPatchRoleMappingsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'rolesmapping']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates, updates, or deletes multiple roles in a single call.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-roles - Security - Patch Roles}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchRoles = function securityPatchRolesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'roles'].filter((c) => c != null).join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Add, delete, or modify a single tenant.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#patch-tenant - Security - Patch Tenant}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.tenant
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchTenant = function securityPatchTenantApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.tenant == null) {
    const err = new this[kConfigurationError]('Missing required parameter: tenant');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, tenant, ...querystring } = params;

  tenant = encodePathParam(tenant);

  let path = ['', '_plugins', '_security', 'api', 'tenants', tenant]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Add, delete, or modify multiple tenants in a single call.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#patch-tenants - Security - Patch Tenants}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchTenants = function securityPatchTenantsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'tenants'].filter((c) => c != null).join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Updates individual attributes of an internal user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-user - Security - Patch User}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.username
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchUser = function securityPatchUserApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.username == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, username, ...querystring } = params;

  username = encodePathParam(username);

  let path = ['', '_plugins', '_security', 'api', 'internalusers', username]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Creates, updates, or deletes multiple internal users in a single call.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-users - Security - Patch Users}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.patchUsers = function securityPatchUsersApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'internalusers']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PATCH';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Reload HTTP layer communication certificates.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#reload-http-certificates - Security - Reload Http Certificates}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.reloadHttpCertificates = function securityReloadHttpCertificatesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'ssl', 'http', 'reloadcerts']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Reload transport layer communication certificates.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#reload-transport-certificates - Security - Reload Transport Certificates}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.reloadTransportCertificates = function securityReloadTransportCertificatesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'ssl', 'transport', 'reloadcerts']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Updates the audit configuration.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#audit-logs - Security - Update Audit Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.updateAuditConfiguration = function securityUpdateAuditConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'audit', 'config']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Adds or updates the existing configuration using the REST API.
 * <br/> See Also: {@link https://opensearch.org/docs/2.7/security/access-control/api/#update-configuration - Security - Update Configuration}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {Object} params.body
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.updateConfiguration = function securityUpdateConfigurationApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;

  let path = ['', '_plugins', '_security', 'api', 'securityconfig', 'config']
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

/**
 * Adds or updates the specified distinguished names in the cluster’s or node’s allow list.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#update-distinguished-names - Security - Update Distinguished Names}
 *
 * @memberOf API-Security
 *
 * @param {Object} params
 * @param {string} params.cluster_name
 * @param {Object} [params.body]
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SecurityApi.prototype.updateDistinguishedNames = function securityUpdateDistinguishedNamesApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.clusterName == null && params.cluster_name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: cluster_name');
    return handleError(err, callback);
  }

  let { method, body, clusterName, cluster_name, ...querystring } = params;

  cluster_name = encodePathParam(clusterName, cluster_name);

  let path = ['', '_plugins', '_security', 'api', 'nodesdn', cluster_name]
    .filter((c) => c != null)
    .join('/');
  method = method || 'PUT';
  body = body || '';
  querystring = snakeCaseKeys(null, snakeCase, querystring);

  return this.transport.request({ method, path, body, querystring }, options, callback);
};

Object.defineProperties(SecurityApi.prototype, {
  change_password: {
    get() {
      return this.changePassword;
    },
  },
  create_action_group: {
    get() {
      return this.createActionGroup;
    },
  },
  create_role: {
    get() {
      return this.createRole;
    },
  },
  create_role_mapping: {
    get() {
      return this.createRoleMapping;
    },
  },
  create_tenant: {
    get() {
      return this.createTenant;
    },
  },
  create_user: {
    get() {
      return this.createUser;
    },
  },
  delete_action_group: {
    get() {
      return this.deleteActionGroup;
    },
  },
  delete_distinguished_names: {
    get() {
      return this.deleteDistinguishedNames;
    },
  },
  delete_role: {
    get() {
      return this.deleteRole;
    },
  },
  delete_role_mapping: {
    get() {
      return this.deleteRoleMapping;
    },
  },
  delete_tenant: {
    get() {
      return this.deleteTenant;
    },
  },
  delete_user: {
    get() {
      return this.deleteUser;
    },
  },
  flush_cache: {
    get() {
      return this.flushCache;
    },
  },
  get_account_details: {
    get() {
      return this.getAccountDetails;
    },
  },
  get_action_group: {
    get() {
      return this.getActionGroup;
    },
  },
  get_action_groups: {
    get() {
      return this.getActionGroups;
    },
  },
  get_audit_configuration: {
    get() {
      return this.getAuditConfiguration;
    },
  },
  get_certificates: {
    get() {
      return this.getCertificates;
    },
  },
  get_configuration: {
    get() {
      return this.getConfiguration;
    },
  },
  get_distinguished_names: {
    get() {
      return this.getDistinguishedNames;
    },
  },
  get_role: {
    get() {
      return this.getRole;
    },
  },
  get_role_mapping: {
    get() {
      return this.getRoleMapping;
    },
  },
  get_role_mappings: {
    get() {
      return this.getRoleMappings;
    },
  },
  get_roles: {
    get() {
      return this.getRoles;
    },
  },
  get_tenant: {
    get() {
      return this.getTenant;
    },
  },
  get_tenants: {
    get() {
      return this.getTenants;
    },
  },
  get_user: {
    get() {
      return this.getUser;
    },
  },
  get_users: {
    get() {
      return this.getUsers;
    },
  },
  patch_action_group: {
    get() {
      return this.patchActionGroup;
    },
  },
  patch_action_groups: {
    get() {
      return this.patchActionGroups;
    },
  },
  patch_audit_configuration: {
    get() {
      return this.patchAuditConfiguration;
    },
  },
  patch_configuration: {
    get() {
      return this.patchConfiguration;
    },
  },
  patch_distinguished_names: {
    get() {
      return this.patchDistinguishedNames;
    },
  },
  patch_role: {
    get() {
      return this.patchRole;
    },
  },
  patch_role_mapping: {
    get() {
      return this.patchRoleMapping;
    },
  },
  patch_role_mappings: {
    get() {
      return this.patchRoleMappings;
    },
  },
  patch_roles: {
    get() {
      return this.patchRoles;
    },
  },
  patch_tenant: {
    get() {
      return this.patchTenant;
    },
  },
  patch_tenants: {
    get() {
      return this.patchTenants;
    },
  },
  patch_user: {
    get() {
      return this.patchUser;
    },
  },
  patch_users: {
    get() {
      return this.patchUsers;
    },
  },
  reload_http_certificates: {
    get() {
      return this.reloadHttpCertificates;
    },
  },
  reload_transport_certificates: {
    get() {
      return this.reloadTransportCertificates;
    },
  },
  update_audit_configuration: {
    get() {
      return this.updateAuditConfiguration;
    },
  },
  update_configuration: {
    get() {
      return this.updateConfiguration;
    },
  },
  update_distinguished_names: {
    get() {
      return this.updateDistinguishedNames;
    },
  },
});
module.exports = SecurityApi;
