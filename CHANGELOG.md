# CHANGELOG

Inspired from [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]

### Added

- Add release details to releasing.md ([319](https://github.com/opensearch-project/opensearch-js/pull/319))
- Added Amazon OpenSearch Serverless in user_guide ([#372](https://github.com/opensearch-project/opensearch-js/issues/372))
- Add guidelines on installing yarn, dependencies; instructions on running ESLint in developer_guide ([#439](https://github.com/opensearch-project/opensearch-js/issues/435))
- Added pull_request_template ([440](https://github.com/opensearch-project/opensearch-js/pull/440))

### Dependencies

- Bumps `aws4` from 1.11.0 to 1.12.0
- Bumps `minimist` from 1.2.6 to 1.2.8
- Bumps `tsd` from 0.24.1 to 0.27.0
- Bumps `dezalgo` from 1.0.3 to 1.0.4
- Bumps `simple-statistics` from 7.7.0 to 7.8.3
- Bumps `eslint` from 8.30.0 to 8.33.0
- Downgrades `@types/node` from 18.11.19 to 17.0.45
- Bumps `ora` from 5.4.1 to 6.1.2
- Bumps `@aws-sdk/types` from 3.190.0 to 3.257.0
- Bumps `secure-json-parse` from 2.4.0 to 2.7.0
- Bumps `simple-git` from 3.15.1 to 3.17.0
- Bumps `deepmerge` from 4.2.2 to 4.3.0
- Bumps `tap` from 16.3.0 to 16.3.4
- Bumps `rimraf` from 4.1.1 to 4.4.0
- Bumps `@types/node` from 17.0.45 to 18.15.10
- Bumps `caniuse-lite` from 1.0.30001249 to 1.0.30001469
- Bumps `eslint-config-prettier` from 8.6.0 to 8.8.0
- Bumps `split2` from 4.1.0 to 4.2.0

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

### Security

- [CVE-2022-25912] Bumps simple-git from 3.4.0 to 3.15.0 ([#341](https://github.com/opensearch-project/opensearch-js/pull/341))

## [2.2]

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

### Dependencies

### Changed

- Remove test artifacts from gh_pages workflow ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))

### Deprecated

### Removed

### Fixed

### Security

- [CVE-2022-25912] Bumps simple-git from 3.4.0 to 3.15.0 ([#341](https://github.com/opensearch-project/opensearch-js/pull/341))

## [2.1]

### Added

- Github workflow for changelog verification ([#306](https://github.com/opensearch-project/opensearch-js/pull/306))
- Add GitHub and Jenkins release workflow ([#317](https://github.com/opensearch-project/opensearch-js/pull/317))

### Dependencies

- Bumps `tsd` from 0.22.0 to 0.24.1
- Bumps `semver` from 7.3.7 to 7.3.8

### Fixed

- Fix mutability of connection headers ([#291](https://github.com/opensearch-project/opensearch-js/issues/291))

[2.1]: https://github.com/opensearch-project/opensearch-js/releases/tag/2.1.0
[2.2]: https://github.com/opensearch-project/opensearch-js/releases/tag/2.2.0
[Unreleased]: https://github.com/opensearch-project/opensearch-js/compare/2.2...HEAD