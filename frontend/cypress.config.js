import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // We will test the live site for this initial demo so you don't have to start local servers
    baseUrl: 'https://www.snenviro.org',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
