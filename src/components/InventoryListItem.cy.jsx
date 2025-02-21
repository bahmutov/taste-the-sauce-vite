import React from 'react'
import InventoryListItem from './InventoryListItem'
import { InventoryData } from '../utils/InventoryData'
import { Route, BrowserRouter } from 'react-router-dom'

describe('InventoryListItem', () => {
  // shows the failure when we try mounting a component
  // that expects to be inside a router
  it.skip('tries to load one item', () => {
    const item = InventoryData[3]
    cy.mount(<InventoryListItem {...item} />)
  })

  it('loads one item (with router)', () => {
    // take one of the items loaded from the inventory data list
    // and mount the "InventoryListItem" component
    // inside a router
    // <BrowserRouter initialEntries={[]}><Route>...</Route></BrowserRouter>
    const item = InventoryData[3]
    // assert that the item's name is there
    cy.contains('.inventory_item_name', item.name)
  })

  it('loads one item', () => {
    // take one of the items loaded from the inventory data list
    // and mount the "InventoryListItem" component
    const item = InventoryData[3]
    // use cy.mountWithRouter to wrap the component in a router
    // assert that the item's name is there
  })
})
