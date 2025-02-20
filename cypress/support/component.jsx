import React from 'react'
import { mount } from 'cypress/react'
import { Route, BrowserRouter } from 'react-router-dom'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mountWithRouter', (Component) => {
  return mount(
    <BrowserRouter initialEntries={[]}>
      <Route>{Component}</Route>
    </BrowserRouter>,
  )
})
