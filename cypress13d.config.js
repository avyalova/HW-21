const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hj3fms",
  video: false,
  env: {
    viewportWidth: 1366,
    viewportHeight: 768,
  },
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});