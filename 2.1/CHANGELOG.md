# CHANGELOG
Inspired from [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]
### Added
- Add release details to releasing.md ([319](https://github.com/opensearch-project/opensearch-js/pull/319))
- Allow overriding the aws service identifier in AwsSigv4Signer ([333](https://github.com/opensearch-project/opensearch-js/pull/333))
- Added skip-changelog label ([339](https://github.com/opensearch-project/opensearch-js/pull/339))
- Added jsdoc for documentation generation ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Documented Transport#request ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Documented all API methods ([#335](https://github.com/opensearch-project/opensearch-js/issues/335))
- Added point in time APIs ([#348](https://github.com/opensearch-project/opensearch-js/pull/348))
### Dependencies
- Bumps `xmlbuilder2` from 2.4.1 to 3.0.2
- Bumps `minimatch` from 3.0.4 to 3.1.2
- Bumps `eslint` from 7.32.0 to 8.30.0
- Replaced `babel-eslint` with `@babel/eslint-parser`
- Bumps `eslint-plugin-prettier` from 4.0.0 to 4.2.1
- Bumps `minimist` from 1.2.6 to 1.2.7
- Bumps `@aws-sdk/types` from 3.190.0 to 3.226.0
- Bumps `json5` from 2.2.0 to 2.2.3
- Bumps `split2` from 3.2.2 to 4.1.0
- Bumps `@types/node` from 15.14.7 to 18.11.18

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
[Unreleased]: https://github.com/opensearch-project/opensearch-js/compare/2.1...HEAD