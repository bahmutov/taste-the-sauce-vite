import React from 'react'
import 'cypress-map'
import { Route, BrowserRouter } from 'react-router-dom'
import { mount } from 'cypress/react'

// https://www.npmjs.com/package/cypress-plugin-steps
import 'cypress-plugin-steps'

// https://github.com/bahmutov/cypress-code-coverage
import '@bahmutov/cypress-code-coverage/support'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mountWithRouter', (Component) => {
  return mount(
    <BrowserRouter initialEntries={[]}>
      <Route>{Component}</Route>
    </BrowserRouter>,
  )
})
