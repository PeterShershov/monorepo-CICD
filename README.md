[![Build Status](https://travis-ci.com/PeterShershov/sample-monorepo.svg?branch=master)](https://travis-ci.com/PeterShershov/sample-monorepo)

# sample-monorepo

Opinionated monorepo configuration with CI/CD in mind

 - [x] - lerna
 - [x] - babel 7 
 - [x] - travis-ci
 - [x] - eslint
 - [x] - react
 - [x] - css-modules
 - [x] - scss
 - [x] - classnames
 - [x] - storybook
 - [x] - jest
 - [x] - enzyme

## Known limitations
Imports by package name are not available due to the `main` property in each `package.json` that points at the build artifact.

Need to ensure an optimal configuration for dev-mode and deployment.

Suggestions:
- build each test / storybook run
- change the package.json upon deploy
