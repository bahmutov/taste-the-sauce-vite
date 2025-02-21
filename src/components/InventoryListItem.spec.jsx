import { test, expect } from '@playwright/experimental-ct-react17'
import InventoryListItem from './InventoryListItem'
import { InventoryData } from '../utils/InventoryData'
import { Route, BrowserRouter } from 'react-router-dom'

test('InventoryListItem loads one item', async ({ mount }) => {
  // take one of the items loaded from the inventory data list
  // and mount the "InventoryListItem" component
  // inside a router
  // <BrowserRouter initialEntries={[]}><Route>...</Route></BrowserRouter>
  const item = InventoryData[3]
  // assert the component is visible
  // assert that the item's name is there
})

// Helper function to mount the component inside a router
// to avoid repeating the router setup in each test
// Note: in the real application, you probably would use Playwright Test Fixtures
// https://playwright.dev/docs/test-fixtures
function mountWithRouter(mountFn, component) {}

test('InventoryListItem loads one item (mount helper)', async ({ mount }) => {
  // rewrite the above test to use the "mountWithRouter" helper function
  // to avoid repeating the router setup
  const item = InventoryData[3]
  // confirm the component is visible
  // and has the correct item name
})
