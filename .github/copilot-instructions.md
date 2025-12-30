This is a project that uses Cypress for end-to-end testing, and follows best practices.

To check if the numbers are sorted, always use the chai-sorted plugin for Cypress, for example:

```js
cy.get('.price').map('innerText').map(parseFloat).should('be.ascending')
```
