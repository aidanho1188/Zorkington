const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'b4wtq9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
