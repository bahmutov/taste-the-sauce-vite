/**
 * create a small type on the fly using jsdoc comment
 * just to help type check help us
 */
export interface LoginInfo {
  /**
   * Username for logging in
   */
  username: string
  /**
   * Password for logging in
   */
  password: string
}

//
// branded types for time periods
//

/**
 * Returns milliseconds for the given number of seconds.
 */
export function seconds(s: Seconds): Milliseconds {
  if (typeof s !== 'number' || s < 1) {
    throw new Error(`s() argument must be a positive number, got ${s}`)
  }

  return (s * 1000) as Milliseconds
}

/**
 * Returns milliseconds for the given number of milliseconds.
 * Just useful for clarity.
 */
export function ms(ms: Milliseconds): Milliseconds {
  if (typeof ms !== 'number' || ms < 1) {
    throw new Error(`ms() argument must be a positive number, got ${ms}`)
  }

  return ms as Milliseconds
}

/**
 * Branded type predicate function to let TypeScript know
 * that the given number is of type Milliseconds and is less than 10 minutes.
 * @param n Number to check
 * @returns true if the number is Milliseconds
 * @example
 * ```ts
 * const n = 5000
 * if (isMilliseconds(n)) {
 *   // n is now of type Milliseconds
 *   // there should be no type error
 *   cy.delay(n)
 * }
 * ```
 */
export function isMilliseconds(n: number): n is Milliseconds {
  return typeof n === 'number' && n > 0 && n < 600_000
}

/**
 * Asserts that the given number is of type Milliseconds
 * and is less than 10 minutes.
 * @param n Number to check
 * @example
 * ```ts
 * const n = 5000
 * assertMilliseconds(n)
 * // n is now of type Milliseconds
 * // there should be no type error
 * cy.delay(n)
 * ```
 */
export function assertMilliseconds(n: number): asserts n is Milliseconds {
  if (typeof n !== 'number' || n < 1 || n >= 600_000) {
    throw new Error(`Expected positive number for Milliseconds, got ${n}`)
  }
}
