import React from 'react'
import Button from './Button'

it('renders a button on green background', () => {
  cy.mount(<Button label="Green" />)
  // confirm the button has a green assertion
  // Tip: use the "have.css" Chai-jQuery assertion
  // https://www.chaijs.com/plugins/chai-jquery/
  cy.get('button').should('have.css', 'background-color', 'rgb(0, 128, 0)')
})
