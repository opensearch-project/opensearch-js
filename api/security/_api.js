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

/** @namespace API-Security */

function SecurityApi(bindObj) {
  const cache = {};
  this.authinfo = require('./authinfo').bind(bindObj);
  this.authtoken = require('./authtoken').bind(bindObj);
  this.changePassword = require('./changePassword').bind(bindObj);
  this.configUpgradeCheck = require('./configUpgradeCheck').bind(bindObj);
  this.configUpgradePerform = require('./configUpgradePerform').bind(bindObj);
  this.createActionGroup = require('./createActionGroup').bind(bindObj);
  this.createAllowlist = require('./createAllowlist').bind(bindObj);
  this.createRole = require('./createRole').bind(bindObj);
  this.createRoleMapping = require('./createRoleMapping').bind(bindObj);
  this.createTenant = require('./createTenant').bind(bindObj);
  this.createUpdateTenancyConfig = require('./createUpdateTenancyConfig').bind(bindObj);
  this.createUser = require('./createUser').bind(bindObj);
  this.createUserLegacy = require('./createUserLegacy').bind(bindObj);
  this.deleteActionGroup = require('./deleteActionGroup').bind(bindObj);
  this.deleteDistinguishedName = require('./deleteDistinguishedName').bind(bindObj);
  this.deleteRole = require('./deleteRole').bind(bindObj);
  this.deleteRoleMapping = require('./deleteRoleMapping').bind(bindObj);
  this.deleteTenant = require('./deleteTenant').bind(bindObj);
  this.deleteUser = require('./deleteUser').bind(bindObj);
  this.deleteUserLegacy = require('./deleteUserLegacy').bind(bindObj);
  this.flushCache = require('./flushCache').bind(bindObj);
  this.generateOboToken = require('./generateOboToken').bind(bindObj);
  this.generateUserToken = require('./generateUserToken').bind(bindObj);
  this.generateUserTokenLegacy = require('./generateUserTokenLegacy').bind(bindObj);
  this.getAccountDetails = require('./getAccountDetails').bind(bindObj);
  this.getActionGroup = require('./getActionGroup').bind(bindObj);
  this.getActionGroups = require('./getActionGroups').bind(bindObj);
  this.getAllowlist = require('./getAllowlist').bind(bindObj);
  this.getAuditConfiguration = require('./getAuditConfiguration').bind(bindObj);
  this.getCertificates = require('./getCertificates').bind(bindObj);
  this.getConfiguration = require('./getConfiguration').bind(bindObj);
  this.getDashboardsInfo = require('./getDashboardsInfo').bind(bindObj);
  this.getDistinguishedName = require('./getDistinguishedName').bind(bindObj);
  this.getDistinguishedNames = require('./getDistinguishedNames').bind(bindObj);
  this.getPermissionsInfo = require('./getPermissionsInfo').bind(bindObj);
  this.getRole = require('./getRole').bind(bindObj);
  this.getRoleMapping = require('./getRoleMapping').bind(bindObj);
  this.getRoleMappings = require('./getRoleMappings').bind(bindObj);
  this.getRoles = require('./getRoles').bind(bindObj);
  this.getSslinfo = require('./getSslinfo').bind(bindObj);
  this.getTenancyConfig = require('./getTenancyConfig').bind(bindObj);
  this.getTenant = require('./getTenant').bind(bindObj);
  this.getTenants = require('./getTenants').bind(bindObj);
  this.getUser = require('./getUser').bind(bindObj);
  this.getUserLegacy = require('./getUserLegacy').bind(bindObj);
  this.getUsers = require('./getUsers').bind(bindObj);
  this.getUsersLegacy = require('./getUsersLegacy').bind(bindObj);
  this.health = require('./health').bind(bindObj);
  this.migrate = require('./migrate').bind(bindObj);
  this.patchActionGroup = require('./patchActionGroup').bind(bindObj);
  this.patchActionGroups = require('./patchActionGroups').bind(bindObj);
  this.patchAllowlist = require('./patchAllowlist').bind(bindObj);
  this.patchAuditConfiguration = require('./patchAuditConfiguration').bind(bindObj);
  this.patchConfiguration = require('./patchConfiguration').bind(bindObj);
  this.patchDistinguishedName = require('./patchDistinguishedName').bind(bindObj);
  this.patchDistinguishedNames = require('./patchDistinguishedNames').bind(bindObj);
  this.patchRole = require('./patchRole').bind(bindObj);
  this.patchRoleMapping = require('./patchRoleMapping').bind(bindObj);
  this.patchRoleMappings = require('./patchRoleMappings').bind(bindObj);
  this.patchRoles = require('./patchRoles').bind(bindObj);
  this.patchTenant = require('./patchTenant').bind(bindObj);
  this.patchTenants = require('./patchTenants').bind(bindObj);
  this.patchUser = require('./patchUser').bind(bindObj);
  this.patchUsers = require('./patchUsers').bind(bindObj);
  this.postDashboardsInfo = require('./postDashboardsInfo').bind(bindObj);
  this.reloadHttpCertificates = require('./reloadHttpCertificates').bind(bindObj);
  this.reloadTransportCertificates = require('./reloadTransportCertificates').bind(bindObj);
  this.tenantInfo = require('./tenantInfo').bind(bindObj);
  this.updateAuditConfiguration = require('./updateAuditConfiguration').bind(bindObj);
  this.updateConfiguration = require('./updateConfiguration').bind(bindObj);
  this.updateDistinguishedName = require('./updateDistinguishedName').bind(bindObj);
  this.validate = require('./validate').bind(bindObj);
  this.whoAmI = require('./whoAmI').bind(bindObj);
  this.whoAmIProtected = require('./whoAmIProtected').bind(bindObj);
}

module.exports = SecurityApi;
