import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Reservation from './Pages/Reservation'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Checkout from './Pages/Checkout'


const App = () => {
  return (
   <>

   <Header />
    <Routes>
      <Route path='/' element={<Layout />}/> 
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/login' element={<LoginSignup />}/>
    </Routes>
    <Footer />

   </>
  )
}

export default App