# Grafana Incident Node API

The Grafana Incident Node client library allows you to access the Grafana Incident API from your Typescript or JavaScript code.

- Get started with the [Grafana Incident API documentation](https://grafana.com/docs/grafana-cloud/incident/api/)
- Or dive deep into the [JavaScript reference docs](https://grafana.com/docs/grafana-cloud/incident/api/reference/node/)

## Installation

```sh
npm install @grafana/incident-node
# or
yarn add @grafana/incident-node
```

## Development

### Dev Commands

This project uses TSDX. Start dev environment with:

```bash
npm start
# or
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Configuration

Set up with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

#### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

#### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

#### Rollup

We use [Rollup](https://rollupjs.org) as a bundler and generate multiple rollup configs for various module formats and build settings.

### Continuous Integration

#### GitHub Actions

Two actions are active:

- `main` which installs `deps` w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

### Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
