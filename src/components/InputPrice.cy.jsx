import React from 'react'
import InputPrice from './InputPrice'

it('renders the InputPrice component', () => {
  cy.mount(<InputPrice />)
  cy.get('.price').should('not.exist')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('be.visible').and('have.text', '$0.09')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('have.text', '$0.99')
})

it('renders the InputPrice component with custom formatter', () => {
  const customFormatter = (price) => `Price: ${price} cents`

  cy.mount(<InputPrice priceFormatter={customFormatter} />)
  cy.get('.price').should('not.exist')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('be.visible').and('have.text', 'Price: 9 cents')
  cy.get('[placeholder="Enter price (cents)"]').type('9')
  cy.get('.price').should('have.text', 'Price: 99 cents')
})
