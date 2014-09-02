# error

[![NPM Version](https://img.shields.io/npm/v/MODULE.svg?style=flat)](https://www.npmjs.org/package/MODULE)
[![NPM Downloads](https://img.shields.io/npm/dm/MODULE.svg?style=flat)](https://www.npmjs.org/package/MODULE)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/jshttp/REPO.svg?style=flat)](https://travis-ci.org/jshttp/REPO)
[![Coverage Status](https://img.shields.io/coveralls/jshttp/REPO.svg?style=flat)](https://coveralls.io/r/jshttp/REPO)

A simple subclass of Error that allows to set http status using chaining api.

## Installation

```bash
$ npm install error
```

## API

```js
var Error = require('error')

var err = new Error('message').http(404)
console.log(err.status)
// 404

throw new Error('message').http(404)
// Error 404: message
//    at new Error (/tmp/error.js:7:16)
//    at Error (/tmp/error.js:5:40)
//    at Object.<anonymous> (/tmp/index.js:6:7)
//    at Module._compile (module.js:456:26)
```

## [MIT Licensed](LICENSE)
