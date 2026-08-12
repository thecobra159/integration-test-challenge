import {defineConfig} from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on) {
      on(
        "file:preprocessor",
        createBundler({
          bundle: true,
          sourcemap: true,
        })
      );
    },
  },
});