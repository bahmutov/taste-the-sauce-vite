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
    cy.get(skeletonHeading)
      .should('be.visible')
      .then(($el) => {
        const rect = $el[0].getBoundingClientRect()
        return rect.top
      })
      // round to pixels for nicer comparison
      .then(Math.round)
      .as('initialTop', { type: 'static' })
    cy.get(skeletonHeading).should('not.exist')

    cy.get('@initialTop').then((initialTop) => {
      cy.get(loginCredentials)
        .should('be.visible')
        .then(($el) => {
          const rect = $el[0].getBoundingClientRect()
          return rect.top
        })
        .then(Math.round)
        .should('be.closeTo', initialTop, tolerance)
    })
  })

  it('does not move from the top (cypress-map)', () => {
    // confirm the skeleton heading does NOT change
    // it "top" position on the page too much (within tolerance)
    cy.get(skeletonHeading)
      .should('be.visible')
      .invokeFirst('getBoundingClientRect')
      .its('top')
      // round to pixels for nicer comparison
      .then(Math.round)
      .as('initialTop', { type: 'static' })
    cy.get(skeletonHeading).should('not.exist')

    cy.get('@initialTop').then((initialTop) => {
      cy.get(loginCredentials)
        .should('be.visible')
        .invokeFirst('getBoundingClientRect')
        .its('top')
        .then(Math.round)
        .should('be.closeTo', initialTop, tolerance)
    })
  })
})
