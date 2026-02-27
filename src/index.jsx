import React from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Inventory from './pages/Inventory'
import InventoryItem from './pages/InventoryItem'
import Cart from './pages/Cart'
import CheckOutStepOne from './pages/CheckOutStepOne'
import CheckOutStepTwo from './pages/CheckOutStepTwo'
import Finish from './pages/Finish'
import { ROUTES } from './utils/Constants'
import PrivateRoute from './components/PrivateRoute'

// if (Cypress) {
//   if ('env' in Cypress) {
//     console.log('All testing variables')
//     console.log(Cypress.env('foo'))
//   }
// }

const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route
        path={ROUTES.INVENTORY}
        element={<PrivateRoute element={<Inventory />} />}
      />
      <Route
        path={ROUTES.INVENTORY_LIST}
        element={<PrivateRoute element={<InventoryItem />} />}
      />
      <Route path={ROUTES.CART} element={<PrivateRoute element={<Cart />} />} />
      <Route
        path={ROUTES.CHECKOUT_STEP_ONE}
        element={<PrivateRoute element={<CheckOutStepOne />} />}
      />
      <Route
        path={ROUTES.CHECKOUT_STEP_TWO}
        element={<PrivateRoute element={<CheckOutStepTwo />} />}
      />
      <Route
        path={ROUTES.CHECKOUT_COMPLETE}
        element={<PrivateRoute element={<Finish />} />}
      />
    </Routes>
  </Router>,
)
