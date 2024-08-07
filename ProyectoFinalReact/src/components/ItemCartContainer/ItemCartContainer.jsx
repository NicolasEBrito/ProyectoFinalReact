import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'
import '../ItemCartContainer/ItemCartContainer.css'

const ItemCartContainer = () => {
    const {cart, totalPriceCart}= useContext(CartContext)
    const navigate= useNavigate()

  return (
    <div className='cartContainer'>
        {cart.map(item =><ItemCart key={item.id} item={item}/>)}
        <div className='checkout'>
        <p>Total: ${totalPriceCart}</p>
        <button onClick={()=>navigate("/cart/checkout")}>Finalizar Compra</button>
        </div>
    </div>
  )
}

export default ItemCartContainer