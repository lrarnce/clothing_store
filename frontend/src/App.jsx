import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import {Routes, Route, useLocation} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  
  const location = useLocation()
  return (
    <>
     {/* Conditionally render Navbar only if the current path is not "/login" */}
     {location.pathname !== '/login' && <Navbar />}
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
