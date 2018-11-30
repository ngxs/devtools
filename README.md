# NGXS Devtools

[![Greenkeeper badge](https://badges.greenkeeper.io/ngxs/devtools.svg)](https://greenkeeper.io/)

<p align="center">
  <img src="docs/assets/logo.png">
  <br />
  The official Chrome Devtools extension for NGXS - currently in development.
  <br />
  <br />
  <a href="https://now-examples-slackin-eqzjxuxoem.now.sh/"><img src="https://now-examples-slackin-eqzjxuxoem.now.sh/badge.svg"></a> 
</p>


## Architecture

NGXS Devtools is based on a simple Angular CLI project. The devtools use NGXS for state handling - so it should be possible to debug the NGXS Devtools with the NGXS Devtools 😊

## Development

* `yarn start:chrome` runs development mode - Builds the CLI project in watch mode and copies all other assets.
* `yarn build:chrome` builds the project as a Chrome devtools extension (TODO)