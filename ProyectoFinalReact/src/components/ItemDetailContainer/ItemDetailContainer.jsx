import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null) 

  useEffect(() => {
    (async () => {
      const db = getFirestore()
      const docRef = doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() })
      }
    })()
  }, [id]) 

  if (!product) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer