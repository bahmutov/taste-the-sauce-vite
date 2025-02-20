import React from 'react'
import Button from './Button'

it('renders a button on green background', () => {
  cy.mount(<Button label="Green" />)
  cy.get('button').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})
