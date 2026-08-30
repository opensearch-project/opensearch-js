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

/** @namespace API-Sm */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const createPolicyFn = require('./createPolicy');
const deletePolicyFn = require('./deletePolicy');
const explainPolicyFn = require('./explainPolicy');
const getPoliciesFn = require('./getPolicies');
const getPolicyFn = require('./getPolicy');
const startPolicyFn = require('./startPolicy');
const stopPolicyFn = require('./stopPolicy');
const updatePolicyFn = require('./updatePolicy');

function SmApi(bindObj) {
  this.createPolicy = createPolicyFn.bind(bindObj);
  this.deletePolicy = deletePolicyFn.bind(bindObj);
  this.explainPolicy = explainPolicyFn.bind(bindObj);
  this.getPolicies = getPoliciesFn.bind(bindObj);
  this.getPolicy = getPolicyFn.bind(bindObj);
  this.startPolicy = startPolicyFn.bind(bindObj);
  this.stopPolicy = stopPolicyFn.bind(bindObj);
  this.updatePolicy = updatePolicyFn.bind(bindObj);

  // Deprecated: Use createPolicy instead.
  this.create_policy = createPolicyFn.bind(bindObj);
  // Deprecated: Use deletePolicy instead.
  this.delete_policy = deletePolicyFn.bind(bindObj);
  // Deprecated: Use explainPolicy instead.
  this.explain_policy = explainPolicyFn.bind(bindObj);
  // Deprecated: Use getPolicies instead.
  this.get_policies = getPoliciesFn.bind(bindObj);
  // Deprecated: Use getPolicy instead.
  this.get_policy = getPolicyFn.bind(bindObj);
  // Deprecated: Use startPolicy instead.
  this.start_policy = startPolicyFn.bind(bindObj);
  // Deprecated: Use stopPolicy instead.
  this.stop_policy = stopPolicyFn.bind(bindObj);
  // Deprecated: Use updatePolicy instead.
  this.update_policy = updatePolicyFn.bind(bindObj);
}

module.exports = SmApi;
