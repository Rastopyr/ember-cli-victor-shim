var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-victor-shim',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/victor.js');
    this.import('vendor/shims/victor.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'victor', 'build'), {
      files: ['victor.js'],
    });

    return new MergeTrees([vendorTree, momentTree]);
  },
};
