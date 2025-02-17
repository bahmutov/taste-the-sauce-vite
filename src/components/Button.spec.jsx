import { test, expect } from '@playwright/experimental-ct-react17'
import Button from './Button'

test('shows a button', async ({ mount }) => {
  // use the mount command to mount the Button component
  // with the prop `label` set to 'Test button'
  const component = await mount(<Button label="Test button" />)
  // confirm the component contains text 'Test button'
  await expect(component).toContainText('Test button')
})

test('passes custom class name', async ({ mount }) => {
  // mount the Button with the customClass prop set to "myClass"
  const component = await mount(
    <Button label="Test button" customClass="myClass" />,
  )
  // confirm the page contains a button with the class "myClass"
})

test('sets the test id', async ({ mount }) => {
  // mount the Button with the testId prop set to "myTestId"
  // confirm the button with the text "Test button" has
  // the data-test, name, and id set to "myTestId"
})
