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

/**
 * Returns milliseconds for the given number of seconds.
 */
export function seconds(ms: number): number {
  return ms * 1000
}

/**
 * Returns milliseconds for the given number of milliseconds.
 * Just useful for clarity.
 */
export function ms(ms: number): number {
  return ms
}
