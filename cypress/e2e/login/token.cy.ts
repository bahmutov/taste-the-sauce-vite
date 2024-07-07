import { LoginPage } from '@support/pages/login.page'

it('saves the access token', () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()

  // the application saves the current username
  // in the local storage key "user_session_name"
  // check that it is saved
  // https://on.cypress.io/window
  // https://on.cypress.io/then
})
