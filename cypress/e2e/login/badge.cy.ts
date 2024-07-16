import { LoginPage } from '@support/pages/login.page'

it('shows the "new" badge', () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')
})
