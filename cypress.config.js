const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      synpressPlugins(on, config);
    },
    testIsolation: true,
    baseUrl: "https://develop.fx-swap-frontend.pages.dev/",
    supportFile: "cypress/support/e2e.js",
    // specPattern: []
  },
});
