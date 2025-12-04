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
