import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import './fontawesome.js'

const firebaseConfig = {
  apiKey: "AIzaSyDyOmn6P-vJNpnx7kLt3WcHHePHyT0ZH5s",
  authDomain: "mahoraga-store.firebaseapp.com",
  projectId: "mahoraga-store",
  storageBucket: "mahoraga-store.appspot.com",
  messagingSenderId: "374978311677",
  appId: "1:374978311677:web:60edfe6f6768eda7275594",
  measurementId: "G-N8XYS4TPDM"
};
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
