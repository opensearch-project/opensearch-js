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

'use strict';

/** @namespace API-Security */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const authinfoFn = require('./authinfo');
const authtokenFn = require('./authtoken');
const changePasswordFn = require('./changePassword');
const configUpgradeCheckFn = require('./configUpgradeCheck');
const configUpgradePerformFn = require('./configUpgradePerform');
const createActionGroupFn = require('./createActionGroup');
const createAllowlistFn = require('./createAllowlist');
const createRoleFn = require('./createRole');
const createRoleMappingFn = require('./createRoleMapping');
const createTenantFn = require('./createTenant');
const createUpdateTenancyConfigFn = require('./createUpdateTenancyConfig');
const createUserFn = require('./createUser');
const createUserLegacyFn = require('./createUserLegacy');
const deleteActionGroupFn = require('./deleteActionGroup');
const deleteDistinguishedNameFn = require('./deleteDistinguishedName');
const deleteRoleFn = require('./deleteRole');
const deleteRoleMappingFn = require('./deleteRoleMapping');
const deleteTenantFn = require('./deleteTenant');
const deleteUserFn = require('./deleteUser');
const deleteUserLegacyFn = require('./deleteUserLegacy');
const flushCacheFn = require('./flushCache');
const generateOboTokenFn = require('./generateOboToken');
const generateUserTokenFn = require('./generateUserToken');
const generateUserTokenLegacyFn = require('./generateUserTokenLegacy');
const getAccountDetailsFn = require('./getAccountDetails');
const getActionGroupFn = require('./getActionGroup');
const getActionGroupsFn = require('./getActionGroups');
const getAllCertificatesFn = require('./getAllCertificates');
const getAllowlistFn = require('./getAllowlist');
const getAuditConfigurationFn = require('./getAuditConfiguration');
const getCertificatesFn = require('./getCertificates');
const getConfigurationFn = require('./getConfiguration');
const getDashboardsInfoFn = require('./getDashboardsInfo');
const getDistinguishedNameFn = require('./getDistinguishedName');
const getDistinguishedNamesFn = require('./getDistinguishedNames');
const getNodeCertificatesFn = require('./getNodeCertificates');
const getPermissionsInfoFn = require('./getPermissionsInfo');
const getRoleFn = require('./getRole');
const getRoleMappingFn = require('./getRoleMapping');
const getRoleMappingsFn = require('./getRoleMappings');
const getRolesFn = require('./getRoles');
const getSslinfoFn = require('./getSslinfo');
const getTenancyConfigFn = require('./getTenancyConfig');
const getTenantFn = require('./getTenant');
const getTenantsFn = require('./getTenants');
const getUserFn = require('./getUser');
const getUserLegacyFn = require('./getUserLegacy');
const getUsersFn = require('./getUsers');
const getUsersLegacyFn = require('./getUsersLegacy');
const healthFn = require('./health');
const migrateFn = require('./migrate');
const patchActionGroupFn = require('./patchActionGroup');
const patchActionGroupsFn = require('./patchActionGroups');
const patchAllowlistFn = require('./patchAllowlist');
const patchAuditConfigurationFn = require('./patchAuditConfiguration');
const patchConfigurationFn = require('./patchConfiguration');
const patchDistinguishedNameFn = require('./patchDistinguishedName');
const patchDistinguishedNamesFn = require('./patchDistinguishedNames');
const patchRoleFn = require('./patchRole');
const patchRoleMappingFn = require('./patchRoleMapping');
const patchRoleMappingsFn = require('./patchRoleMappings');
const patchRolesFn = require('./patchRoles');
const patchTenantFn = require('./patchTenant');
const patchTenantsFn = require('./patchTenants');
const patchUserFn = require('./patchUser');
const patchUsersFn = require('./patchUsers');
const postDashboardsInfoFn = require('./postDashboardsInfo');
const reloadHttpCertificatesFn = require('./reloadHttpCertificates');
const reloadTransportCertificatesFn = require('./reloadTransportCertificates');
const tenantInfoFn = require('./tenantInfo');
const updateAuditConfigurationFn = require('./updateAuditConfiguration');
const updateConfigurationFn = require('./updateConfiguration');
const updateDistinguishedNameFn = require('./updateDistinguishedName');
const validateFn = require('./validate');
const whoAmIFn = require('./whoAmI');
const whoAmIProtectedFn = require('./whoAmIProtected');

