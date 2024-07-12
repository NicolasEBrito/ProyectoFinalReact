import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

const ItemCart = ({item}) => {
    const {deleteItemCart}= useContext(CartContext)
  return (
    <div>
        <h3>{item.name}</h3>
        <span>{item.quantity}</span>
        <button onClick={()=> deleteItemCart(item.id)}>Borrar</button>
    </div>
  )
}

export default ItemCart