import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'

const ItemCart = ({item}) => {
    const {deleteItemCart}= useContext(CartContext)
  return (
    <div>
        <h3 className='span1'>{item.name}</h3>
        <span className='span1'>{item.quantity}</span>
        <button onClick={()=> deleteItemCart(item.id)} className='boton2'>Borrar</button>
    </div>
  )
}

export default ItemCart