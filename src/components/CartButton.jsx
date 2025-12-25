import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from '../utils/shopping-cart'
import { ROUTES } from '../utils/Constants'
import './CartButton.css'

const CartButton = () => {
  const navigate = useNavigate()
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

  if (cartContents.length > 0) {
    cartBadge = (
      <span className="shopping_cart_badge">{cartContents.length}</span>
    )
  }

  return (
    <a className="shopping_cart_link" onClick={() => navigate(ROUTES.CART)}>
      {cartBadge}
    </a>
  )
}

export default CartButton
