import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ShoppingCart } from '../utils/shopping-cart'
import { isProblemUser } from '../utils/Credentials'
import './InventoryListItem.css'
import { ROUTES } from '../utils/Constants'
import Button, { BUTTON_SIZES, BUTTON_TYPES } from './Button'

const InventoryListItem = (props) => {
  const { desc, id, image_url, history, name, price } = props
  const [itemInCart, setItemInCart] = useState(ShoppingCart.isItemInCart(id))

  const addToCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 === 1) {
        return
      }
    }

    ShoppingCart.addItem(itemId)
    setItemInCart(true)
    dataLayer.push({ event: 'addToCart', itemId })
  }

  const removeFromCart = (itemId) => {
    if (isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 === 0) {
        return
      }
    }

    ShoppingCart.removeItem(itemId)
    setItemInCart(false)
    dataLayer.push({ event: 'removeFromCart', itemId })
  }

  let linkId = id
  if (isProblemUser()) {
    linkId += 1
  }
  const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`

  const ButtonType = ({ id, item, itemInCart }) => {
    const label = itemInCart ? 'Remove' : 'Add to cart'
    const onClick = itemInCart ? () => removeFromCart(id) : () => addToCart(id)
    const type = itemInCart ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY
    const testId = `${label}-${item}`.replace(/\s+/g, '-').toLowerCase()

    return (
      <Button
        customClass="btn_inventory"
        label={label}
        onClick={onClick}
        size={BUTTON_SIZES.SMALL}
        testId={testId}
        type={type}
      />
    )
  }
  const url = isProblemUser() ? 'sl-404.jpg' : image_url

  return (
    <div className="inventory_item" data-itemid={id}>
      <div className="inventory_item_img">
        <a
          href="#"
          id={`item_${id}_img_link`}
          onClick={(evt) => {
            evt.preventDefault()
            history.push(itemLink)
          }}
        >
          <img
            alt={name}
            className="inventory_item_img"
            src={`/assets/img/${url}`}
          />
        </a>
      </div>
      <div className="inventory_item_description">
        <div className="inventory_item_label">
          <a
            href="#"
            id={`item_${id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault()
              history.push(itemLink)
            }}
          >
            <div className="inventory_item_name">{name}</div>
          </a>
          <div className="inventory_item_desc">{desc}</div>
        </div>
        <div className="pricebar">
          <div className="inventory_item_price">${price}</div>
          <ButtonType id={id} itemInCart={itemInCart} item={name} />
        </div>
      </div>
    </div>
  )
}

InventoryListItem.propTypes = {
  /**
   * The description of the product
   */
  desc: PropTypes.string.isRequired,
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  /**
   * The id of the list item
   */
  id: PropTypes.number.isRequired,
  /**
   * The url of the image
   */
  image_url: PropTypes.string.isRequired,
  /**
   * The name of the product
   */
  name: PropTypes.string.isRequired,
  /**
   * The price of the product
   */
  price: PropTypes.number.isRequired,
}

export default withRouter(InventoryListItem)
