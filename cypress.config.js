const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gymjnp',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto Mantis',
      reportPageTitle: 'Projeto Mantis'
    },
    baseUrl: "http://mantis-prova.base2.com.br/",
    downloadsFolder: 'cypress/downloads',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
