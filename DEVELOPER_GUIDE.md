- [Developer Guide](#developer-guide)
  - [Getting Started](#getting-started)
    - [Git Clone OpenSearch Node.js Client Repository](#git-clone-opensearch-nodejs-client-repository)
    - [Install Prerequisites](#install-prerequisites)
      - [Node.js](#nodejs)
      - [Yarn](#yarn)
      - [Docker](#docker)
    - [Installing Dependencies](#installing-dependencies)
    - [Using ESLint](#using-eslint)
    - [Unit Testing](#unit-testing)
    - [Integration Testing](#integration-testing)
      - [Execute integration tests from your terminal](#execute-integration-tests-from-your-terminal)

# Developer Guide

So you want to contribute code to the OpenSearch Node.js Client? Excellent! We're glad you're here. Here's what you need to do:

## Getting Started

### Git Clone OpenSearch Node.js Client Repository

Fork [opensearch-project/opensearch-js](https://github.com/opensearch-project/opensearch-js) and clone locally,
e.g. `git clone https://github.com/[your username]/opensearch-js.git`.

### Install Prerequisites

#### Node.js

The minimum supported version of Node.js is v10.

#### Yarn

This project uses yarn as it's package manager. You can use npm to install yarn:

```
npm install --global yarn
```

#### Docker

[Docker](https://docs.docker.com/install/) is required for building some OpenSearch artifacts and executing integration tests.

### Installing Dependencies

To install all the dependencies needed for this project, run

```
yarn install
```
There might be an issue on Windows OS:
```
yarn. ps1 cannot be loaded because running scripts is disabled on this system
```
If this occurs, open Windows PowerShell and run:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Agree to the changes.
Now you can run `yarn install`
If the problem persists, you can try to open Windows PowerShell as an administrator and run:
```
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

### Using ESLint

To do a ESLint check on the project, run:

```
yarn run lint
```

To let ESLint to fix errors in your code automatically, run:

```
yarn run lint:fix
```

This will instruct ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output.

Not all problems are fixable using this option, and some of them you will need to fix manually.

### Unit Testing

Go to your terminal and run:

```
cd folder-path
yarn run test:unit
```

To run a specific unit test, you can use the following jest command. `yarn test` will not work.

```
cd folder-path/to/test
jest TestName
```

If you don't have jest, you can install it via yarn

```
yarn global add jest-cli
```

### Integration Testing

In order to test opensearch-js client, you need a running OpenSearch cluster. You can use Docker to accomplish this.
The [Docker Compose file](.ci/opensearch/docker-compose.yml) supports the ability to run integration tests for the project in local environments.
If you have not installed docker-compose, you can install it from this [link](https://docs.docker.com/compose/install/).

#### Execute integration tests from your terminal

1. Run below command to start containers. By default, it will launch latest OpenSearch cluster.

   ```
   cd folder-path/.ci/opensearch
   docker-compose up
   ```

2. Run all integration tests.
   ```
   yarn run test:integration:helpers
   ```
3. Stop and clean containers.
   ```
   docker-compose down
   ```
