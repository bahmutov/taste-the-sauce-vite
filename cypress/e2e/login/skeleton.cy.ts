import { LoginPage } from '@support/pages/login.page'

describe('Login form skeleton', () => {
  // visit the login page before each test
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the loading skeleton first', () => {
    // the login container should be visible
    cy.get('#login_button_container').should('be.visible')
    // confirm the skeletons appear and there are more than 2
    cy.get('.skeleton').should('be.visible').and('have.length.greaterThan', 2)
    // skeleton should go away
    cy.get('.skeleton').should('not.exist')
    // and the login form is immediately visible (within 100ms)
    // Tip: use the LoginPage username input field to check
    cy.get(LoginPage.selectors.username, { timeout: 100 }).should('be.visible')
  })
})
