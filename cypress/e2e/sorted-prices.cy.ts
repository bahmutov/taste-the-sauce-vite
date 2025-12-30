import { LoginPage } from '@support/pages/login.page'

describe('Inventory page', () => {
  // visit the login page before each test
  beforeEach(() => {
    const user = Cypress.env('users').standard
    LoginPage.login(user.username, user.password)
  })

  it('sorts items by price, low to high', () => {
    cy.visit('/inventory')
    cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
    cy.get('.inventory_item_price')
      .map('innerText')
      // slice the leading $
      .mapInvoke('slice', 1)
      .map(parseFloat)
      .print('prices %o')
      // confirm the numbers are sorted in ascending order
      .should('be.ascending')
  })
})
