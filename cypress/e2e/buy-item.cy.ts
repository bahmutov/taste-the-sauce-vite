import { LoginInfo } from '.'
import { LoginPage } from '@support/pages/login.page'

describe(
  'User',
  { viewportHeight: 1200, testIsolation: false, scrollBehavior: false },
  () => {
    const user: LoginInfo = Cypress.env('users').standard

    it('logs in', () => {
      LoginPage.login(user.username, user.password)
      cy.visit('/inventory')
    })

    it('selects an item', () => {
      cy.get('.inventory_item')
        .should('have.length.above', 2)
        .first()
        .contains('button', 'Add to cart')
        .click()
      cy.get('.inventory_item').first().contains('button', 'Remove')
    })

    it('goes to the cart', () => {
      cy.get('.shopping_cart_container').click()
      cy.location('pathname').should('equal', '/cart')
    })

    it('goes to checkout', () => {
      cy.contains('button', 'Checkout').click()
      cy.location('pathname').should('equal', '/checkout-step-one')
      cy.get('input[placeholder="First Name"]').type('Joe')
      cy.get('input[placeholder="Last Name"]').type('Smith')
      cy.get('input[placeholder="Zip/Postal Code"]').type('90210')
      cy.get('[data-test=continue]').click()
      cy.location('pathname').should('equal', '/checkout-step-two')
    })

    it('completes the purchase', () => {
      cy.contains('button', 'Finish').click()
      cy.location('pathname').should('equal', '/checkout-complete')
      cy.get('.checkout_complete_container').should('be.visible')
    })
  },
)
