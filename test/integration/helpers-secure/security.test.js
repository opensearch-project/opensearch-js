/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

const { test } = require('tap');
const { Client } = require('../../../');

const client = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  node: 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'admin',
  },
});
const security = client.security;

test('Security: User', async (t) => {
  await security.createUser({ username: 'test_user', body: { password: 'aasodu23497@lksd' } });
  await security.getUser({ username: 'test_user' });
  await security.deleteUser({ username: 'test_user' });
  t.rejects(security.getUser({ username: 'test_user' }));
});

test('Security: Role', async (t) => {
  await security.createRole({ role: 'test_role', body: { cluster_permissions: [] } });
  await security.getRole({ role: 'test_role' });
  await security.deleteRole({ role: 'test_role' });
  t.rejects(security.getRole({ role: 'test_role' }));
});

test('Security: RoleMapping', async (t) => {
  await security.createRole({ role: 'test_role', body: { cluster_permissions: [] } });
  await security.createRoleMapping({ role: 'test_role', body: { users: [] } });
  await security.getRoleMapping({ role: 'test_role' });
  await security.deleteRoleMapping({ role: 'test_role' });
  t.rejects(security.getRoleMapping({ role: 'test_role' }));
  await security.deleteRole({ role: 'test_role' });
});

test('Security: ActionGroup', async (t) => {
  await security.createActionGroup({
    action_group: 'test_action_group',
    body: { allowed_actions: [] },
  });
  await security.getActionGroup({ action_group: 'test_action_group' }); // found
  await security.deleteActionGroup({ action_group: 'test_action_group' });
  t.rejects(security.getActionGroup({ action_group: 'test_action_group' })); // not found
});

test('Security: Tenant', async (t) => {
  await security.createTenant({ tenant: 'test_tenant', body: { description: 'test_tenant' } });
  await security.getTenant({ tenant: 'test_tenant' });
  await security.deleteTenant({ tenant: 'test_tenant' });
  t.rejects(security.getTenant({ tenant: 'test_tenant' }));
});
