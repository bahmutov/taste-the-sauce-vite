import { LoginPage } from '@support/pages/login.page'

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
  // remove the item from the cart by clicking the "Remove" button
  // and verify the cart icon badge is removed (after possible delay)
})
