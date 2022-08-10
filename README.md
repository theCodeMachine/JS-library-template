# Re-imagine JS Libraries - Library Template

<p align="center">
<small><b>Click below to create a new GitHub repository using this template:</b></small>
<br/><br/><a href="https://github.com/theCodeMachine/Reimagine-JS-libraries/generate">
<img src="https://img.shields.io/badge/use%20this-template-blue?logo=github">
</a>
</p>

---

**This Web library template** allows you to easily develop, collaborate and publish a web library with all modern tooling from current JavaScript ecosystem.

### Why use this?

One of the main challenges of authoring a library are to have contributions and use standard tooling to build one, Which requires a lot of effort boilerplate: code, testing, coverage, dependencies, release setup, tooling and env(Node, Yarn versions), formatting, linting etc. Goal of this template to provide sensible and modern default to those subject. Once it's all setup, Devs can focus on ⌨️ coding, 🙌 collaborating and 🚀 shipping.

- Ease contributions to your library by providing standard reproducible environment 🙌
- Automate things as much possible (build, test, release and dependency management) 🚀
- Standardize modern tooling ⌨️

## Features

**Environment**

- [Node.js](https://nodejs.org/) version pinning: via [nvm](https://github.com/nvm-sh/nvm), so anyone contributing or any system accessing your library will use the same Node.js version without having to think about it.

**Package Management**

- [Yarn](http://yarnpkg.com/) version pinning: via [Yarn policies](https://classic.yarnpkg.com/en/docs/cli/policies/), so anyone contributing or any system accessing your library will use the same Yarn version without having to think about it.

**Linting and Formatting**

- [ESLint](https://eslint.org/): launched in the `test` script.
- [Prettier](https://prettier.io/): launched in the `test` script, with markdown, JavaScript, CSS and JSON files support (including automatic [`package.json` formatting](https://github.com/matzkoh/prettier-plugin-packagejson)).
- [EditorConfig](https://editorconfig.org/): easy contributions from any code editor.

**Bundler**

- [webpack](https://webpack.js.org/): launched in the `build` script.

**Testing**

- [Jest](https://jestjs.io/): launched in the `test` script, also with the right VSCode settings providing a testing workflow inside VSCode using [`vscode-jest`](https://github.com/jest-community/vscode-jest) extension.
- [Cypress](https://www.cypress.io/): launched on the `test:integration` script. Testing the demo site.

**Coverage**

- [Codecov](https://codecov.io/): launched in the `test` script on CI, ensures code coverage does not decrease on pull requests _(free for public and private repositories)_.

**CI**

- [CircleCI](https://app.circleci.com/): CI pipeline launched on every PR commit or merge.

**Release**

- [semantic-release](https://semantic-release.gitbook.io/semantic-release/): allows for automatic releases based on semver.org and [conventional commits specification](https://www.conventionalcommits.org/). The defaults are taken from the [Angular git commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

**Automation**

- [Husky](https://typicode.github.io/husky/#/) Git hooks setup for formatting code.

**Dependency Management**

- [Renovate](https://renovate.whitesourcesoftware.com/) configurated with the [JavaScript library preset](https://docs.renovatebot.com/presets-config/#configjs-lib): this will automatically update your dependencies by opening pull request for you to approve or not. So you never have to think about it _(free for public and private repositories)_.
- [Dependabot](https://github.com/dependabot): Same like Renovate, will help manage dependencies.

## Setup

There will bit of setup require after you use this template:

1. Make new repository using this template
1. Change package name and description in `package.json`
1. Set Node version: run `nvm use`
1. Install `yarn`
1. Develop your library: change code in lib/
1. Test your library: run `yarn jest --watch`
1. Check formatting of your code: run `yarn lint`
1. Setup release on CI

**Optional**

1. [Install nvm](https://github.com/nvm-sh/nvm)
1. [Install yarn](https://classic.yarnpkg.com/en/docs/install#alternatives-stable)

## Todos/Next Steps

- Generate `README.md` docs automatically
- Default `README.md` docs (Install, API, Examples)
- `create-web-library` command line command to setup everything

## Contributions
