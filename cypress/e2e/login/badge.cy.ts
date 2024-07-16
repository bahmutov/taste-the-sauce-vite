import { LoginPage } from '@support/pages/login.page'

it('shows the "new" badge', () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')

  const newItemTitle = 'Sauce Labs Bike Light'
  // confirm this item has the badge "NEW" after it
  // Tip: see how pseudo-elements like "::after" can be tested
  // https://glebbahmutov.com/cypress-examples

  // Part 2: refactor the above code to check
  // the "::after" badge content using queries
  // from cypress-map plugin
})
