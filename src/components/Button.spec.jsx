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
  const onClick = sandbox.stub()
  const component = await mount(
    <Button label="Test button" onClick={onClick} />,
  )
  // click the button component
  await component.click()
  // confirm the mock function "onClick" was called
  await expect.poll(() => onClick.calledOnce, { message: 'onClick' }).toBe(true)
})
