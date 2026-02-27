import { defineConfig } from 'cypress'
import registerDataSession from 'cypress-data-session/src/plugin'
// https://github.com/bahmutov/cypress-split
import cypressSplit from 'cypress-split'
// https://github.com/bahmutov/cypress-on-fix
import cypressOnFix from 'cypress-on-fix'
import path from 'path'
// https://github.com/bahmutov/cypress-watch-and-reload
import reloadWatch from 'cypress-watch-and-reload/plugins'

// https://github.com/iFaxity/vite-plugin-istanbul
import IstanbulPlugin from 'vite-plugin-istanbul'

const __dirname = import.meta.dirname

export default defineConfig({
  // TODO: add option to disallow Cypress.env completely
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    experimentalRunAllSpecs: true,
    // split "env" into "env" for sensitive values
    // and "expose" for non-sensitive values
    env: {
      users: {
        standard: {
          username: 'standard_user',
          password: 'secret_sauce',
        },
        lockedOut: {
          username: 'locked_out_user',
          password: 'secret_sauce',
        },
        problem: {
          username: 'problem_user',
          password: 'secret_sauce',
        },
        glitch: {
          username: 'performance_glitch_user',
          password: 'secret_sauce',
        },
      },
      // list the files and file patterns to watch
      'cypress-watch-and-reload': {
        watch: ['src/**'],
      },
    },
    setupNodeEvents(cypressOn, config) {
      // fix https://github.com/cypress-io/cypress/issues/22428
      const on = cypressOnFix(cypressOn)
      // implement node event listeners here
      // and load any plugins that require the Node environment
      cypressSplit(on, config)
      registerDataSession(on, config)
      reloadWatch(on, config)
      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        plugins: [
          IstanbulPlugin({
            include: 'src/*',
            exclude: ['**/*.cy.jsx'],
            extension: ['.js', '.jsx', '.ts', '.tsx'],
          }),
        ],
        resolve: {
          alias: {
            '@cypress': path.resolve(__dirname, 'cypress'),
          },
        },
      },
    },
    supportFile: 'cypress/support/component.jsx',
    // allows components to load resources from the public assets folder
    devServerPublicPathRoute: '',
    setupNodeEvents(cypressOn, config) {
      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config
    },
  },
})
