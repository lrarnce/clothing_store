import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