function SecurityApi(bindObj) {
  this.authinfo = authinfoFn.bind(bindObj);
  this.authtoken = authtokenFn.bind(bindObj);
  this.changePassword = changePasswordFn.bind(bindObj);
  this.configUpgradeCheck = configUpgradeCheckFn.bind(bindObj);
  this.configUpgradePerform = configUpgradePerformFn.bind(bindObj);
  this.createActionGroup = createActionGroupFn.bind(bindObj);
  this.createAllowlist = createAllowlistFn.bind(bindObj);
  this.createRole = createRoleFn.bind(bindObj);
  this.createRoleMapping = createRoleMappingFn.bind(bindObj);
  this.createTenant = createTenantFn.bind(bindObj);
  this.createUpdateTenancyConfig = createUpdateTenancyConfigFn.bind(bindObj);
  this.createUser = createUserFn.bind(bindObj);
  this.createUserLegacy = createUserLegacyFn.bind(bindObj);
  this.deleteActionGroup = deleteActionGroupFn.bind(bindObj);
  this.deleteDistinguishedName = deleteDistinguishedNameFn.bind(bindObj);
  this.deleteRole = deleteRoleFn.bind(bindObj);
  this.deleteRoleMapping = deleteRoleMappingFn.bind(bindObj);
  this.deleteTenant = deleteTenantFn.bind(bindObj);
  this.deleteUser = deleteUserFn.bind(bindObj);
  this.deleteUserLegacy = deleteUserLegacyFn.bind(bindObj);
  this.flushCache = flushCacheFn.bind(bindObj);
  this.generateOboToken = generateOboTokenFn.bind(bindObj);
  this.generateUserToken = generateUserTokenFn.bind(bindObj);
  this.generateUserTokenLegacy = generateUserTokenLegacyFn.bind(bindObj);
  this.getAccountDetails = getAccountDetailsFn.bind(bindObj);
  this.getActionGroup = getActionGroupFn.bind(bindObj);
  this.getActionGroups = getActionGroupsFn.bind(bindObj);
  this.getAllCertificates = getAllCertificatesFn.bind(bindObj);
  this.getAllowlist = getAllowlistFn.bind(bindObj);
  this.getAuditConfiguration = getAuditConfigurationFn.bind(bindObj);
  this.getCertificates = getCertificatesFn.bind(bindObj);
  this.getConfiguration = getConfigurationFn.bind(bindObj);
  this.getDashboardsInfo = getDashboardsInfoFn.bind(bindObj);
  this.getDistinguishedName = getDistinguishedNameFn.bind(bindObj);
  this.getDistinguishedNames = getDistinguishedNamesFn.bind(bindObj);
  this.getNodeCertificates = getNodeCertificatesFn.bind(bindObj);
  this.getPermissionsInfo = getPermissionsInfoFn.bind(bindObj);
  this.getRole = getRoleFn.bind(bindObj);
  this.getRoleMapping = getRoleMappingFn.bind(bindObj);
  this.getRoleMappings = getRoleMappingsFn.bind(bindObj);
  this.getRoles = getRolesFn.bind(bindObj);
  this.getSslinfo = getSslinfoFn.bind(bindObj);
  this.getTenancyConfig = getTenancyConfigFn.bind(bindObj);
  this.getTenant = getTenantFn.bind(bindObj);
  this.getTenants = getTenantsFn.bind(bindObj);
  this.getUser = getUserFn.bind(bindObj);
  this.getUserLegacy = getUserLegacyFn.bind(bindObj);
  this.getUsers = getUsersFn.bind(bindObj);
  this.getUsersLegacy = getUsersLegacyFn.bind(bindObj);
  this.health = healthFn.bind(bindObj);
  this.migrate = migrateFn.bind(bindObj);
  this.patchActionGroup = patchActionGroupFn.bind(bindObj);
  this.patchActionGroups = patchActionGroupsFn.bind(bindObj);
  this.patchAllowlist = patchAllowlistFn.bind(bindObj);
  this.patchAuditConfiguration = patchAuditConfigurationFn.bind(bindObj);
  this.patchConfiguration = patchConfigurationFn.bind(bindObj);
  this.patchDistinguishedName = patchDistinguishedNameFn.bind(bindObj);
  this.patchDistinguishedNames = patchDistinguishedNamesFn.bind(bindObj);
  this.patchRole = patchRoleFn.bind(bindObj);
  this.patchRoleMapping = patchRoleMappingFn.bind(bindObj);
  this.patchRoleMappings = patchRoleMappingsFn.bind(bindObj);
  this.patchRoles = patchRolesFn.bind(bindObj);
  this.patchTenant = patchTenantFn.bind(bindObj);
  this.patchTenants = patchTenantsFn.bind(bindObj);
  this.patchUser = patchUserFn.bind(bindObj);
  this.patchUsers = patchUsersFn.bind(bindObj);
  this.postDashboardsInfo = postDashboardsInfoFn.bind(bindObj);
  this.reloadHttpCertificates = reloadHttpCertificatesFn.bind(bindObj);
  this.reloadTransportCertificates = reloadTransportCertificatesFn.bind(bindObj);
  this.tenantInfo = tenantInfoFn.bind(bindObj);
  this.updateAuditConfiguration = updateAuditConfigurationFn.bind(bindObj);
  this.updateConfiguration = updateConfigurationFn.bind(bindObj);
  this.updateDistinguishedName = updateDistinguishedNameFn.bind(bindObj);
  this.validate = validateFn.bind(bindObj);
  this.whoAmI = whoAmIFn.bind(bindObj);
  this.whoAmIProtected = whoAmIProtectedFn.bind(bindObj);

  // Deprecated: Use changePassword instead.
  this.change_password = changePasswordFn.bind(bindObj);
  // Deprecated: Use configUpgradeCheck instead.
  this.config_upgrade_check = configUpgradeCheckFn.bind(bindObj);
  // Deprecated: Use configUpgradePerform instead.
  this.config_upgrade_perform = configUpgradePerformFn.bind(bindObj);
  // Deprecated: Use createActionGroup instead.
  this.create_action_group = createActionGroupFn.bind(bindObj);
  // Deprecated: Use createAllowlist instead.
  this.create_allowlist = createAllowlistFn.bind(bindObj);
  // Deprecated: Use createRole instead.
  this.create_role = createRoleFn.bind(bindObj);
  // Deprecated: Use createRoleMapping instead.
  this.create_role_mapping = createRoleMappingFn.bind(bindObj);
  // Deprecated: Use createTenant instead.
  this.create_tenant = createTenantFn.bind(bindObj);
  // Deprecated: Use createUpdateTenancyConfig instead.
  this.create_update_tenancy_config = createUpdateTenancyConfigFn.bind(bindObj);
  // Deprecated: Use createUser instead.
  this.create_user = createUserFn.bind(bindObj);
  // Deprecated: Use createUserLegacy instead.
  this.create_user_legacy = createUserLegacyFn.bind(bindObj);
  // Deprecated: Use deleteActionGroup instead.
  this.delete_action_group = deleteActionGroupFn.bind(bindObj);
  // Deprecated: Use deleteDistinguishedName instead.
  this.delete_distinguished_name = deleteDistinguishedNameFn.bind(bindObj);
  // Deprecated: Use deleteRole instead.
  this.delete_role = deleteRoleFn.bind(bindObj);
  // Deprecated: Use deleteRoleMapping instead.
  this.delete_role_mapping = deleteRoleMappingFn.bind(bindObj);
  // Deprecated: Use deleteTenant instead.
  this.delete_tenant = deleteTenantFn.bind(bindObj);
  // Deprecated: Use deleteUser instead.
  this.delete_user = deleteUserFn.bind(bindObj);
  // Deprecated: Use deleteUserLegacy instead.
  this.delete_user_legacy = deleteUserLegacyFn.bind(bindObj);
  // Deprecated: Use flushCache instead.
  this.flush_cache = flushCacheFn.bind(bindObj);
  // Deprecated: Use generateOboToken instead.
  this.generate_obo_token = generateOboTokenFn.bind(bindObj);
  // Deprecated: Use generateUserToken instead.
  this.generate_user_token = generateUserTokenFn.bind(bindObj);
  // Deprecated: Use generateUserTokenLegacy instead.
  this.generate_user_token_legacy = generateUserTokenLegacyFn.bind(bindObj);
  // Deprecated: Use getAccountDetails instead.
  this.get_account_details = getAccountDetailsFn.bind(bindObj);
  // Deprecated: Use getActionGroup instead.
  this.get_action_group = getActionGroupFn.bind(bindObj);
  // Deprecated: Use getActionGroups instead.
  this.get_action_groups = getActionGroupsFn.bind(bindObj);
  // Deprecated: Use getAllCertificates instead.
  this.get_all_certificates = getAllCertificatesFn.bind(bindObj);
  // Deprecated: Use getAllowlist instead.
  this.get_allowlist = getAllowlistFn.bind(bindObj);
  // Deprecated: Use getAuditConfiguration instead.
  this.get_audit_configuration = getAuditConfigurationFn.bind(bindObj);
  // Deprecated: Use getCertificates instead.
  this.get_certificates = getCertificatesFn.bind(bindObj);
  // Deprecated: Use getConfiguration instead.
  this.get_configuration = getConfigurationFn.bind(bindObj);
  // Deprecated: Use getDashboardsInfo instead.
  this.get_dashboards_info = getDashboardsInfoFn.bind(bindObj);
  // Deprecated: Use getDistinguishedName instead.
  this.get_distinguished_name = getDistinguishedNameFn.bind(bindObj);
  // Deprecated: Use getDistinguishedNames instead.
  this.get_distinguished_names = getDistinguishedNamesFn.bind(bindObj);
  // Deprecated: Use getNodeCertificates instead.
  this.get_node_certificates = getNodeCertificatesFn.bind(bindObj);
  // Deprecated: Use getPermissionsInfo instead.
  this.get_permissions_info = getPermissionsInfoFn.bind(bindObj);
  // Deprecated: Use getRole instead.
  this.get_role = getRoleFn.bind(bindObj);
  // Deprecated: Use getRoleMapping instead.
  this.get_role_mapping = getRoleMappingFn.bind(bindObj);
  // Deprecated: Use getRoleMappings instead.
  this.get_role_mappings = getRoleMappingsFn.bind(bindObj);
  // Deprecated: Use getRoles instead.
  this.get_roles = getRolesFn.bind(bindObj);
  // Deprecated: Use getSslinfo instead.
  this.get_sslinfo = getSslinfoFn.bind(bindObj);
  // Deprecated: Use getTenancyConfig instead.
  this.get_tenancy_config = getTenancyConfigFn.bind(bindObj);
  // Deprecated: Use getTenant instead.
  this.get_tenant = getTenantFn.bind(bindObj);
  // Deprecated: Use getTenants instead.
  this.get_tenants = getTenantsFn.bind(bindObj);
  // Deprecated: Use getUser instead.
  this.get_user = getUserFn.bind(bindObj);
  // Deprecated: Use getUserLegacy instead.
  this.get_user_legacy = getUserLegacyFn.bind(bindObj);
  // Deprecated: Use getUsers instead.
  this.get_users = getUsersFn.bind(bindObj);
  // Deprecated: Use getUsersLegacy instead.
  this.get_users_legacy = getUsersLegacyFn.bind(bindObj);
  // Deprecated: Use patchActionGroup instead.
  this.patch_action_group = patchActionGroupFn.bind(bindObj);
  // Deprecated: Use patchActionGroups instead.
  this.patch_action_groups = patchActionGroupsFn.bind(bindObj);
  // Deprecated: Use patchAllowlist instead.
  this.patch_allowlist = patchAllowlistFn.bind(bindObj);
  // Deprecated: Use patchAuditConfiguration instead.
  this.patch_audit_configuration = patchAuditConfigurationFn.bind(bindObj);
  // Deprecated: Use patchConfiguration instead.
  this.patch_configuration = patchConfigurationFn.bind(bindObj);
  // Deprecated: Use patchDistinguishedName instead.
  this.patch_distinguished_name = patchDistinguishedNameFn.bind(bindObj);
  // Deprecated: Use patchDistinguishedNames instead.
  this.patch_distinguished_names = patchDistinguishedNamesFn.bind(bindObj);
  // Deprecated: Use patchRole instead.
  this.patch_role = patchRoleFn.bind(bindObj);
  // Deprecated: Use patchRoleMapping instead.
  this.patch_role_mapping = patchRoleMappingFn.bind(bindObj);
  // Deprecated: Use patchRoleMappings instead.
  this.patch_role_mappings = patchRoleMappingsFn.bind(bindObj);
  // Deprecated: Use patchRoles instead.
  this.patch_roles = patchRolesFn.bind(bindObj);
  // Deprecated: Use patchTenant instead.
  this.patch_tenant = patchTenantFn.bind(bindObj);
  // Deprecated: Use patchTenants instead.
  this.patch_tenants = patchTenantsFn.bind(bindObj);
  // Deprecated: Use patchUser instead.
  this.patch_user = patchUserFn.bind(bindObj);
  // Deprecated: Use patchUsers instead.
  this.patch_users = patchUsersFn.bind(bindObj);
  // Deprecated: Use postDashboardsInfo instead.
  this.post_dashboards_info = postDashboardsInfoFn.bind(bindObj);
  // Deprecated: Use reloadHttpCertificates instead.
  this.reload_http_certificates = reloadHttpCertificatesFn.bind(bindObj);
  // Deprecated: Use reloadTransportCertificates instead.
  this.reload_transport_certificates = reloadTransportCertificatesFn.bind(bindObj);
  // Deprecated: Use tenantInfo instead.
  this.tenant_info = tenantInfoFn.bind(bindObj);
  // Deprecated: Use updateAuditConfiguration instead.
  this.update_audit_configuration = updateAuditConfigurationFn.bind(bindObj);
  // Deprecated: Use updateConfiguration instead.
  this.update_configuration = updateConfigurationFn.bind(bindObj);
  // Deprecated: Use updateDistinguishedName instead.
  this.update_distinguished_name = updateDistinguishedNameFn.bind(bindObj);
  // Deprecated: Use whoAmI instead.
  this.who_am_i = whoAmIFn.bind(bindObj);
  // Deprecated: Use whoAmIProtected instead.
  this.who_am_i_protected = whoAmIProtectedFn.bind(bindObj);
}

module.exports = SecurityApi;
