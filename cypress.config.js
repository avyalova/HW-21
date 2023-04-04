const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "hj3fms",
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
