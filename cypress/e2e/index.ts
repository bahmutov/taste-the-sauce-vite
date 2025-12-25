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
