import { LoginPage } from '@support/pages/login.page'
import type { LoginInfo } from '..'

const user: LoginInfo = Cypress.env('users').standard
// we can even check if the user object is valid
if (!user) {
  throw new Error('Missing the standard user')
}

it('logs out', () => {
  LoginPage.login(user.username, user.password)
  cy.visit('/inventory')
  cy.location('pathname').should('equal', '/inventory')
  cy.contains('button', 'Open Menu').click()
  cy.get('.bm-menu-wrap')
    .should('be.visible')
    .contains('.menu-item', 'Logout')
    .click()
  cy.location('pathname').should('equal', '/')
  cy.get('.login-box').should('be.visible')
})
