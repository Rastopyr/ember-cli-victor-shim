# ember-cli-victor-shim

Shim to [victorjs](victorjs.org) npm package.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-victor-shim`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## How to use

Import Paper in you code:

```es6
import Ember from 'ember';
import Victor from 'victor';

export default Ember.Object.extend({
  vector() {
    return new Victor(0, 0)
  }
});
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
