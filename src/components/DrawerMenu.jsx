import React from 'react'
import { useNavigate } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { ShoppingCart } from '../utils/shopping-cart'
import { ROUTES } from '../utils/Constants'
import { isProblemUser, removeCredentials } from '../utils/Credentials'
import './DrawerMenu.css'

const DrawerMenu = () => {
  const navigate = useNavigate()
  const resetStorage = () => {
    // Wipe out our shopping cart now
    ShoppingCart.resetCart()
  }
  const aboutLink = isProblemUser()
    ? 'https://saucelabs.com/error/404'
    : 'https://saucelabs.com/'

  return (
    <Menu
      customBurgerIcon={
        <img src="/img/menu.png" srcSet="/svg/menu3x.svg" alt="Open Menu" />
      }
      customCrossIcon={
        <img src="/img/close.png" srcSet="/svg/close@3x.svg" alt="Close Menu" />
      }
      outerContainerId={'page_wrapper'}
      pageWrapId={'contents_wrapper'}
      noOverlay
    >
      <a
        id="inventory_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault()
          navigate(ROUTES.INVENTORY)
        }}
      >
        All Items
      </a>
      <a id="about_sidebar_link" className="menu-item" href={aboutLink}>
        About
      </a>
      <a
        id="logout_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault()
          removeCredentials()
          navigate(ROUTES.LOGIN)
        }}
      >
        Logout
      </a>
      <a
        id="reset_sidebar_link"
        className="menu-item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault()
          resetStorage()
        }}
      >
        Reset App State
      </a>
    </Menu>
  )
}

export default DrawerMenu
