//
// an experiment with checking Mocha context types in Cypress tests
//
declare namespace Mocha {
  interface MyContext {
    /**
     * The answer to life, the universe, and everything.
     * @example console.log(this.answer) // 42
     */
    answer: number
  }

  /**
   * Callback function used for tests and hooks.
   */
  type MyFunc = (this: MyContext) => void

  interface TestFunction {
    (title: string, fn?: MyFunc): Mocha.Test
  }
}

describe('Mocha context types', () => {
  beforeEach(() => {
    cy.wrap(42).as('answer')
  })

  it('accesses aliased object via this', function () {
    // access the aliased object via "this"
    // and assert its property "answer" is 42
    expect(this.answer, 'answer').to.equal(42)
  })
})
