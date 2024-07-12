import React, {useState, useEffect}from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import CustomSelect from '../CustomSelect/CustomSelect'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import '../NavBar/NavBar.css'
const NavBar = () => {
  const [categories, setCategories]= useState([])
  const navigate= useNavigate()
  const location = useLocation()
  const {id}= useParams()

  useEffect(()=>{
    (async()=>{
      const db= getFirestore()
      const docsRef= collection(db,"categories")
      const querySnapshot= await getDocs(docsRef)
      setCategories(querySnapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })()
  },[])

  const handleCategorySelected=(id)=>{
    if (id ==="U9DSGMTgkmsK1qJskjiX"){
      navigate("/")
    }else{
      navigate("/category/" + id)
    }
    
  }

  return (
  <nav className="navbarNav">
    <div>
      <Link to="/">Productos</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/orders">Órdenes</Link>
     </div>
     {(location.pathname == "/" || location.pathname.includes("/category"))&&
     <CustomSelect 
        handleCategorySelected={handleCategorySelected}
        categories={categories}/>}
  </nav>

  
  )
}

export default NavBar