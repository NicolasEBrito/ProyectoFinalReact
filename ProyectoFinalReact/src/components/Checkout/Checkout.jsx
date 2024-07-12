import React, { useState } from 'react'
import { Placeholder } from 'react-bootstrap'
import '../Checkout/Checkout.css'

const Checkout = ({completeOrder}) => {
    const [nameBuyer, setNameBuyer]= useState("")
    const [telBuyer, setTelBuyer]= useState("")
    const [emailBuyer, setEmailBuyer]= useState("")

    const handleCompleteOrder= async (e) =>{
        e.preventDefault()
        const buyer={
            name: nameBuyer,
            tel: telBuyer,
            email: emailBuyer
        }
        await CompleteOrder(buyer)
    }

  return (
    <form onSubmit={(e)=> handleCompleteOrder(e)} className='checkoutBuyer'>
        <input type="text" value={nameBuyer} onChange={(e)=>setNameBuyer(e.target.value)} placeholder='Ingrese su nombre' className='input' required/>
        <input type="number" value={telBuyer} onChange={(e)=> setTelBuyer(e.target.value)} placeholder='Ingrese su número de teléfono' className='input' required />
        <input type="email" value={emailBuyer} onChange={(e)=> setEmailBuyer(e.target.value)} placeholder='Ingrese su email' className='input' required />
        <div className='divBoton1'>
        <button>Finalizar Compra</button>
        </div>
    </form>
  )
}

export default Checkout