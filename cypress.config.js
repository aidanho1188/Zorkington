const {defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    experimentalRunAllSpecs: true,
  },
  env: {
    theme: 'dark',
  },
})
