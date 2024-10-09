import { LoginPage } from '@support/pages/login.page'

it('logs in', () => {
  const user = Cypress.env('users').standard
  LoginPage.login(user.username, user.password)
})
