import { seconds, ms } from '..'

describe('Waiting with branded types', () => {
  it('waits using seconds and ms', () => {
    cy.visit('/')
    cy.delay(seconds(2))
    cy.delay(ms(500))
  })
})
