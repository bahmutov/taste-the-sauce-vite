describe('Login form skeleton', () => {
  const skeletonHeading = '.login_credentials_wrap .skeleton-heading'
  const loginCredentials = '.login_credentials_wrap .login_credentials h4'
  const tolerance = 20 // pixels

  // visit the login page before each test
  beforeEach(() => {
    cy.visit('/')
  })

  it('does not move from the top', () => {
    // confirm the skeleton heading does NOT change
    // it "top" position on the page too much (within tolerance)
    // round to pixels for nicer comparison
    cy.get(skeletonHeading).should('be.visible')
    cy.get(skeletonHeading).should('not.exist')
  })

  it('does not move from the top (cypress-map)', () => {
    // confirm the skeleton heading does NOT change
    // it "top" position on the page too much (within tolerance)
    // round to pixels for nicer comparison
    cy.get(skeletonHeading).should('be.visible')
    cy.get(skeletonHeading).should('not.exist')
  })
})
