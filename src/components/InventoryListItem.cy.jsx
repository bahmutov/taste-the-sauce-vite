import React from 'react'
import InventoryListItem from './InventoryListItem'
import { InventoryData } from '../utils/InventoryData'

describe('InventoryListItem', () => {
  it('loads one item', () => {
    // take one of the items loaded from the inventory data list
    // and mount the "InventoryListItem" component
    const item = InventoryData[3]
    cy.mountWithRouter(<InventoryListItem {...item} />)
    // assert that the item's name is there
    cy.contains('.inventory_item_name', item.name)
  })
})
