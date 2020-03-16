# dependabot-scaffolder

opinionated scaffolder for enabling [Dependabot](https://dependabot.com/) on a
project

<!-- status badges -->

[![Build Status][ci-badge]][ci-link]

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Features](#features)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!-- consumer badges -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/dependabot-scaffolder on RunKit][runkit-badge]][runkit-link]
[![MIT license][license-badge]][license-link]

### Installation

```sh
$ npm install @form8ion/dependabot-scaffolder --save-prod
```

### Features

* Defines a badge that shows whether [Dependabot](https://dependabot.com/) is
  enabled for the project
* Creates the config file for [Dependabot](https://dependabot.com/), enabling
  auto-merging

### Example

#### Import

```javascript
import {scaffold} from '@form8ion/dependabot-scaffolder';
```

#### Execute

```javascript
scaffold({
  projectRoot: process.cwd(),
  vcs: {owner: 'form8ion', name: 'the-repo'}
});
```

## Contributing

<!-- contribution badges -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]

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

[npm-badge]: https://img.shields.io/npm/v/@form8ion/dependabot-scaffolder.svg

[runkit-link]: https://npm.runkit.com/@form8ion/dependabot-scaffolder

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/dependabot-scaffolder.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/dependabot-scaffolder.svg

[ci-link]: https://travis-ci.com/form8ion/dependabot-scaffolder

[ci-badge]: https://img.shields.io/travis/com/form8ion/dependabot-scaffolder/master.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
