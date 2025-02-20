import React from 'react'
import InventoryListItem from './InventoryListItem'
import { InventoryData } from '../utils/InventoryData'
import { Route, BrowserRouter } from 'react-router-dom'

describe('InventoryListItem', () => {
  it('loads one item (with router)', () => {
    // take one of the items loaded from the inventory data list
    // and mount the "InventoryListItem" component
    // inside a router
    // <BrowserRouter initialEntries={[]}><Route>...</Route></BrowserRouter>
    const item = InventoryData[3]
    cy.mount(
      <BrowserRouter initialEntries={[]}>
        <Route>
          <InventoryListItem {...item} />
        </Route>
      </BrowserRouter>,
    )
    // assert that the item's name is there
    cy.contains('.inventory_item_name', item.name)
  })

  it('loads one item', () => {
    // take one of the items loaded from the inventory data list
    // and mount the "InventoryListItem" component
    const item = InventoryData[3]
    // use cy.mountWithRouter to wrap the component in a router
    cy.mountWithRouter(<InventoryListItem {...item} />)
    // assert that the item's name is there
    cy.contains('.inventory_item_name', item.name)
  })
})
