import React from 'react'
import { useState } from 'react'

/**
 * Formats the given price in cents to a string representation in dollars.
 *
 * @param {number} price - The price in cents.
 * @returns {string} The formatted price string in dollars.
 * @example defaultPriceFormatter(1234) // "$12.34"
 */
const defaultPriceFormatter = (price) => {
  return '$' + (price / 100).toFixed(2)
}

/**
 * InputPrice component allows users to input a price in cents and displays the formatted price.
 *
 * @param {Object} props - The component props.
 * @param {function} props.priceFormatter - Optional. A function to format the price. Defaults to `defaultPriceFormatter`.
 *
 * @returns {JSX.Element} The rendered InputPrice component.
 */
const InputPrice = ({ priceFormatter }) => {
  const formatter = priceFormatter || defaultPriceFormatter
  const [price, setPrice] = useState()

  return (
    <div className="input-price">
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price (cents)"
      />{' '}
      {!isNaN(price) && <span className="price">{formatter(price)}</span>}
    </div>
  )
}

export default InputPrice
