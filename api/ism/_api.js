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

/** @namespace API-Ism */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const addPolicyFn = require('./addPolicy');
const changePolicyFn = require('./changePolicy');
const deletePolicyFn = require('./deletePolicy');
const existsPolicyFn = require('./existsPolicy');
const explainPolicyFn = require('./explainPolicy');
const getPoliciesFn = require('./getPolicies');
const getPolicyFn = require('./getPolicy');
const putPoliciesFn = require('./putPolicies');
const putPolicyFn = require('./putPolicy');
const refreshSearchAnalyzersFn = require('./refreshSearchAnalyzers');
const removePolicyFn = require('./removePolicy');
const retryIndexFn = require('./retryIndex');

function IsmApi(bindObj) {
  this.addPolicy = addPolicyFn.bind(bindObj);
  this.changePolicy = changePolicyFn.bind(bindObj);
  this.deletePolicy = deletePolicyFn.bind(bindObj);
  this.existsPolicy = existsPolicyFn.bind(bindObj);
  this.explainPolicy = explainPolicyFn.bind(bindObj);
  this.getPolicies = getPoliciesFn.bind(bindObj);
  this.getPolicy = getPolicyFn.bind(bindObj);
  this.putPolicies = putPoliciesFn.bind(bindObj);
  this.putPolicy = putPolicyFn.bind(bindObj);
  this.refreshSearchAnalyzers = refreshSearchAnalyzersFn.bind(bindObj);
  this.removePolicy = removePolicyFn.bind(bindObj);
  this.retryIndex = retryIndexFn.bind(bindObj);

  // Deprecated: Use addPolicy instead.
  this.add_policy = addPolicyFn.bind(bindObj);
  // Deprecated: Use changePolicy instead.
  this.change_policy = changePolicyFn.bind(bindObj);
  // Deprecated: Use deletePolicy instead.
  this.delete_policy = deletePolicyFn.bind(bindObj);
  // Deprecated: Use existsPolicy instead.
  this.exists_policy = existsPolicyFn.bind(bindObj);
  // Deprecated: Use explainPolicy instead.
  this.explain_policy = explainPolicyFn.bind(bindObj);
  // Deprecated: Use getPolicies instead.
  this.get_policies = getPoliciesFn.bind(bindObj);
  // Deprecated: Use getPolicy instead.
  this.get_policy = getPolicyFn.bind(bindObj);
  // Deprecated: Use putPolicies instead.
  this.put_policies = putPoliciesFn.bind(bindObj);
  // Deprecated: Use putPolicy instead.
  this.put_policy = putPolicyFn.bind(bindObj);
  // Deprecated: Use refreshSearchAnalyzers instead.
  this.refresh_search_analyzers = refreshSearchAnalyzersFn.bind(bindObj);
  // Deprecated: Use removePolicy instead.
  this.remove_policy = removePolicyFn.bind(bindObj);
  // Deprecated: Use retryIndex instead.
  this.retry_index = retryIndexFn.bind(bindObj);
}

module.exports = IsmApi;
