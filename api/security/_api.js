/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict';

const { apiFunc } = require('../utils');

/** @namespace API-Security */

function SecurityApi(bindObj) {
  const cache = {};
  this.authinfo = apiFunc(bindObj, cache, './security/authinfo');
  this.authtoken = apiFunc(bindObj, cache, './security/authtoken');
  this.changePassword = apiFunc(bindObj, cache, './security/change_password');
  this.configUpgradeCheck = apiFunc(bindObj, cache, './security/config_upgrade_check');
  this.configUpgradePerform = apiFunc(bindObj, cache, './security/config_upgrade_perform');
  this.createActionGroup = apiFunc(bindObj, cache, './security/create_action_group');
  this.createAllowlist = apiFunc(bindObj, cache, './security/create_allowlist');
  this.createRole = apiFunc(bindObj, cache, './security/create_role');
  this.createRoleMapping = apiFunc(bindObj, cache, './security/create_role_mapping');
  this.createTenant = apiFunc(bindObj, cache, './security/create_tenant');
  this.createUpdateTenancyConfig = apiFunc(bindObj, cache, './security/create_update_tenancy_config');
  this.createUser = apiFunc(bindObj, cache, './security/create_user');
  this.createUserLegacy = apiFunc(bindObj, cache, './security/create_user_legacy');
  this.deleteActionGroup = apiFunc(bindObj, cache, './security/delete_action_group');
  this.deleteDistinguishedName = apiFunc(bindObj, cache, './security/delete_distinguished_name');
  this.deleteRole = apiFunc(bindObj, cache, './security/delete_role');
  this.deleteRoleMapping = apiFunc(bindObj, cache, './security/delete_role_mapping');
  this.deleteTenant = apiFunc(bindObj, cache, './security/delete_tenant');
  this.deleteUser = apiFunc(bindObj, cache, './security/delete_user');
  this.deleteUserLegacy = apiFunc(bindObj, cache, './security/delete_user_legacy');
  this.flushCache = apiFunc(bindObj, cache, './security/flush_cache');
  this.generateOboToken = apiFunc(bindObj, cache, './security/generate_obo_token');
  this.generateUserToken = apiFunc(bindObj, cache, './security/generate_user_token');
  this.generateUserTokenLegacy = apiFunc(bindObj, cache, './security/generate_user_token_legacy');
  this.getAccountDetails = apiFunc(bindObj, cache, './security/get_account_details');
  this.getActionGroup = apiFunc(bindObj, cache, './security/get_action_group');
  this.getActionGroups = apiFunc(bindObj, cache, './security/get_action_groups');
  this.getAllowlist = apiFunc(bindObj, cache, './security/get_allowlist');
  this.getAuditConfiguration = apiFunc(bindObj, cache, './security/get_audit_configuration');
  this.getCertificates = apiFunc(bindObj, cache, './security/get_certificates');
  this.getConfiguration = apiFunc(bindObj, cache, './security/get_configuration');
  this.getDashboardsInfo = apiFunc(bindObj, cache, './security/get_dashboards_info');
  this.getDistinguishedName = apiFunc(bindObj, cache, './security/get_distinguished_name');
  this.getDistinguishedNames = apiFunc(bindObj, cache, './security/get_distinguished_names');
  this.getPermissionsInfo = apiFunc(bindObj, cache, './security/get_permissions_info');
  this.getRole = apiFunc(bindObj, cache, './security/get_role');
  this.getRoleMapping = apiFunc(bindObj, cache, './security/get_role_mapping');
  this.getRoleMappings = apiFunc(bindObj, cache, './security/get_role_mappings');
  this.getRoles = apiFunc(bindObj, cache, './security/get_roles');
  this.getSslinfo = apiFunc(bindObj, cache, './security/get_sslinfo');
  this.getTenancyConfig = apiFunc(bindObj, cache, './security/get_tenancy_config');
  this.getTenant = apiFunc(bindObj, cache, './security/get_tenant');
  this.getTenants = apiFunc(bindObj, cache, './security/get_tenants');
  this.getUser = apiFunc(bindObj, cache, './security/get_user');
  this.getUserLegacy = apiFunc(bindObj, cache, './security/get_user_legacy');
  this.getUsers = apiFunc(bindObj, cache, './security/get_users');
  this.getUsersLegacy = apiFunc(bindObj, cache, './security/get_users_legacy');
  this.health = apiFunc(bindObj, cache, './security/health');
  this.migrate = apiFunc(bindObj, cache, './security/migrate');
  this.patchActionGroup = apiFunc(bindObj, cache, './security/patch_action_group');
  this.patchActionGroups = apiFunc(bindObj, cache, './security/patch_action_groups');
  this.patchAllowlist = apiFunc(bindObj, cache, './security/patch_allowlist');
  this.patchAuditConfiguration = apiFunc(bindObj, cache, './security/patch_audit_configuration');
  this.patchConfiguration = apiFunc(bindObj, cache, './security/patch_configuration');
  this.patchDistinguishedName = apiFunc(bindObj, cache, './security/patch_distinguished_name');
  this.patchDistinguishedNames = apiFunc(bindObj, cache, './security/patch_distinguished_names');
  this.patchRole = apiFunc(bindObj, cache, './security/patch_role');
  this.patchRoleMapping = apiFunc(bindObj, cache, './security/patch_role_mapping');
  this.patchRoleMappings = apiFunc(bindObj, cache, './security/patch_role_mappings');
  this.patchRoles = apiFunc(bindObj, cache, './security/patch_roles');
  this.patchTenant = apiFunc(bindObj, cache, './security/patch_tenant');
  this.patchTenants = apiFunc(bindObj, cache, './security/patch_tenants');
  this.patchUser = apiFunc(bindObj, cache, './security/patch_user');
  this.patchUsers = apiFunc(bindObj, cache, './security/patch_users');
  this.postDashboardsInfo = apiFunc(bindObj, cache, './security/post_dashboards_info');
  this.reloadHttpCertificates = apiFunc(bindObj, cache, './security/reload_http_certificates');
  this.reloadTransportCertificates = apiFunc(bindObj, cache, './security/reload_transport_certificates');
  this.tenantInfo = apiFunc(bindObj, cache, './security/tenant_info');
  this.updateAuditConfiguration = apiFunc(bindObj, cache, './security/update_audit_configuration');
  this.updateConfiguration = apiFunc(bindObj, cache, './security/update_configuration');
  this.updateDistinguishedName = apiFunc(bindObj, cache, './security/update_distinguished_name');
  this.validate = apiFunc(bindObj, cache, './security/validate');
  this.whoAmI = apiFunc(bindObj, cache, './security/who_am_i');
  this.whoAmIProtected = apiFunc(bindObj, cache, './security/who_am_i_protected');
}

module.exports = SecurityApi;
