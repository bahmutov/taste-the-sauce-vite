import { LoginPage } from '@support/pages/login.page'

/*
  see "Login.jsx" code for how the app calls the Notification API

  if (error && window.Notification) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Error', {
          body: error,
        })
      }
    })
  }
*/

it('uses Notifications', () => {
  // stub the browser window Notification API
  // - requestPermission resolves with 'granted'
  // - Notification constructor itself stubbed
  // https://on.cypress.io/stub
  // https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API
  cy.visit('/', {
    onBeforeLoad(win) {},
  })
  LoginPage.getLogin().click()
  // app has requested notification permission
  // app has posted an error notification
})
