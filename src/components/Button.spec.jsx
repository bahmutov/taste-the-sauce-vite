import { test, expect } from '@playwright/experimental-ct-react17'
import Button from './Button'
import { BUTTON_TYPES } from './Button'

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
  await expect(component).toHaveClass(/myClass/)
})

test('sets the test id', async ({ mount }) => {
  // mount the Button with the testId prop set to "myTestId"
  const component = await mount(
    <Button label="Test button" testId="myTestId" />,
  )
  // confirm the button with the text "Test button" has
  // the data-test, name, and id set to "myTestId"
  await expect(component).toHaveAttribute('data-test', 'myTestId')
  await expect(component).toHaveAttribute('name', 'myTestId')
  await expect(component).toHaveAttribute('id', 'myTestId')
})

test('creates a Back button with an arrow image', async ({ mount }) => {
  // mount the Button with the type prop set to "back"
  const component = await mount(
    <Button label="Back" type={BUTTON_TYPES.BACK} />,
  )
  // confirm that inside the button element with class "btn"
  // there is an image with alt text "Go back"
  // and the image loads its source without errors
  const image = component.locator('img[alt="Go back"]')
  await expect(async () => {
    const width = await image.evaluate((node) => node.naturalWidth)
    expect(width, 'image width').toBeGreaterThan(0)
  }).toPass()
  // this solution could also work in this case
  await expect(image).not.toHaveJSProperty('naturalWidth', 0)
})

test('callback prop is called on click', async ({ mount }) => {
  // keep track of the clicked state
  let clicked = false
  // mount the Button with the onClick prop set to a small function
  // that changes "clicked" to true
  const component = await mount(
    <Button
      label="Test button"
      onClick={() => {
        clicked = true
      }}
    />,
  )
  // click the button component
  await component.click()
  // confirm the mock function was called
  // by checking if the "clicked" state is true
  await expect(clicked, 'clicked').toBeTruthy()
})
