/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {},

  afterInstall: function() {
    this.addPackageToProject('victor');
  }
};
