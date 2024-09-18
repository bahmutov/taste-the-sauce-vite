import { LoginInfo } from '.'
import { LoginPage } from '@support/pages/login.page'

/**
 * Returns a string with the formatted price.
 * The input is price in cents.
 * @example
 *  formatPrice(1000) // returns '$10.00'
 */
function formatPrice(price: number) {
  return '$' + (price / 100).toFixed(2)
}

describe('Prices', { viewportHeight: 1200, scrollBehavior: false }, () => {
  const user: LoginInfo = Cypress.env('users').standard

  it('shows the item prices', () => {
    LoginPage.login(user.username, user.password)
    cy.visit('/inventory')
    // we could pass any number for `formatPrice`
    // and the type check would still work 🤔
    const n = 2999
    cy.contains('.inventory_item_price', formatPrice(n))
  })
})
