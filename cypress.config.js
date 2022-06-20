
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1311,
  viewportHeight: 929,
  
  env: {
    MAILOSAUR_API_KEY : "WGm6w9QKScavcduN",
    baseUrl: "https://beu-link.vercel.app/",
    basemailurl: "https://mailosaur.com/app/servers/xvifin8j",
    serverId : 'xvifin8j',
    MAILOSAUR_SERVER_DOMAIN : "test.beu@xvifin8j.mailosaur.net",
    experimentalInteractiveRunEvents: true,
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/report',
      charts: true,
      reportPageTitle: 'Demo Report',
      embeddedScreenshots: true,
  }
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
