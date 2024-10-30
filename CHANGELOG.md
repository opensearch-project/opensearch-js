# CHANGELOG

Inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]
### Added
### Dependencies
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [2.13.0]
### Dependencies
- Bumps `micromatch` from 4.0.7 to 4.0.8
- Bumps `simple-statistics` from 7.8.4 to 7.8.5
- Bumps `simple-git` from 3.25.0 to 3.26.0
- Bumps `@types/node` from 22.5.0 to 22.5.2
### Fixed
- Upgrade `JSON11` from 1.1.2 to 2.0.0 to ensure UTF-8 safety when stringifying JSON data

## [2.12.0]
### Dependencies
- Bumps `@babel/eslint-parser` from 7.24.8 to 7.25.1
- Bumps `@types/node` from 20.14.11 to 22.5.0
- Bumps `aws4` from 1.13.0 to 1.13.1
- Bumps `ora` from 8.0.1 to 8.1.0
- Bumps `simple-statistics` from 7.8.3 to 7.8.4
### Fixed
- Fixed docker-compose command in Makefile ([#845](https://github.com/opensearch-project/opensearch-js/issues/845))

## [2.11.0]
### Changed
- Return a transport object from `AwsSigv4SignerTransport.request` that has an `.abort()` method that allows in-flight requests to be canceled
### Dependencies
- Bumps `@aws-sdk/types` from 3.577.0 to 3.609.0
- Bumps `@babel/eslint-parser` from 7.24.7 to 7.24.8
- Bumps `@types/node` from20.14.2 to 20.14.11
- Bumps `eslint-plugin-prettier` from 5.1.3 to 5.2.1
- Bumps `faker` from 5.5.3 to 6.6.6
- Bumps `prettier` from 3.3.1 to 3.3.3
- Bumps `rimraf` from 5.0.7 to 6.0.1
- Bumps `semver` from 7.6.2 to 7.6.3
- Bumps `simple-git` from 3.24.0 to 3.25.0
- Bumps `ws` from 7.5.9 to 7.5.10
### Fixed
- Add missing types in `package.json` for `aws-v3` ([810](https://github.com/opensearch-project/opensearch-js/pull/810))

## [2.10.0]
### Added
- Added Rollups API ([744](https://github.com/opensearch-project/opensearch-js/issues/744))
- Added Transforms API ([744](https://github.com/opensearch-project/opensearch-js/issues/744))
### Dependencies
- Bumps `@types/node` from 20.14.0 to 20.14.2
- Bumps `@babel/eslint-parser` from 7.24.6 to 7.24.7
- Bumps `prettier` from 3.3.0 to 3.3.1

## [2.9.1]
### Dependencies
- Bumps `json11` from 1.0.4 to 1.1.2
- Bumps `graceful-fs` from 4.2.8 to 4.2.10
- Bumps `picomatch` from 2.3.0 to 2.3.1
### Security
- [CVE-2024-4068] Bumps `braces` from 3.0.2 to 3.0.3
- [CVE-2024-4067] Bumps `micromatch` from 4.0.4 to 4.0.7

## [2.9.0]
### Dependencies
- Bumps `@aws-sdk/types` from 3.535.0 to 3.577.0
- Bumps `@babel/eslint-parser` from 7.24.1 to 7.24.6
- Bumps `@types/node` from 20.12.9 to 20.14.0
- Bumps `semver` from 7.6.0 to 7.6.2
- Bumps `rimraf` from 5.0.5 to 5.0.7
- Bumps `aws4` from 1.12.0 to 1.13.0
- Bumps `prettier` from 3.2.5 to 3.3.0
- Bumps `debug` from 4.3.4 to 4.3.5
### Changed
- Upgraded the parsing and serialization of long numerals to employ JSON11 ([784](https://github.com/opensearch-project/opensearch-js/pull/784)).
### Fixed
- Missing type definitions for `@opensearch-project/opensearch/aws-v3` ([776](https://github.com/opensearch-project/opensearch-js/pull/776)).

## [2.8.0]
### Added
- Added `@opensearch-project/opensearch/aws-v3` import ([758](https://github.com/opensearch-project/opensearch-js/pull/758)).
### Dependencies
- Bumps `@types/node` from 20.12.5 to 20.12.9
- Bumps `semver` from 5.7.1 to 7.6.0
- Bumps `dedent` from 1.5.1 to 1.5.3
- Bumps `jsdoc` from 4.0.2 to 4.0.3
### Changed
- Disabled fail_ci_if_error for upload coverage step in coverage workflow ([#755](https://github.com/opensearch-project/opensearch-js/issues/755)

## [2.7.0]
### Dependencies
- Bumps `@aws-sdk/types` from 3.523.0 to 3.535.0
- Bumps `simple-git` from 3.22.0 to 3.24.0
- Bumps `@types/node` from 20.11.25 to 20.12.5
- Bumps `@babel/eslint-parser` from 7.23.10 to 7.24.1
### Changed
- Added `search_pipeline` ([#716](https://github.com/opensearch-project/opensearch-js/pull/716))

## [2.6.0]
### Added
- Inherit AwsSigV4 in .child ([#725](https://github.com/opensearch-project/opensearch-js/pull/725))
### Dependencies
- Bumps `prettier` from 3.1.1 to 3.2.5
- Bumps `@aws-sdk/types` from 3.485.0 to 3.523.0
- Bumps `@types/node` from 20.10.7 to 20.11.25
- Bumps `eslint-plugin-prettier` from 5.1.2 to 5.1.3
- Bumps `@babel/eslint-parser` from 7.23.3 to 7.23.10
- Bumps `semver` from 7.5.1 to 7.6.0
- Bumps `cross-zip` from 4.0.0 to 4.0.1
- Bumps `eslint` from 8.56.0 to 8.57.0
### Changed
- Updated integration tests to use strong password in OS 2.12 and up ([#707](https://github.com/opensearch-project/opensearch-js/pull/707))
- Simplified client creation in the guides ([#707](https://github.com/opensearch-project/opensearch-js/pull/707))
- Corrected `guides/bulk.md` ([#616](https://github.com/opensearch-project/opensearch-js/issues/616))
### Removed
- Removed AutoHeal([#707](https://github.com/opensearch-project/opensearch-js/pull/707))
### Fixed
- Make optional fields optional in `MappingGenericProperty` ([708](https://github.com/opensearch-project/opensearch-js/pull/708))

## [2.5.0]
### Added
- Added deprecation warnings for Index Template APIs ([654](https://github.com/opensearch-project/opensearch-js/pull/645))
- Added `http` functions: `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put`, and `trace` ([#649](https://github.com/opensearch-project/opensearch-js/pull/649))
- Added `samples/search.js` and updated `guides/search.md` to provide example to search functionality ([#656](https://github.com/opensearch-project/opensearch-js/pull/656))
- Added `samples/msearch.js` and `guides/msearch.md` to provide example to multi-search functionality ([#657](https://github.com/opensearch-project/opensearch-js/pull/657))
- Updated `guides/index_lifecycle.md` to provide example of `ignore_unavailable: true` while deleting indices. ([665](https://github.com/opensearch-project/opensearch-js/pull/665))
- Add expiration buffer to prevent credentials to expire earlier than request may finish in case AWS SDK v3 is used. ([678](https://github.com/opensearch-project/opensearch-js/pull/678))
### Dependencies
- Bumps `@aws-sdk/types` from 3.418.0 to 3.451.0
- Bumps `@types/node` from 20.6.5 to 20.9.0
- Bumps `eslint` from 8.50.0 to 8.54.0
- Bumps `@babel/traverse` from 7.15.0 to 7.23.2
- Bumps `eslint-plugin-prettier` from 5.0.0 to 5.0.1
- Bumps `react-devtools-core` from 4.25.0 to 4.28.4
- Bumps `simple-git` from 3.20.0 to 3.21.0
- Bumps `prettier` from 3.0.3 to 3.1.0
- Bumps `@babel/eslint-parser` from 7.22.15 to 7.23.3
- Bumps `@types/node` from 20.9.0 to 20.10.7
- Bumps `eslint` from 8.54.0 to 8.56.0
- Bumps `@aws-sdk/types` from 3.451.0 to 3.485.0
- Bumps `prettier` from 3.1.0 to 3.1.1
- Bumps `eslint-plugin-prettier` from 5.0.1 to 5.1.2
- Bumps `eslint-config-prettier` from 9.0.0 to 9.1.0
- Bumps `ora` from 7.0.1 to 8.0.1
- Bumps `simple-git` from 3.21.0 to 3.22.0
### Removed
- Removed fixture lines that git-secrets wrongly flagged as passwords/secrets ([654](https://github.com/opensearch-project/opensearch-js/pull/645))
### Fixed
- Add new types to `package.json` exports configuration for ESM support ([#674](https://github.com/opensearch-project/opensearch-js/pull/674))
### Security

## [2.4.0]
### Added
- Added Security API ([#606](https://github.com/opensearch-project/opensearch-js/pull/606))
- Documentation for edge-case in Sigv4Signer ([#622](https://github.com/opensearch-project/opensearch-js/pull/622))
### Dependencies
- Bumps `rimraf` from 5.0.0 to 5.0.5
- Bumps `eslint` from 8.41.0 to 8.50.0
- Bumps `dedent` from 0.7.0 to 1.5.1
- Bumps `@types/node` from 20.2.5 to 20.6.5
- Bumps `@aws-sdk/types` from 3.341.0 to 3.418.0
- Bumps `@babel/eslint-parser` from 7.21.8 to 7.22.15
- Bumps `prettier` from 2.8.8 to 3.0.3
- Bumps `eslint-plugin-prettier` from 4.0.0 to 5.0.0
- Bumps `node-fetch` from 3.3.1 to 3.3.2
- Bumps `tap` from 16.3.4 to 16.3.8
- Bumps `eslint-config-prettier` from 8.8.0 to 9.0.0
- Bumps `ora` from 6.3.1 to 7.0.1
- Bumps `simple-git` from 3.18.0 to 3.20.0
### Changed
- Make handling of long numerals an option that is disabled by default ([#557](https://github.com/opensearch-project/opensearch-js/pull/557))
- Add `enableLongNumeralSupport` to the type definition for `ClientOptions` ([#598](https://github.com/opensearch-project/opensearch-js/pull/598))
### Fixed
- Fix wrong documentation for file serach.md regarding `search_after` param ([#584](https://github.com/opensearch-project/opensearch-js/pull/584))

## [2.3.0]

### Added
- Add serialization and deserialization of numerals larger than `Number.MAX_SAFE_INTEGER` ([#544](https://github.com/opensearch-project/opensearch-js/pull/544))
### Dependencies
- Bumps `prettier` from 2.8.7 to 2.8.8
- Bumps `ora` from 6.1.2 to 6.3.1
- Bumps `@types/node` from 18.15.11 to 20.2.5
- Bumps `eslint` from 8.38.0 to 8.41.0
- Bumps `xmlbuilder2` from 3.0.2 to 3.1.1
- Bumps `simple-git` from 3.17.0 to 3.18.0
- Bumps `@babel/eslint-parser` from 7.21.3 to 7.21.8
- Bumps `@aws-sdk/types` from 3.257.0 to 3.341.0
- Bumps `semver` from 7.3.8 to 7.5.1
- Bumps `node-fetch` from 3.2.10 to 3.3.1
### Changed
- Implemented Docker Image caching for `integration-unreleased` workflow ([#387](https://github.com/opensearch-project/opensearch-js/issues/387))
- Add upgrading NPM to all workflows running older Node.js versions ([#545](https://github.com/opensearch-project/opensearch-js/issues/545))
- Upgrade and secure the backport workflow ([#547](https://github.com/opensearch-project/opensearch-js/issues/547))
### Fixed
- Fixed malformed `bundler.yml` ([#497](https://github.com/opensearch-project/opensearch-js/pull/497))

## [2.2.1]

### Added
- Add release details to releasing.md ([319](https://github.com/opensearch-project/opensearch-js/pull/319))
- Added Amazon OpenSearch Serverless in user_guide ([#372](https://github.com/opensearch-project/opensearch-js/issues/372))
- Add guidelines on installing yarn, dependencies; instructions on running ESLint in developer_guide ([#439](https://github.com/opensearch-project/opensearch-js/issues/435))
- Added pull_request_template ([440](https://github.com/opensearch-project/opensearch-js/pull/440))
- Added guide for Search ([#473](https://github.com/opensearch-project/opensearch-js/pull/489))
### Dependencies
- Bumps `aws4` from 1.11.0 to 1.12.0
- Bumps `minimist` from 1.2.6 to 1.2.8
- Bumps `tsd` from 0.24.1 to 0.27.0
- Bumps `dezalgo` from 1.0.3 to 1.0.4
- Bumps `simple-statistics` from 7.7.0 to 7.8.3
- Bumps `eslint` from 8.30.0 to 8.38.0
- Downgrades `@types/node` from 18.11.19 to 17.0.45
- Bumps `ora` from 5.4.1 to 6.1.2
- Bumps `@aws-sdk/types` from 3.190.0 to 3.257.0
- Bumps `secure-json-parse` from 2.4.0 to 2.7.0
- Bumps `simple-git` from 3.15.1 to 3.17.0
- Bumps `deepmerge` from 4.2.2 to 4.3.1
- Bumps `tap` from 16.3.0 to 16.3.4
- Bumps `rimraf` from 4.1.1 to 5.0.0
- Bumps `@types/node` from 17.0.45 to 18.15.11
- Bumps `caniuse-lite` from 1.0.30001249 to 1.0.30001469
- Bumps `eslint-config-prettier` from 8.6.0 to 8.8.0
- Bumps `split2` from 4.1.0 to 4.2.0
- Bumps `prettier` from 2.8.4 to 2.8.7
- Bumps `jsdoc` from 4.0.0 to 4.0.2
- Bumps `@babel/eslint-parser` from 7.19.1 to 7.21.3
### Changed
- Remove test artifacts from gh_pages workflow ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Make fields in `BulkOperation` optional to match OpenSearch Bulk API requirements ([#378](https://github.com/opensearch-project/opensearch-js/pull/378))
- Remove guidance on using npm and switch completely to yarn in developer_guide ([#439](https://github.com/opensearch-project/opensearch-js/issues/435))
- Change coverage, compatability, integration, integration with unreleased Open Search, node ci, bundler tests not to run on documentation change ([441](https://github.com/opensearch-project/opensearch-js/pull/441))
- Change the Windows yarn installation troubleshoot steps ([455](https://github.com/opensearch-project/opensearch-js/issues/455))
- Make `callback` arg in `BaseConnectionPool`, `CloudConnectionPool` and `ConnectionPool` optional ([#451](https://github.com/opensearch-project/opensearch-js/pull/451))
### Deprecated
- Remove deprecation warnings in bulk.test.js ([#434](https://github.com/opensearch-project/opensearch-js/issues/434))
### Removed
- Remove waitCluster in Integration Tests ([#422](https://github.com/opensearch-project/opensearch-js/issues/422))
### Fixed
- Added missing types for AwsSigv4SignerOptions.service ([#377](https://github.com/opensearch-project/opensearch-js/pull/377))
- Fixed deprecated folder mapping "./" in the "exports" field module resolution ([#416](https://github.com/opensearch-project/opensearch-js/pull/416))

- [CVE-2022-25912] Bumps simple-git from 3.4.0 to 3.15.0 ([#341](https://github.com/opensearch-project/opensearch-js/pull/341))

## [2.2.0]

### Added
- Add release details to releasing.md ([319](https://github.com/opensearch-project/opensearch-js/pull/319))
- Allow overriding the aws service identifier in AwsSigv4Signer ([333](https://github.com/opensearch-project/opensearch-js/pull/333))
- Added skip-changelog label ([339](https://github.com/opensearch-project/opensearch-js/pull/339))
- Added jsdoc for documentation generation ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Documented Transport#request ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Documented all API methods ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Added point in time APIs ([#348](https://github.com/opensearch-project/opensearch-js/pull/348))
- Added support for Amazon OpenSearch Serverless ([#356](https://github.com/opensearch-project/opensearch-js/issues/356))
- Added required `array` argument when invoking `SerializationError` ([#419](https://github.com/opensearch-project/opensearch-js/pull/419))
- Removed unnecessary `data` argument when invoking `OpenSearchClientError` ([#421](https://github.com/opensearch-project/opensearch-js/pull/421))
- Fixed typos in `ConnectionPool` ([#427](https://github.com/opensearch-project/opensearch-js/pull/427))
- Added the solution for the possible error during yarn installation on Windows OS ([#435](https://github.com/opensearch-project/opensearch-js/issues/435))
- Added missing `createConnection` method type definition in `BaseConnectionPool` )([#490](https://github.com/opensearch-project/opensearch-js/pull/490))
### Dependencies
- Bumps `xmlbuilder2` from 2.4.1 to 3.0.2
- Bumps `minimatch` from 3.0.4 to 3.1.2
- Bumps `eslint` from 7.32.0 to 8.32.0
- Replaced `babel-eslint` with `@babel/eslint-parser`
- Bumps `eslint-plugin-prettier` from 4.0.0 to 4.2.1
- Bumps `json5` from 2.2.0 to 2.2.3
- Bumps `split2` from 3.2.2 to 4.1.0
- Bumps `@types/node` from 15.14.7 to 18.11.19
- Bumps `prettier` from 2.7.1 to 2.8.4
- Bumps `hpagent` from 0.1.2 to 1.2.0
- Bumps `eslint-config-prettier` from 8.5.0 to 8.6.0
- Bumps `rimraf` from 3.0.2 to 4.1.1
### Changed
- Remove test artifacts from gh_pages workflow ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Make `TimeoutError` and `RequestAbortedError` classes' `meta` argument optional ([#478](https://github.com/opensearch-project/opensearch-js/pull/478/))
### Security
- [CVE-2022-25912] Bumps simple-git from 3.4.0 to 3.15.0 ([#341](https://github.com/opensearch-project/opensearch-js/pull/341))

## [2.1.0]
### Added
- Github workflow for changelog verification ([#306](https://github.com/opensearch-project/opensearch-js/pull/306))
- Add GitHub and Jenkins release workflow ([#317](https://github.com/opensearch-project/opensearch-js/pull/317))
### Dependencies
- Bumps `tsd` from 0.22.0 to 0.24.1
- Bumps `semver` from 7.3.7 to 7.3.8
### Fixed
- Fix mutability of connection headers ([#291](https://github.com/opensearch-project/opensearch-js/issues/291))