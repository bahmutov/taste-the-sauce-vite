import { LoginInfo } from '.'
import { LoginPage } from '@support/pages/login.page'

// create a "branded type" that represents price in cents
// note that it won't be compatible by default with numbers
// so we need to cast numbers to this type
// see https://www.learningtypescript.com/articles/branded-types
type cents = number & { __brandType: 'cents' }

/**
 * Returns a string with the formatted price.
 * The input is price in cents.
 * @example
 *  formatPrice(1000) // returns '$10.00'
 */
function formatPrice(price: cents) {
  return '$' + (price / 100).toFixed(2)
}

describe('Prices', { viewportHeight: 1200, scrollBehavior: false }, () => {
  const user: LoginInfo = Cypress.env('users').standard

  it('shows the item prices', () => {
    LoginPage.login(user.username, user.password)
    cy.visit('/inventory')
    // declare the price as cents using "<number> as cents"
    // to be able to pass it to "formatPrice" function
    const n = 2999 as cents
    cy.contains('.inventory_item_price', formatPrice(n))
  })
})
