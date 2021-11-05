---
title: Contribution guide
sidebar_position: 2
---

## About development

### Open development

Most of the work done on Re:Earth happens directly on [GitHub.](https://github.com/reearth/reearth) Both members of the core team and external contributors can open pull requests which go through the same review process.

If we have any questions about bugs, new features, etc, we'll talk on GitHub issue's or through a PR's comments.

## Release policy

### Semantic versioning

Re:Earth follows [semantic versioning](https://semver.org/). We release patch versions for bug fixes, minor versions for new features or non-essential changes, and major versions for any breaking changes. However, Re:Earth is a web-based application so it seldom has breaking changes which means we hardly release major version updates.  

Every change will be documented in the changelog file.

### Release schedule

Our latest version is released once every 3 weeks, because the core team follows the scrum development style and our sprint period is 3 weeks. 

### Nightly release

We also have a nightly released version which is automatically built from the latest commit of the main branch. If your are interested in using the very latest version see here.

NOTE: The nightly release is not guaranteed to work in a stable manner so it is not considered production ready. 

## Bugs

### How to check known issues

We use [GitHub Issues](https://github.com/reearth/reearth/issues) for our public bugs. We try to keep the issues up-to-date and keep a close eye on them. Before reporting a bug, please make sure an issue for that bug doesn’t already exist.

### If you found new issues

When you find new bugs, try to provide a reproducible case. In addition, to know the situation well please write down any environment details (ie. OS, browser, version, the steps to reproduce, etc).

### If you found any serious vulnerabilities

Please do not open an issue about it to prevent zero-day attacks, and please directly contact `info@reearth.dev`. 

## Contributing

### Code of Conduct

Re:Earth has adopted a Code of Conduct that we expect project participants to follow. Please read [the full text](https://github.com/reearth/reearth/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Contribution process

1. Fork and clone the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a new pull request

For more detail on how to start development, please refer to the getting started of the front-end and back-end documentation.

### Feature requests

If your have any requests for new features all are welcome! Just create an issue [here](https://github.com/reearth/reearth/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

When you request a new feature, please make sure you write why you believe it is needed and what value is given to users.

When you want to develop a relatively large feature, don't just open a PR out of the blue, but first create a proposal issue for the feature in order to build community consensus on the overall picture of the feature.

### Code Review

When your PR is ready, please assign the core team members as reviewers. 

Before you ask us to review, make sure your changes pass all GitHub Actions workflow checks. We won't review anything that is failing. 

After one of us approves your PR, your changes will be merged into the `main` branch and will be available in the nightly release. 

We do the acceptance test at the end of the sprint. If the nightly release is ready for release, it'll be released as a major or minor version at that time. 

If you contribute to our project many times, gaining experience with the codebase, we'll start to ask you to review other's PRs as a maintainer.

PR tips: when you develop big features, try splitting it into smaller PRs and ask us to review. As a large PR, while it is being reviewed, other changes might be merged which have dependencies on the file(s) you've also changed.

### Meetings and Events

We plan to hold events which have workshops and code sprints to let contributors join easily.  To keep updated, please refer to this page.