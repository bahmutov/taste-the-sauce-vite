import { seconds, isMilliseconds, assertMilliseconds } from '..'

describe('Waiting with branded types', () => {
  it('waits using seconds and ms', () => {
    cy.visit('/')

    // TODO: use the cy.delay(ms) command
    // write equivalent to "cy.wait(2000)"
    // using explicit branded types "Seconds"
    // and convert it to milliseconds
    cy.delay(2)
    // write equivalent to "cy.wait(500)"
    // using explicit branded type "Milliseconds"
    cy.delay(500)

    // what happens if you do NOT cast the delay period?

    // TODO: use "isMilliseconds" type predicate function to guard the delay
    const n = 3000
    if (true) {
      cy.delay(n)
    }

    // TODO: use "assertMilliseconds" function to assert the delay period type
    const m = 300
    cy.delay(m)
  })
})
