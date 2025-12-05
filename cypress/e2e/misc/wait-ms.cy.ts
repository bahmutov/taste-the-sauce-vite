import { seconds, assertMilliseconds } from '..'

describe('Waiting with branded types', () => {
  it('waits using seconds and ms', () => {
    cy.visit('/')

    // write equivalent to "cy.wait(500)"
    // using explicit branded type "Milliseconds"
    cy.delay(500 as Milliseconds)
    // wait 3 seconds
    cy.delay(seconds(3 as Seconds))

    const n = 3_000
    assertMilliseconds(n)

    // n is now of type Milliseconds
    cy.delay(n)
  })
})
