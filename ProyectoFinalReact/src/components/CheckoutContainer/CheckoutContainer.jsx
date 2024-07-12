import React, { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'
import Swal from 'sweetalert2'

const CheckoutContainer = () => {
    const navigate= useNavigate()
    const {cart,totalPriceCart,clearCart}=useContext(CartContext)
    const completeOrder = async(buyer)=>{
        const order={
            buyer,
            items:cart,
            total: totalPriceCart
        }
        const db= getFirestore()
        const docRef= collection(db,"orders")
        const result = await addDoc(docRef,order)
        cart.map(async item=>{
            const product= await getProductById(item.id)
            const docRef= doc(db,"products", item.id)
             await updateDoc(docRef,{stock:product.stock - item.quantity})
        })
        clearCart()
        Swal.fire({
          title: "Compra Exitosa!",
          text: ("El id de su orden es" + result.id) ,
          icon: "success"
        });
        navigate("/orders")
    }
  return (
    <Checkout/>
  )
}

export default CheckoutContainer