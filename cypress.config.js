const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "b8r53a",
  fixturesFolder: false,
  supportFile: false,
  pluginsFile: false,
  component: {
    specPattern: "src/**/*.cy.js"
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/*.cy.js"
  }
});
