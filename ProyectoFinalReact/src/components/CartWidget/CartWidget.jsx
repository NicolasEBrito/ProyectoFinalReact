import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CartWidget = () => {
    const {totalQuantityCart}= useContext(CartContext)
  return (
    <div><FontAwesomeIcon icon="fa-solid fa-bag-shopping" /> 
    <span>{totalQuantityCart}</span>
    </div>
  )
}

export default CartWidget