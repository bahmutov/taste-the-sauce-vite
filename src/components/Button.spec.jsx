import { test, expect } from '@playwright/experimental-ct-react17'
import Button from './Button'

// use Sinon.js library to create spies and stubs
// https://sinonjs.org/
import sinon from 'sinon'
const sandbox = sinon.createSandbox()
test.afterEach(() => {
  // reset all spies and stubs after each test
  sandbox.restore()
})

test('callback prop is called on click', async ({ mount }) => {
  // mount the Button with the onClick prop set to a small function
  // that changes "clicked" to true
  // Tip: create the onClick function stub using the Sinon sandbox
  // click the button component
  // confirm the mock function "onClick" was called
})

test('callback prop is called with arguments', async ({ mount }) => {
  // the Button component calls the "onClick" prop with a string
  // confirm the correct string is passed when the button is clicked
  // Tip: use the "stub.calledOnceWithExactly" method to check
})
