import React, {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
    const [products, setProducts]=useState([])
    const {id}= useParams()
    const [loader, setLoader]= useState(false)

    useEffect(()=>{
        (async()=>{
            setLoader(true)
            const db=getFirestore()
            if (!id){
              const docsRef= collection(db,'products')
              const querySnapshot= await getDocs(docsRef)
              setProducts(querySnapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
            }else{
            const docsRef= collection(db,'products')
              const q = query(docsRef, where("idcategory","==",id))
              const querySnapshot= await getDocs(q)
              setProducts(querySnapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
            }
            setLoader(false)
        })()
    },[id])

    if (loader) return <Loader/>

  return (
    <div className='cartContainer'>
      {products.map(product=><ItemList key={product.id} product={product}/>)}
    </div> 
  )
}

export default ItemListContainer