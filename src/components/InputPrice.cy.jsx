import React from 'react'
import InputPrice from './InputPrice'

it('renders the InputPrice component', () => {
  // mount the component using the default price formatter
  cy.mount(<InputPrice />)
  // initially the formatted price is not displayed
  cy.get('.price').should('not.exist')
  // type the "9" and confirm the formatted price is "$0.09"
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('be.visible').and('have.text', '$0.09')
  // type another "9" and confirm the formatted price is "$0.99"
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('have.text', '$0.99')
})

it('renders the InputPrice component with custom formatter', () => {
  const customFormatter = (price) => `Price: ${price} cents`
  // mount the component with a custom format function above
  // follow the test above and check if the formatted price is displayed
  cy.mount(<InputPrice priceFormatter={customFormatter} />)
  cy.get('.price').should('not.exist')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('be.visible').and('have.text', 'Price: 9 cents')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('have.text', 'Price: 99 cents')
})
