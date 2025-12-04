/// <reference types="cypress" />

// time durations branded types
// https://www.learningtypescript.com/articles/branded-types
// https://blog.theodorc.no/posts/branded-types/
// used to represent seconds and milliseconds
// and make it CLEAR which units we are using
// See cypress/e2e/index.ts for conversion functions
type Period<T extends 'ms' | 'seconds'> = number & { __brand: T }
type Milliseconds = Period<'ms'>
type Seconds = Period<'seconds'>

declare namespace Cypress {
  interface Chainable {
    /**
     * Fill the current form (the parent subject)
     * with the given values. The argument is an object
     * with the keys being selectors and values being the strings
     * to type into the input fields.
     * @example
     *  cy.get('form').fillForm({ '#name': 'Joe' }).submit()
     */
    fillForm(selectorsValues: object): Chainable<JQuery<HTMLFormElement>>

    /**
     * Returns elements that have "data-test" attribute with the given value
     * @example
     *  getByTest('checkout').should('be.visible')
     */
    getByTest(testId: string): Chainable<JQuery<HTMLElement>>

    /**
     * Equivalent to cy.wait(ms) but with explicit branded type for milliseconds.
     */
    delay(period: Milliseconds): Chainable<undefined>
  }

  interface Cypress {
    /**
     * Returns an object with configured users
     */
    env(key: 'users'): {
      /**
       * Standard user login information
       */
      standard: import('../e2e').LoginInfo
      lockedOut: import('../e2e').LoginInfo
      problem: import('../e2e').LoginInfo
      glitch: import('../e2e').LoginInfo
    }
  }
}
