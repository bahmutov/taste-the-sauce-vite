import { LoginPage } from '@support/pages/login.page'

const itemId = 4

beforeEach(() => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')

  cy.get(`.inventory_item[data-itemid="${itemId}"]`)
    .contains('button', 'Add to cart')
    .click()
})

it('controls the URL search params (check the search string)', () => {
  // confirm the URL search params include count of 1
  // and the given item with id
  // https://on.cypress.io/location
  // Q: is the search string always in the same order?
})

it('controls the URL search params (multiple assertions)', () => {
  // confirm the URL search params include count of 1
  // and the given item with id
  // https://on.cypress.io/location
  // check each argument separately
  // using its own assertion
})

it('controls the URL search params (parse URLSearchParams)', () => {
  // confirm the URL search params include count of 1
  // and the given item with id
  // https://on.cypress.io/location
  // and construct the URLSearchParams object
  cy.location('search').should((search) => {})
})

it('has only count and item search params', () => {
  // confirm the URL search params include ONLY count of 1
  // and the given item with id
  // https://on.cypress.io/location
  // convert URLSearchParams to a plain object
  // and use "deep.equal" assertion
  cy.location('search').should((search) => {})
})

it('has only count and item search params (cypress-map)', () => {
  // confirm the URL search params include ONLY count of 1
  // and the given item with id
  // https://on.cypress.io/location
  // use intermediate URLSearchParams object
  // and cypress-map queries
  // Tip: map the properties to their types
  // before comparing the object
  cy.location('search')
})
