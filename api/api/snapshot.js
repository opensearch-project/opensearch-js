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
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

/** @namespace API-Snapshot */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'cluster_manager_timeout',
  'master_timeout',
  'timeout',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'wait_for_completion',
  'verify',
  'ignore_unavailable',
  'index_details',
  'include_repository',
  'verbose',
  'local',
  'blob_count',
  'concurrency',
  'read_node_count',
  'early_read_node_count',
  'seed',
  'rare_action_probability',
  'max_blob_size',
  'max_total_data_size',
  'detailed',
  'rarely_abort_writes',
];
const snakeCase = {
  clusterManagerTimeout: 'cluster_manager_timeout',
  masterTimeout: 'master_timeout',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  waitForCompletion: 'wait_for_completion',
  ignoreUnavailable: 'ignore_unavailable',
  indexDetails: 'index_details',
  includeRepository: 'include_repository',
  blobCount: 'blob_count',
  readNodeCount: 'read_node_count',
  earlyReadNodeCount: 'early_read_node_count',
  rareActionProbability: 'rare_action_probability',
  maxBlobSize: 'max_blob_size',
  maxTotalDataSize: 'max_total_data_size',
  rarelyAbortWrites: 'rarely_abort_writes',
};

function SnapshotApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Removes stale data from repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} params.repository - A repository name
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.cleanupRepository = function snapshotCleanupRepositoryApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_cleanup';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Clones indices from one snapshot into another snapshot in the same repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} params.repository - A repository name
 * @param {string} params.snapshot - The name of the snapshot to clone from
 * @param {Object} params.body - The snapshot clone definition
 * @param {string} [params.target_snapshot] - The name of the cloned snapshot to create
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.clone = function snapshotCloneApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.snapshot == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot');
    return handleError(err, callback);
  }
  if (params.target_snapshot == null && params.targetSnapshot == null) {
    const err = new this[kConfigurationError](
      'Missing required parameter: target_snapshot or targetSnapshot'
    );
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  // check required url components
  if (
    (params.target_snapshot != null || params.targetSnapshot != null) &&
    (params.snapshot == null || params.repository == null)
  ) {
    const err = new this[kConfigurationError](
      'Missing required parameter of the url: snapshot, repository'
    );
    return handleError(err, callback);
  } else if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, targetSnapshot, target_snapshot, ...querystring } =
    params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path =
    '/' +
    '_snapshot' +
    '/' +
    encodeURIComponent(repository) +
    '/' +
    encodeURIComponent(snapshot) +
    '/' +
    '_clone' +
    '/' +
    encodeURIComponent(target_snapshot || targetSnapshot);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates a snapshot in a repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} params.repository - A repository name
 * @param {string} params.snapshot - A snapshot name
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.wait_for_completion] - Should this request wait until the operation has completed before returning
 * @param {Object} [params.body] - The snapshot definition
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.create = function snapshotCreateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.snapshot == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot');
    return handleError(err, callback);
  }

  // check required url components
  if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path =
    '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates a repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} params.repository - A repository name
 * @param {Object} params.body - The repository definition
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {boolean} [params.verify] - Whether to verify the repository after creation
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.createRepository = function snapshotCreateRepositoryApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes a snapshot.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {string} [params.snapshot] - A snapshot name
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.delete = function snapshotDeleteApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.snapshot == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot');
    return handleError(err, callback);
  }

  // check required url components
  if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path =
    '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes a repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - Name of the snapshot repository to unregister. Wildcard (`*`) patterns are supported.
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.deleteRepository = function snapshotDeleteRepositoryApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about a snapshot.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {string} [params.snapshot] - A comma-separated list of snapshot names
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.ignore_unavailable] - Whether to ignore unavailable snapshots, defaults to false which means a SnapshotMissingException is thrown
 * @param {boolean} [params.index_details] - Whether to include details of each index in the snapshot, if those details are available. Defaults to false.
 * @param {boolean} [params.include_repository] - Whether to include the repository name in the snapshot info. Defaults to true.
 * @param {boolean} [params.verbose] - Whether to show verbose snapshot info or only show the basic info found in the repository index blob
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.get = function snapshotGetApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.snapshot == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot');
    return handleError(err, callback);
  }

  // check required url components
  if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path =
    '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about a snapshot.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A comma-separated list of repository names
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.local] - Return local information, do not retrieve the state from cluster_manager node (default: false)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.getRepository = function snapshotGetRepositoryApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (repository != null) {
    if (method == null) method = 'GET';
    path = '/' + '_snapshot' + '/' + encodeURIComponent(repository);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_snapshot';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Analyzes a repository for correctness and performance
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {number} [params.blob_count] - Number of blobs to create during the test. Defaults to 100.
 * @param {number} [params.concurrency] - Number of operations to run concurrently during the test. Defaults to 10.
 * @param {number} [params.read_node_count] - Number of nodes on which to read a blob after writing. Defaults to 10.
 * @param {number} [params.early_read_node_count] - Number of nodes on which to perform an early read on a blob, i.e. before writing has completed. Early reads are rare actions so the 'rare_action_probability' parameter is also relevant. Defaults to 2.
 * @param {number} [params.seed] - Seed for the random number generator used to create the test workload. Defaults to a random value.
 * @param {number} [params.rare_action_probability] - Probability of taking a rare action such as an early read or an overwrite. Defaults to 0.02.
 * @param {string} [params.max_blob_size] - Maximum size of a blob to create during the test, e.g '1gb' or '100mb'. Defaults to '10mb'.
 * @param {string} [params.max_total_data_size] - Maximum total size of all blobs to create during the test, e.g '1tb' or '100gb'. Defaults to '1gb'.
 * @param {string} [params.timeout] - Explicit operation timeout. Defaults to '30s'.
 * @param {boolean} [params.detailed] - Whether to return detailed results or a summary. Defaults to 'false' so that only the summary is returned.
 * @param {boolean} [params.rarely_abort_writes] - Whether to rarely abort writes before they complete. Defaults to 'true'.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.repositoryAnalyze = function snapshotRepositoryAnalyzeApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_analyze';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Restores a snapshot.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {string} [params.snapshot] - A snapshot name
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.wait_for_completion] - Should this request wait until the operation has completed before returning
 * @param {Object} [params.body] - Details of what to restore
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.restore = function snapshotRestoreApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }
  if (params.snapshot == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot');
    return handleError(err, callback);
  }

  // check required url components
  if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path =
    '/' +
    '_snapshot' +
    '/' +
    encodeURIComponent(repository) +
    '/' +
    encodeURIComponent(snapshot) +
    '/' +
    '_restore';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about the status of a snapshot.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {string} [params.snapshot] - A comma-separated list of snapshot names
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.ignore_unavailable] - Whether to ignore unavailable snapshots, defaults to false which means a SnapshotMissingException is thrown
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.status = function snapshotStatusApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required url components
  if (params.snapshot != null && params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, snapshot, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (repository != null && snapshot != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_snapshot' +
      '/' +
      encodeURIComponent(repository) +
      '/' +
      encodeURIComponent(snapshot) +
      '/' +
      '_status';
  } else if (repository != null) {
    if (method == null) method = 'GET';
    path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_status';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_snapshot' + '/' + '_status';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Verifies a repository.
 *
 * @memberOf API-Snapshot
 *
 * @param {Object} params
 * @param {string} [params.repository] - A repository name
 * @param {string} [params.master_timeout] - (DEPRECATED: use cluster_manager_timeout instead) Explicit operation timeout for connection to master node
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
SnapshotApi.prototype.verifyRepository = function snapshotVerifyRepositoryApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.repository == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository');
    return handleError(err, callback);
  }

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_verify';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

Object.defineProperties(SnapshotApi.prototype, {
  cleanup_repository: {
    get() {
      return this.cleanupRepository;
    },
  },
  create_repository: {
    get() {
      return this.createRepository;
    },
  },
  delete_repository: {
    get() {
      return this.deleteRepository;
    },
  },
  get_repository: {
    get() {
      return this.getRepository;
    },
  },
  repository_analyze: {
    get() {
      return this.repositoryAnalyze;
    },
  },
  verify_repository: {
    get() {
      return this.verifyRepository;
    },
  },
});

module.exports = SnapshotApi;
