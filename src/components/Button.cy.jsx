import React from 'react'
import Button from './Button'
import { BUTTON_TYPES } from './Button'

it('shows a button', () => {
  // use the cy.mount command to mount the Button component
  // with the prop `label` set to 'Test button'
  cy.mount(<Button label="Test button" />)
  // confirm the page contains a button with the text 'Test button'
  cy.contains('button', 'Test button')
})

it('passes custom class name', () => {
  // mount the Button with the customClass prop set to "myClass"
  cy.mount(<Button label="Test button" customClass="myClass" />)
  // confirm the page contains a button with the class "myClass"
  cy.get('button.myClass')
})

it('sets the test id', () => {
  // mount the Button with the testId prop set to "myTestId"
  cy.mount(<Button label="Test button" testId="myTestId" />)
  // confirm the button with the text "Test button" has
  // the data-test, name, and id set to "myTestId"
  cy.contains('button', 'Test button')
    .should('have.id', 'myTestId')
    .and('have.attr', 'name', 'myTestId')
    .and('have.attr', 'data-test', 'myTestId')
})

it('creates a Back button with an arrow image', () => {
  cy.mount(<Button label="Back" type={BUTTON_TYPES.BACK} />)
  // confirm that inside the button element with class "btn"
  // there is an image with alt text "Go back"
  // and the image loads its source without errors
  cy.get('button.btn')
    .find('img[alt="Go back"]')
    .should('have.prop', 'naturalWidth')
    .should('be.greaterThan', 0)
})
