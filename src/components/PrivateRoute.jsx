import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../utils/Credentials'
import { ROUTES } from '../utils/Constants'

const PrivateRoute = ({ element }) => {
  const location = useLocation()

  if (!isLoggedIn()) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return element
}

PrivateRoute.propTypes = {
  /**
   * A react component
   */
  element: PropTypes.element.isRequired,
}

export default PrivateRoute
