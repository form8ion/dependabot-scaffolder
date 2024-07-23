# dependabot-scaffolder

opinionated scaffolder for enabling [Dependabot](https://dependabot.com/) on a
project

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Features](#features)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
  * [API](#api)
    * [`projectRoot` __string__ (_required_)](#projectroot-string-required)
    * [`vcs` __object__ (_required_)](#vcs-object-required)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/dependabot-scaffolder on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/dependabot-scaffolder --save-prod
```

### Features

* Defines a [badge](https://badgen.net/#dependabot) that shows whether [Dependabot](https://dependabot.com/) is
  enabled for the project
* Creates the [config file](https://dependabot.com/docs/config-file/) for [Dependabot](https://dependabot.com/),
  enabling [auto-merging](https://dependabot.com/docs/config-file/#automerged_updates)
* :warning: Currently supports only the `javascript` [`package_manager`](https://dependabot.com/docs/config-file/#package_manager-required)

### Example

#### Import

```javascript
import {lift, predicate, scaffold} from '@form8ion/dependabot-scaffolder';
```

#### Execute

```javascript
(async () => {
  await scaffold({
    projectRoot: process.cwd(),
    vcs: {owner: 'form8ion', name: 'the-repo'}
  });

  if (await predicate({projectRoot: process.cwd()})) {
    await lift();
  }
})();
```

### API

#### `projectRoot` __string__ (_required_)

path to the root of the project

#### `vcs` __object__ (_required_)

* `owner` __string__ (_required_)
  account name on the host service for the repository
* `name` __string__ (_required_)
  repository name

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[npm-link]: https://www.npmjs.com/package/@form8ion/dependabot-scaffolder

[npm-badge]: https://img.shields.io/npm/v/@form8ion/dependabot-scaffolder?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/dependabot-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/dependabot-scaffolder.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/dependabot-scaffolder.svg?logo=opensourceinitiative

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/form8ion/dependabot-scaffolder/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/dependabot-scaffolder/workflows/Node.js%20CI/badge.svg

[coverage-link]: https://codecov.io/github/form8ion/dependabot-scaffolder

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/dependabot-scaffolder?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot
