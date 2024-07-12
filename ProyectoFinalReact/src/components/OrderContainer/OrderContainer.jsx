import { collection, getFirestore, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const OrderContainer = () => {
    const [orders,setOrders]= useState([])
    useEffect(()=>{
        (async ()=>{
            const db= getFirestore()
            const docsRef= collection(db, 'orders')
            const querySnapshot= await getDocs(docsRef)
            setOrders(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()
    },[])
  return (
    <div className='orders'>
      <p className='titulo'>Estos son los id de sus órdenes:</p>
        {orders.map(order=> <div key={order.id}><p>{order.id}</p></div>)}
    </div>
  )
}

export default OrderContainer