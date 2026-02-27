import type { LoginInfo } from '../../e2e'

export const LoginPage = {
  // common element selectors we might need
  selectors: {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    form: '.login-box form',
  },

  getUsername() {
    return cy.get(LoginPage.selectors.username)
  },
  getPassword() {
    return cy.get(LoginPage.selectors.password)
  },
  getError() {
    return cy.getByTest('error')
  },
  noErrors() {
    cy.log('**there are no errors**')
    LoginPage.getError().should('not.exist')
    LoginPage.getUsername().should('not.have.class', 'error')
    LoginPage.getPassword().should('not.have.class', 'error')
  },
  // new methods
  getLogin() {
    return cy.getByTest('login-button')
  },
  showsError(text: string) {
    cy.contains('[data-test=error]', text).should('be.visible')
    LoginPage.getUsername().should('have.class', 'error')
    LoginPage.getPassword().should('have.class', 'error')
  },

  /** Closes the error message box */
  closeError() {
    LoginPage.getError().find('button.error-button').realClick()
  },

  /**
   * Logs the user and caches the session
   * @param username
   * @param password
   */
  login(username: string, password: string) {
    // https://on.cypress.io/session
    cy.session(
      `user ${username} login`,
      () => {
        cy.log('**log in**')
        cy.visit('/')
        cy.get(LoginPage.selectors.form).fillForm({
          [LoginPage.selectors.username]: username,
          [LoginPage.selectors.password]: password,
        })
        // confirm the fields were entered correctly
        LoginPage.getUsername().should('have.value', username)
        LoginPage.getPassword().should('have.value', password)
        LoginPage.getLogin().click()
        cy.location('pathname').should('equal', '/inventory')
      },
      {
        validate() {
          cy.log('**validate login session**')
          cy.getCookie('session-username').should('exist')
        },
      },
    )
  },

  /**
   * Logs in using the UI form.
   */
  loginForm(username: string, password: string) {
    cy.visit('/')
    cy.get(LoginPage.selectors.form).fillForm({
      [LoginPage.selectors.username]: username,
      [LoginPage.selectors.password]: password,
    })
    LoginPage.getLogin().click()
    cy.location('pathname').should('equal', '/inventory')
  },

  /**
   * Finds the user account for particular user name
   * and logs in using the session approach.
   */
  loginUser(name: 'standard' | 'problem' | 'lockedOut' | 'glitch') {
    cy.env(['users'])
      .its('users')
      .its(name)
      .then((user: LoginInfo) => {
        LoginPage.login(user.username, user.password)
      })
  },
} as const
