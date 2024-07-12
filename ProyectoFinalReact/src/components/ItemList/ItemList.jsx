import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../ItemList/ItemList.css'

const ItemList = ({product}) => {
    const navigate= useNavigate()
  return (
    <div className='card'>
        <h3>{product.name}</h3>
        <img src={product.img} alt="producto" />
        <span>${product.price}</span>
        <button onClick={()=> navigate("/detail/"+product.id)}>Detalles</button>
    </div>
  )
}

export default ItemList