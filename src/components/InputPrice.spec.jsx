import { test, expect } from '@playwright/experimental-ct-react17'
import InputPrice from './InputPrice'

test('renders the InputPrice component', async ({ mount }) => {
  // mount the component using the default price formatter
  const component = await mount(<InputPrice />)
  // initially the formatted price is not displayed
  await expect(component.locator('.price')).not.toBeVisible()
  // type the "9" and confirm the formatted price is "$0.09"
  await component.getByPlaceholder('Enter price (cents)').fill('9')
  await expect(component.locator('.price')).toHaveText('$0.09')
  // type another "9" and confirm the formatted price is "$0.99"
  await component.getByPlaceholder('Enter price (cents)').fill('99')
  await expect(component.locator('.price')).toHaveText('$0.99')
})

test('renders the InputPrice component with custom formatter', async ({
  mount,
}) => {
  const customFormatter = (price) => {
    console.log('formatting', price)
    return `Price: ${price} cents`
  }
  // mount the component with a custom format function above
  // follow the test above and check if the formatted price is displayed
  const component = await mount(<InputPrice priceFormatter={customFormatter} />)
  await expect(component.locator('.price')).not.toBeVisible()

  await component.getByPlaceholder('Enter price (cents)').fill('9')
  await expect(component.locator('.price')).toHaveText('Price: 9 cents')
  await component.getByPlaceholder('Enter price (cents)').fill('99')
  await expect(component.locator('.price')).toHaveText('Price: 99 cents')
})
