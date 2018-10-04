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

Known limitations:
Imports by packahe name are not available due to the `main` property in each `package.json`.
Need to find a solution for deployment and dev mode.
