# Changelog

## [1.33.1](https://github.com/grafana/incident/compare/incident-api-node-v1.33.0...incident-api-node-v1.33.1) (2024-05-30)


### Bug Fixes

* add back the severity field inside incident struct ([#5510](https://github.com/grafana/incident/issues/5510)) ([17d8290](https://github.com/grafana/incident/commit/17d8290806adfc667a2a87d46a69e342a004126a))

## [1.33.0](https://github.com/grafana/incident/compare/incident-api-node-v1.32.0...incident-api-node-v1.33.0) (2024-05-15)


### Features

* add query incident previews ([#5410](https://github.com/grafana/incident/issues/5410)) ([6084757](https://github.com/grafana/incident/commit/6084757573572d3246a4c5ebd96e373e4271abe8))

## [1.32.0](https://github.com/grafana/incident/compare/incident-api-node-v1.31.1...incident-api-node-v1.32.0) (2024-05-07)


### Features

* custom severity-frontend and migration  ([#5190](https://github.com/grafana/incident/issues/5190)) ([d522cdd](https://github.com/grafana/incident/commit/d522cddbdff6c10ab185ac268088678c40d7dbae))

## [1.31.1](https://github.com/grafana/incident/compare/incident-api-node-v1.31.0...incident-api-node-v1.31.1) (2024-04-24)


### Bug Fixes

* core-lib should work with eslint consistently; switch to pnpm ([#5259](https://github.com/grafana/incident/issues/5259)) ([ed4f1c3](https://github.com/grafana/incident/commit/ed4f1c3170aed6d4f13ab583822f85c4bb5f032e))

## [1.31.0](https://github.com/grafana/incident/compare/incident-api-node-v1.30.2...incident-api-node-v1.31.0) (2024-04-17)


### Features

* Bump minor version ([902d9fb](https://github.com/grafana/incident/commit/902d9fb1baa095fa6ca5df79890147e8c9dcc284))

## [1.30.2](https://github.com/grafana/incident/compare/incident-api-node-v1.20.0...incident-api-node-v1.30.2) (2023-11-30)


### Miscellaneous Chores

* release v1.30.2 ([#4655](https://github.com/grafana/incident/issues/4655)) ([5a7f044](https://github.com/grafana/incident/commit/5a7f0447ca2a984085706d7e90ee3b035a8f1abe))

## [1.20.0](https://github.com/grafana/incident/compare/incident-api-node-v1.19.0...incident-api-node-v1.20.0) (2023-11-29)


### Features

* Better Slack media in potted items, and file uploading in general ([#4267](https://github.com/grafana/incident/issues/4267)) ([fbb5c0a](https://github.com/grafana/incident/commit/fbb5c0a60422ac16fae4cbec69215be7e25082de))

## [1.19.0](https://github.com/grafana/incident/compare/incident-api-node-v1.18.0...incident-api-node-v1.19.0) (2023-08-31)


### Features

* **timeline:** filter timeline in various ways ([#4199](https://github.com/grafana/incident/issues/4199)) ([1cd8898](https://github.com/grafana/incident/commit/1cd88984745a90ca168f6c6dd5b154693bd0239c))

## [1.18.0](https://github.com/grafana/incident/compare/incident-api-node-v1.9.2...incident-api-node-v1.18.0) (2023-08-18)


### Features

* Add filter language for activity items ([#4119](https://github.com/grafana/incident/issues/4119)) ([d025280](https://github.com/grafana/incident/commit/d02528077e3b18eeb6b2dad28edbc02926ec445a))


### Miscellaneous Chores

* release v1.18.0 ([#4146](https://github.com/grafana/incident/issues/4146)) ([ca34360](https://github.com/grafana/incident/commit/ca343606f3d9836fd5904e1954399a8dca626dea))

## [1.9.2](https://github.com/grafana/incident/compare/incident-api-node-v1.9.1...incident-api-node-v1.9.2) (2023-06-28)


### Bug Fixes

* update oauth2 flow to correctly redirect the user back to the installation screen ([#3868](https://github.com/grafana/incident/issues/3868)) ([5f5db6d](https://github.com/grafana/incident/commit/5f5db6d2537ef3d18857588e7f71e1c88591cd9e)), closes [#3797](https://github.com/grafana/incident/issues/3797) [#3864](https://github.com/grafana/incident/issues/3864)

## [1.9.1](https://github.com/grafana/incident/compare/incident-api-node-v0.4.0...incident-api-node-v1.9.1) (2023-06-26)


### Miscellaneous Chores

* release 1.9.1 ([69eacd4](https://github.com/grafana/incident/commit/69eacd48146d9f54c7a1fc011493b47d182e3c54))

## [0.4.0](https://github.com/grafana/incident/compare/incident-api-node-v0.3.0...incident-api-node-v0.4.0) (2023-06-26)


### Features

* Add grafana-incident node api repo to monorepo ([#3613](https://github.com/grafana/incident/issues/3613)) ([b9020d5](https://github.com/grafana/incident/commit/b9020d56eb14dbaaf0fe079580ff9a2406c266b3))
* added `Hidden` field to integrations (grate) and updated incoming webhook descriptions ([#3685](https://github.com/grafana/incident/issues/3685)) ([5b5cf25](https://github.com/grafana/incident/commit/5b5cf252666085d83995a92ae9414517a1fce408))
* **corelib:** Add corelib; start migrating grafana-incident-app to use it ([#3761](https://github.com/grafana/incident/issues/3761)) ([83c7ac2](https://github.com/grafana/incident/commit/83c7ac2bb375cd9b956458405202c2f97c2b9c8f))
* oto field validation and other protections ([#3657](https://github.com/grafana/incident/issues/3657)) ([476499e](https://github.com/grafana/incident/commit/476499ea2c7e9bdcd1f87d686b4709c51bbc8210))

## [0.3.0](https://github.com/grafana/incident/compare/incident-node-v0.2.0...incident-node-v0.3.0) (2023-06-15)


### Features

* added `Hidden` field to integrations (grate) and updated incoming webhook descriptions ([#3685](https://github.com/grafana/incident/issues/3685)) ([5b5cf25](https://github.com/grafana/incident/commit/5b5cf252666085d83995a92ae9414517a1fce408))

## [0.2.0](https://github.com/grafana/incident/compare/incident-node-v0.1.3...incident-node-v0.2.0) (2023-06-09)


### Features

* Add grafana-incident node api repo to monorepo ([#3613](https://github.com/grafana/incident/issues/3613)) ([b9020d5](https://github.com/grafana/incident/commit/b9020d56eb14dbaaf0fe079580ff9a2406c266b3))
* oto field validation and other protections ([#3657](https://github.com/grafana/incident/issues/3657)) ([476499e](https://github.com/grafana/incident/commit/476499ea2c7e9bdcd1f87d686b4709c51bbc8210))
