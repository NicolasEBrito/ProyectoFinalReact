import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart/CartContext'
import { useNavigate } from 'react-router-dom' 
import '../ItemDetail/ItemDetail.css'
import Count from '../Count/Count'

const ItemDetail = ({product}) => {
  const [count, setCount] = useState(1)
  const { cart, addItemCart } = useContext(CartContext)
  const navigate = useNavigate()

  const addItem = () => {
    addItemCart({ ...product, quantity: count })
    navigate("/cart")
  }

  if (!product) {
    return <div>Cargando producto...</div>
  }

  return (
    <div className='detalleProducto'>
      <h2 className='nombre'>{product.name}</h2>
      <p>{product.description}</p>
      <img src={product.img} alt={product.name} className='imagen' />
      <p>${product.price}</p>
      <div className='divCounter'>
        <Count count={count} handleCount={setCount} stock={product.stock} />
      </div>
      <button onClick={addItem} className='boton'>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail