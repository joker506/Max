const path = require('path');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/general/_variables.scss";
          @import "@/assets/scss/general/_mixins.scss";
        `
      }
    }
  },
}
