import { test, expect } from '@playwright/experimental-ct-react17'
import Button from './Button'

test('renders a button on green background', async ({ mount }) => {
  const component = await mount(<Button label="Green" />)
  // confirm the button has a green background
  // Tip: use "toHaveCSS" assertion
  // https://playwright.dev/docs/api/class-locatorassertions
  await expect(component).toHaveCSS('background-color', 'rgb(0, 128, 0)')
})
