import { LoginPage } from '@support/pages/login.page'

it('shows the "new" badge', () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')

  const newItemTitle = 'Sauce Labs Bike Light'
  // confirm this item has the badge "NEW" after it
  // Tip: see how pseudo-elements like "::after" can be tested
  // https://glebbahmutov.com/cypress-examples
  cy.contains('.inventory_item_name', newItemTitle).then(($el) => {
    const after = window.getComputedStyle($el[0], '::after')
    const afterContent = after.getPropertyValue('content')
    expect(afterContent).to.equal('"NEW"')
  })

  // Part 2: refactor the above code to check
  // the "::after" badge content using queries
  // from cypress-map plugin
  cy.log('**using cypress-map**')
  cy.contains('.inventory_item_name', newItemTitle)
    .applyToFirstRight(window.getComputedStyle, '::after')
    .invoke('getPropertyValue', 'content')
    .should('equal', '"NEW"')
})
