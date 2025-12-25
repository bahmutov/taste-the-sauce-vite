import React from 'react'
import 'cypress-map'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { mount } from 'cypress/react'

// https://github.com/bahmutov/cypress-code-coverage
import '@bahmutov/cypress-code-coverage/support'

// fontawesome checks the process.env object, so we need to define it
// otherwise we get an error
// Cannot read properties of undefined (reading 'FA_VERSION')
process.env = {}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mountWithRouter', (Component) => {
  return mount(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={Component} />
      </Routes>
    </BrowserRouter>,
  )
})
