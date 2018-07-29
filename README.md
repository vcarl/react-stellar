<!--
These are helpful, keep them around until we can publish and actually use them.
[![Build Status](https://travis-ci.org/jaredpalmer/formik.svg?branch=master)](https://travis-ci.org/jaredpalmer/formik)
[![Stable Release](https://img.shields.io/npm/v/formik.svg)](https://npm.im/formik)
[![Next Release](https://img.shields.io/npm/v/formik/next.svg)](https://www.npmjs.com/package/formik/v/next)
[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/formik)
[![gzip size](http://img.badgesize.io/https://unpkg.com/formik@latest/dist/formik.umd.production.js?compression=gzip)](https://unpkg.com/formik@latest/dist/formik.umd.production.js)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
-->

## Overview

react/redux api for interacting with Horizon. Interacts directly with horizon
and exposes an opinionated abstraction over the available resources.

A root provider takes a horizon URL and exposes a number of functions for
requesting resources or building further requests.

```js
<StellarProvider horizonServer="https://...">
  <Payments from to type sentAsset receivedAsset>
  </Payments>
  <Wallet forAccount minBalance>
  </Wallet>
  <Trustlines forAccount>
  </Trustlines>
  <Trades forAccount>
  </Trades>
  <Offers forAccount>
  </Offers>
</Provider>
```

## Authors

* Carl Vitullo [@cvitullo](https://twitter.com/cvitullo)

## Contributors

Made by these folks
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

---

MIT License.

---
