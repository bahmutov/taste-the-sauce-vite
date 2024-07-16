import { LoginPage } from '@support/pages/login.page'

// a couple of helper functions for simplicity and readability

function haveRedDotBadge($el: JQuery<HTMLElement>) {
  const badge = window.getComputedStyle($el[0], '::after')
  const backgroundColor = badge.getPropertyValue('background-color')
  expect(backgroundColor, 'red dot').to.equal('rgb(226, 35, 26)')
}

function notHaveDotBadge($el: JQuery<HTMLElement>) {
  const badge = window.getComputedStyle($el[0], '::after')
  const backgroundColor = badge.getPropertyValue('background-color')
  expect(backgroundColor, 'no dot').to.equal('rgba(0, 0, 0, 0)')
}

// make the page taller so we can see the entire inventory
// plus the header component with the cart badge
it('shows the "item in the cart" badge', { viewportHeight: 1600 }, () => {
  cy.visit('/')
  LoginPage.getUsername().type('standard_user')
  LoginPage.getPassword().type('secret_sauce')
  LoginPage.getLogin().click()
  cy.location('pathname').should('equal', '/inventory')

  const itemName = 'Sauce Labs Bike Light'
  cy.contains('.inventory_item', itemName)
    .contains('button', 'Add to cart')
    .click()

  // verify the cart icon has a red dot badge (after possible delay)
  cy.get('.shopping_cart_link').should(haveRedDotBadge)

  // remove the item from the cart by clicking the "Remove" button
  cy.contains('.inventory_item', itemName).contains('button', 'Remove').click()

  // and verify the cart icon badge is removed (after possible delay)
  cy.get('.shopping_cart_link').should(notHaveDotBadge)
})
