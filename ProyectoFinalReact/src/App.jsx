import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer.jsx'
import CartProvider from './context/cart/CartProvider.jsx'
import OrderContainer from './components/OrderContainer/OrderContainer.jsx';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer.jsx';

const App = () => {

  return (
    <Router>
       <CartProvider> 
        <NavBar/>
          <Routes> 
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/> 
            <Route path="/cart" element ={<ItemCartContainer/>}/>
            <Route path="/orders" element ={<OrderContainer/>}/>
            <Route path="/cart/checkout" element={<CheckoutContainer/>}/>
          </Routes>
        </CartProvider> 
    </Router>
  );
};

export default App;
