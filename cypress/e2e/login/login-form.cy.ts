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

  it('shows the loading skeleton first', () => {
    // the login container should be visible
    cy.get('#login_button_container').should('be.visible')
    // confirm the skeletons appear and there are more than 2
    cy.get('.skeleton').should('be.visible').and('have.length.greaterThan', 2)
    // skeleton should go away
    cy.get('.skeleton').should('not.exist')
    // and the login form is immediately visible
    cy.get(LoginPage.selectors.username, { timeout: 100 }).should('be.visible')
  })

  it('skeleton does not move much', () => {
    const skeletonHeading = '.login_credentials_wrap .skeleton-heading'
    const loginCredentials = '.login_credentials_wrap .login_credentials h4'

    cy.get(skeletonHeading)
      .should('be.visible')
      // get the skeleton heading position on the page
      // by grabbing its bounding client rectangle
      .then(($el) => {
        const rect = $el[0].getBoundingClientRect()
        cy.wrap(rect).as('initialRect')
      })
    cy.get(skeletonHeading).should('not.exist')
    // now get the login credentials heading position
    cy.get(loginCredentials)
      .should('be.visible')
      .then(($el) => {
        const finalRect = $el[0].getBoundingClientRect()
        cy.get<DOMRect>('@initialRect').then((initialRect) => {
          // compare the two positions: top and left
          // to ensure that the skeleton and its heading matched closely
          // (within 20 px)
          const tolerance = 20
          expect(initialRect.top, 'top').to.be.closeTo(finalRect.top, tolerance)
          expect(initialRect.left, 'left').to.be.closeTo(
            finalRect.left,
            tolerance,
          )
        })
      })
  })

  // this test uses helpers from cypress-map plugin
  // to simplify the code and get rounded values
  it('skeleton does not move much (rounded)', () => {
    const skeletonHeading = '.login_credentials_wrap .skeleton-heading'
    const loginCredentials = '.login_credentials_wrap .login_credentials h4'
    // a quick little type for rounded top and left values
    type TopLeftRect = {
      top: number
      left: number
    }

    cy.get(skeletonHeading)
      .should('be.visible')
      // get the skeleton heading position on the page
      // by grabbing its bounding client rectangle
      .invokeFirst('getBoundingClientRect')
      .map(['top', 'left'])
      .map({
        top: Math.round,
        left: Math.round,
      })
      .as('initialRect', { type: 'static' })

    cy.get(skeletonHeading).should('not.exist')
    // now get the login credentials heading position
    cy.get(loginCredentials)
      .should('be.visible')
      .invokeFirst('getBoundingClientRect')
      .map(['top', 'left'])
      .map({
        top: Math.round,
        left: Math.round,
      })
      .then((finalRect: TopLeftRect) => {
        cy.get<TopLeftRect>('@initialRect').then((initialRect) => {
          // compare the two positions: top and left
          // to ensure that the skeleton and its heading matched closely
          // (within 20 px)
          const tolerance = 20
          expect(initialRect.top, 'top').to.be.closeTo(finalRect.top, tolerance)
          expect(initialRect.left, 'left').to.be.closeTo(
            finalRect.left,
            tolerance,
          )
        })
      })
  })
})
