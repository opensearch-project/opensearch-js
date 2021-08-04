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

'use strict'

const bulkApi = require('./api/bulk')
const CatApi = require('./api/cat')
const clearScrollApi = require('./api/clear_scroll')
const ClusterApi = require('./api/cluster')
const countApi = require('./api/count')
const createApi = require('./api/create')
const DanglingIndicesApi = require('./api/dangling_indices')
const deleteApi = require('./api/delete')
const deleteByQueryApi = require('./api/delete_by_query')
const deleteByQueryRethrottleApi = require('./api/delete_by_query_rethrottle')
const deleteScriptApi = require('./api/delete_script')
const existsApi = require('./api/exists')
const existsSourceApi = require('./api/exists_source')
const explainApi = require('./api/explain')
const FeaturesApi = require('./api/features')
const fieldCapsApi = require('./api/field_caps')
const FleetApi = require('./api/fleet')
const getApi = require('./api/get')
const getScriptApi = require('./api/get_script')
const getScriptContextApi = require('./api/get_script_context')
const getScriptLanguagesApi = require('./api/get_script_languages')
const getSourceApi = require('./api/get_source')
const indexApi = require('./api/index')
const IndicesApi = require('./api/indices')
const infoApi = require('./api/info')
const IngestApi = require('./api/ingest')
const mgetApi = require('./api/mget')
const msearchApi = require('./api/msearch')
const msearchTemplateApi = require('./api/msearch_template')
const mtermvectorsApi = require('./api/mtermvectors')
const NodesApi = require('./api/nodes')
const pingApi = require('./api/ping')
const putScriptApi = require('./api/put_script')
const rankEvalApi = require('./api/rank_eval')
const reindexApi = require('./api/reindex')
const reindexRethrottleApi = require('./api/reindex_rethrottle')
const renderSearchTemplateApi = require('./api/render_search_template')
const scriptsPainlessExecuteApi = require('./api/scripts_painless_execute')
const scrollApi = require('./api/scroll')
const searchApi = require('./api/search')
const searchShardsApi = require('./api/search_shards')
const searchTemplateApi = require('./api/search_template')
const ShutdownApi = require('./api/shutdown')
const SnapshotApi = require('./api/snapshot')
const TasksApi = require('./api/tasks')
const termsEnumApi = require('./api/terms_enum')
const termvectorsApi = require('./api/termvectors')
const updateApi = require('./api/update')
const updateByQueryApi = require('./api/update_by_query')
const updateByQueryRethrottleApi = require('./api/update_by_query_rethrottle')

const { kConfigurationError } = require('./utils')
const kCat = Symbol('Cat')
const kCluster = Symbol('Cluster')
const kDanglingIndices = Symbol('DanglingIndices')
const kFeatures = Symbol('Features')
const kFleet = Symbol('Fleet')
const kIndices = Symbol('Indices')
const kIngest = Symbol('Ingest')
const kNodes = Symbol('Nodes')
const kShutdown = Symbol('Shutdown')
const kSnapshot = Symbol('Snapshot')
const kTasks = Symbol('Tasks')

function ESAPI (opts) {
  this[kConfigurationError] = opts.ConfigurationError
  this[kCat] = null
  this[kCluster] = null
  this[kDanglingIndices] = null
  this[kFeatures] = null
  this[kFleet] = null
  this[kIndices] = null
  this[kIngest] = null
  this[kNodes] = null
  this[kShutdown] = null
  this[kSnapshot] = null
  this[kTasks] = null
  this[kTransform] = null
}

ESAPI.prototype.bulk = bulkApi
ESAPI.prototype.clearScroll = clearScrollApi
ESAPI.prototype.count = countApi
ESAPI.prototype.create = createApi
ESAPI.prototype.delete = deleteApi
ESAPI.prototype.deleteByQuery = deleteByQueryApi
ESAPI.prototype.deleteByQueryRethrottle = deleteByQueryRethrottleApi
ESAPI.prototype.deleteScript = deleteScriptApi
ESAPI.prototype.exists = existsApi
ESAPI.prototype.existsSource = existsSourceApi
ESAPI.prototype.explain = explainApi
ESAPI.prototype.fieldCaps = fieldCapsApi
ESAPI.prototype.get = getApi
ESAPI.prototype.getScript = getScriptApi
ESAPI.prototype.getScriptContext = getScriptContextApi
ESAPI.prototype.getScriptLanguages = getScriptLanguagesApi
ESAPI.prototype.getSource = getSourceApi
ESAPI.prototype.index = indexApi
ESAPI.prototype.info = infoApi
ESAPI.prototype.mget = mgetApi
ESAPI.prototype.msearch = msearchApi
ESAPI.prototype.msearchTemplate = msearchTemplateApi
ESAPI.prototype.mtermvectors = mtermvectorsApi
ESAPI.prototype.ping = pingApi
ESAPI.prototype.putScript = putScriptApi
ESAPI.prototype.rankEval = rankEvalApi
ESAPI.prototype.reindex = reindexApi
ESAPI.prototype.reindexRethrottle = reindexRethrottleApi
ESAPI.prototype.renderSearchTemplate = renderSearchTemplateApi
ESAPI.prototype.scriptsPainlessExecute = scriptsPainlessExecuteApi
ESAPI.prototype.scroll = scrollApi
ESAPI.prototype.search = searchApi
ESAPI.prototype.searchShards = searchShardsApi
ESAPI.prototype.searchTemplate = searchTemplateApi
ESAPI.prototype.termsEnum = termsEnumApi
ESAPI.prototype.termvectors = termvectorsApi
ESAPI.prototype.update = updateApi
ESAPI.prototype.updateByQuery = updateByQueryApi
ESAPI.prototype.updateByQueryRethrottle = updateByQueryRethrottleApi

