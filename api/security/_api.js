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
  this.changePassword = apiFunc(bindObj, cache, './security/changePassword');
  this.configUpgradeCheck = apiFunc(bindObj, cache, './security/configUpgradeCheck');
  this.configUpgradePerform = apiFunc(bindObj, cache, './security/configUpgradePerform');
  this.createActionGroup = apiFunc(bindObj, cache, './security/createActionGroup');
  this.createAllowlist = apiFunc(bindObj, cache, './security/createAllowlist');
  this.createRole = apiFunc(bindObj, cache, './security/createRole');
  this.createRoleMapping = apiFunc(bindObj, cache, './security/createRoleMapping');
  this.createTenant = apiFunc(bindObj, cache, './security/createTenant');
  this.createUpdateTenancyConfig = apiFunc(bindObj, cache, './security/createUpdateTenancyConfig');
  this.createUser = apiFunc(bindObj, cache, './security/createUser');
  this.createUserLegacy = apiFunc(bindObj, cache, './security/createUserLegacy');
  this.deleteActionGroup = apiFunc(bindObj, cache, './security/deleteActionGroup');
  this.deleteDistinguishedName = apiFunc(bindObj, cache, './security/deleteDistinguishedName');
  this.deleteRole = apiFunc(bindObj, cache, './security/deleteRole');
  this.deleteRoleMapping = apiFunc(bindObj, cache, './security/deleteRoleMapping');
  this.deleteTenant = apiFunc(bindObj, cache, './security/deleteTenant');
  this.deleteUser = apiFunc(bindObj, cache, './security/deleteUser');
  this.deleteUserLegacy = apiFunc(bindObj, cache, './security/deleteUserLegacy');
  this.flushCache = apiFunc(bindObj, cache, './security/flushCache');
  this.generateOboToken = apiFunc(bindObj, cache, './security/generateOboToken');
  this.generateUserToken = apiFunc(bindObj, cache, './security/generateUserToken');
  this.generateUserTokenLegacy = apiFunc(bindObj, cache, './security/generateUserTokenLegacy');
  this.getAccountDetails = apiFunc(bindObj, cache, './security/getAccountDetails');
  this.getActionGroup = apiFunc(bindObj, cache, './security/getActionGroup');
  this.getActionGroups = apiFunc(bindObj, cache, './security/getActionGroups');
  this.getAllowlist = apiFunc(bindObj, cache, './security/getAllowlist');
  this.getAuditConfiguration = apiFunc(bindObj, cache, './security/getAuditConfiguration');
  this.getCertificates = apiFunc(bindObj, cache, './security/getCertificates');
  this.getConfiguration = apiFunc(bindObj, cache, './security/getConfiguration');
  this.getDashboardsInfo = apiFunc(bindObj, cache, './security/getDashboardsInfo');
  this.getDistinguishedName = apiFunc(bindObj, cache, './security/getDistinguishedName');
  this.getDistinguishedNames = apiFunc(bindObj, cache, './security/getDistinguishedNames');
  this.getPermissionsInfo = apiFunc(bindObj, cache, './security/getPermissionsInfo');
  this.getRole = apiFunc(bindObj, cache, './security/getRole');
  this.getRoleMapping = apiFunc(bindObj, cache, './security/getRoleMapping');
  this.getRoleMappings = apiFunc(bindObj, cache, './security/getRoleMappings');
  this.getRoles = apiFunc(bindObj, cache, './security/getRoles');
  this.getSslinfo = apiFunc(bindObj, cache, './security/getSslinfo');
  this.getTenancyConfig = apiFunc(bindObj, cache, './security/getTenancyConfig');
  this.getTenant = apiFunc(bindObj, cache, './security/getTenant');
  this.getTenants = apiFunc(bindObj, cache, './security/getTenants');
  this.getUser = apiFunc(bindObj, cache, './security/getUser');
  this.getUserLegacy = apiFunc(bindObj, cache, './security/getUserLegacy');
  this.getUsers = apiFunc(bindObj, cache, './security/getUsers');
  this.getUsersLegacy = apiFunc(bindObj, cache, './security/getUsersLegacy');
  this.health = apiFunc(bindObj, cache, './security/health');
  this.migrate = apiFunc(bindObj, cache, './security/migrate');
  this.patchActionGroup = apiFunc(bindObj, cache, './security/patchActionGroup');
  this.patchActionGroups = apiFunc(bindObj, cache, './security/patchActionGroups');
  this.patchAllowlist = apiFunc(bindObj, cache, './security/patchAllowlist');
  this.patchAuditConfiguration = apiFunc(bindObj, cache, './security/patchAuditConfiguration');
  this.patchConfiguration = apiFunc(bindObj, cache, './security/patchConfiguration');
  this.patchDistinguishedName = apiFunc(bindObj, cache, './security/patchDistinguishedName');
  this.patchDistinguishedNames = apiFunc(bindObj, cache, './security/patchDistinguishedNames');
  this.patchRole = apiFunc(bindObj, cache, './security/patchRole');
  this.patchRoleMapping = apiFunc(bindObj, cache, './security/patchRoleMapping');
  this.patchRoleMappings = apiFunc(bindObj, cache, './security/patchRoleMappings');
  this.patchRoles = apiFunc(bindObj, cache, './security/patchRoles');
  this.patchTenant = apiFunc(bindObj, cache, './security/patchTenant');
  this.patchTenants = apiFunc(bindObj, cache, './security/patchTenants');
  this.patchUser = apiFunc(bindObj, cache, './security/patchUser');
  this.patchUsers = apiFunc(bindObj, cache, './security/patchUsers');
  this.postDashboardsInfo = apiFunc(bindObj, cache, './security/postDashboardsInfo');
  this.reloadHttpCertificates = apiFunc(bindObj, cache, './security/reloadHttpCertificates');
  this.reloadTransportCertificates = apiFunc(bindObj, cache, './security/reloadTransportCertificates');
  this.tenantInfo = apiFunc(bindObj, cache, './security/tenantInfo');
  this.updateAuditConfiguration = apiFunc(bindObj, cache, './security/updateAuditConfiguration');
  this.updateConfiguration = apiFunc(bindObj, cache, './security/updateConfiguration');
  this.updateDistinguishedName = apiFunc(bindObj, cache, './security/updateDistinguishedName');
  this.validate = apiFunc(bindObj, cache, './security/validate');
  this.whoAmI = apiFunc(bindObj, cache, './security/whoAmI');
  this.whoAmIProtected = apiFunc(bindObj, cache, './security/whoAmIProtected');
}

module.exports = SecurityApi;
