import { seconds } from '..'

describe('Waiting with branded types', () => {
  it('waits using seconds and ms', () => {
    cy.visit('/')

    // TODO: use the cy.delay(ms) command
    // write equivalent to "cy.wait(2000)"
    // using explicit branded types "Seconds"
    // and convert it to milliseconds
    cy.delay(seconds(2 as Seconds))
    // write equivalent to "cy.wait(500)"
    // using explicit branded type "Milliseconds"
    cy.delay(500 as Milliseconds)

    // what happens if you do NOT cast the delay period?
  })
})
