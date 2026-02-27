import { LoginPage } from '@support/pages/login.page'
import type { LoginInfo } from '..'

it('logs out', () => {
  cy.env(['users'])
    .its('users.standard')
    .then((user: LoginInfo) => {
      LoginPage.loginForm(user.username, user.password)
      // we should be on the inventory page
      cy.contains('button', 'Open Menu').click()
      cy.get('.bm-menu-wrap')
        .should('be.visible')
        .contains('.menu-item', 'Logout')
        .click()
      cy.location('pathname').should('equal', '/')
      cy.get('.login-box').should('be.visible')
    })
})
