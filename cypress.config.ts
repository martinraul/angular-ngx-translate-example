import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4300', // your dev server
    supportFile: 'cypress/support/e2e.ts', // adjust if different
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    }
  }
});
