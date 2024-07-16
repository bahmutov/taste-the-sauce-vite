import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ShoppingCart } from '../utils/shopping-cart'
import { ROUTES } from '../utils/Constants'
import './CartButton.css'

const CartButton = (props) => {
  const { history } = props
  let cartBadge = ''
  const [cartContents, setCartContents] = useState(
    ShoppingCart.getCartContents(),
  )
  const cartListener = {
    forceUpdate: () => setCartContents(ShoppingCart.getCartContents()),
  }

  useEffect(() => {
    ShoppingCart.registerCartListener(cartListener)
  }, [])

  const hasItems = cartContents.length > 0

  const className = `shopping_cart_link ${hasItems ? 'shopping_cart_link_with_items' : ''}`
  return (
    <a className={className} onClick={() => history.push(ROUTES.CART)}>
      {cartBadge}
    </a>
  )
}

CartButton.propTypes = {
  /**
   * The history
   */
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(CartButton)
