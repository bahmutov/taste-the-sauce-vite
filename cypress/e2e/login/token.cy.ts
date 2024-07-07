import { LoginPage } from '@support/pages/login.page'

it('saves the access token', () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')

  // the application saves the current username
  // in the local storage key "user_session_name"
  // check that it is saved
  // https://on.cypress.io/window
  // https://on.cypress.io/then
  cy.window().then((win) => {
    const user = win.localStorage.getItem('user_session_name')
    expect(user, 'username in local storage').to.eq('standard_user')
  })
})
