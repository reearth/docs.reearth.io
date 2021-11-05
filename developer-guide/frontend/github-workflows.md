---
title: What do Github workflows do
sidebar_position: 7
---

All GitHub workflows spin up and run on the latest Ubuntu and all workflows end in printing to Slack a summary of the results.

## PR Workflow

`.github/workflows/pr.yml`

A workflow that runs on all PRs made in the reearth-web repo. It will run on creation of a PR and any proceeding pushes to GitHub on that branch afterwards. 

After the initial Ubuntu environment setup the PR's branch is checked out through a cache directory and installs any dependencies with `yarn install`. 

At this point `yarn run check` is run to go through all Re:Earth checks that are setup in its package.json. These will include testing for issues in the typings, style issues through lint rules and then it will run any and all unit tests. The results of these tests will be sent as a coverage report appended to the PR through codecov.

Lastly, `yarn run storybook:notify` will be run which will notify of any changes that have occurred to Storybook to the pull request page.

## Main workflow

`.github/workflows/main.yml`

The main workflow runs on each push to the main branch of the repository. After the workflow sets up the environment, it runs `yarn run check`, which does all the main tests that the PR workflow does.

Scheduled to run after this workflow completes are a storybook workflow and a nightly workflow.

### Storybook workflow

`.github/workflows/storybook.yml`

With `yarn run storybook:build` this workflow checks that storybook builds and runs as intended.

### Nightly workflow

Builds and publishes nightly release for the latest commit of the main branch.

## E2E Workflow

`.github/workflows/e2e.yml`

Cypress is setup for End to End testing in Re:Earth. This workflow is scheduled to run Cypress tests Monday to Friday at 3AM.

## Deploy Test Workflow

`.github/workflows/deploy_test.yml`

Scheduled to run after the Nightly workflow completes if everything was successful, the deploy test workflow then spins up the nightly release on GCP at [https://test.reearth.dev](https://test.reearth.dev)

For now, test.reearth.dev is available for only members of the core team. An acceptance test for each sprint will be done there.