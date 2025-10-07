import { LoginPage } from '@support/pages/login.page'

describe('Login form', () => {
  // visit the login page before each test
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows an error for empty username field', () => {
    // click on the login button without
    // entering any of the information
    LoginPage.getLogin().click()
    // the login page should show the error
    // with text "Epic sadface: Username is required"
    LoginPage.showsError('Epic sadface: Username is required')
  })

  it('shows an error for empty password field', () => {
    // enter username "name" into the input field
    // and click the login button
    // without entering the password
    LoginPage.getUsername().type('name')
    LoginPage.getLogin().click()
    // the login page should show the error
    // with text "Epic sadface: Password is required"
    LoginPage.showsError('Epic sadface: Password is required')
  })

  it('is accessible', () => {
    // confirm the login form is visible
    //
    // and check the accessibility of the entire page
    // using the "wick-a11y" plugin
    // https://github.com/sclavijosuero/wick-a11y
    //
    // confirm the a11y check is working by making the form
    // less accessible, for example by removing the placeholder attribute
    // on one of the input fields
    // 1. inspect the error message in the failed tests
    // 2. inspect the generated HTML report
  })
})