Object.defineProperties(ESAPI.prototype, {
  cat: {
    get () {
      if (this[kCat] === null) {
        this[kCat] = new CatApi(this.transport, this[kConfigurationError])
      }
      return this[kCat]
    }
  },
  clear_scroll: { get () { return this.clearScroll } },
  cluster: {
    get () {
      if (this[kCluster] === null) {
        this[kCluster] = new ClusterApi(this.transport, this[kConfigurationError])
      }
      return this[kCluster]
    }
  },
  danglingIndices: {
    get () {
      if (this[kDanglingIndices] === null) {
        this[kDanglingIndices] = new DanglingIndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kDanglingIndices]
    }
  },
  dangling_indices: { get () { return this.danglingIndices } },
  delete_by_query: { get () { return this.deleteByQuery } },
  delete_by_query_rethrottle: { get () { return this.deleteByQueryRethrottle } },
  delete_script: { get () { return this.deleteScript } },
  exists_source: { get () { return this.existsSource } },
  features: {
    get () {
      if (this[kFeatures] === null) {
        this[kFeatures] = new FeaturesApi(this.transport, this[kConfigurationError])
      }
      return this[kFeatures]
    }
  },
  field_caps: { get () { return this.fieldCaps } },
  fleet: {
    get () {
      if (this[kFleet] === null) {
        this[kFleet] = new FleetApi(this.transport, this[kConfigurationError])
      }
      return this[kFleet]
    }
  },
  get_script: { get () { return this.getScript } },
  get_script_context: { get () { return this.getScriptContext } },
  get_script_languages: { get () { return this.getScriptLanguages } },
  get_source: { get () { return this.getSource } },
  indices: {
    get () {
      if (this[kIndices] === null) {
        this[kIndices] = new IndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kIndices]
    }
  },
  ingest: {
    get () {
      if (this[kIngest] === null) {
        this[kIngest] = new IngestApi(this.transport, this[kConfigurationError])
      }
      return this[kIngest]
    }
  },
  msearch_template: { get () { return this.msearchTemplate } },
  nodes: {
    get () {
      if (this[kNodes] === null) {
        this[kNodes] = new NodesApi(this.transport, this[kConfigurationError])
      }
      return this[kNodes]
    }
  },
  put_script: { get () { return this.putScript } },
  rank_eval: { get () { return this.rankEval } },
  reindex_rethrottle: { get () { return this.reindexRethrottle } },
  render_search_template: { get () { return this.renderSearchTemplate } },
  scripts_painless_execute: { get () { return this.scriptsPainlessExecute } },
  search_shards: { get () { return this.searchShards } },
  search_template: { get () { return this.searchTemplate } },
  shutdown: {
    get () {
      if (this[kShutdown] === null) {
        this[kShutdown] = new ShutdownApi(this.transport, this[kConfigurationError])
      }
      return this[kShutdown]
    }
  },
  snapshot: {
    get () {
      if (this[kSnapshot] === null) {
        this[kSnapshot] = new SnapshotApi(this.transport, this[kConfigurationError])
      }
      return this[kSnapshot]
    }
  },
  tasks: {
    get () {
      if (this[kTasks] === null) {
        this[kTasks] = new TasksApi(this.transport, this[kConfigurationError])
      }
      return this[kTasks]
    }
  },
  terms_enum: { get () { return this.termsEnum } },
  transform: {
    get () {
      if (this[kTransform] === null) {
        this[kTransform] = new TransformApi(this.transport, this[kConfigurationError])
      }
      return this[kTransform]
    }
  },
  update_by_query: { get () { return this.updateByQuery } },
  update_by_query_rethrottle: { get () { return this.updateByQueryRethrottle } }
})

module.exports = ESAPI
