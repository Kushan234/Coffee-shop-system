import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginSignUp from './Components/LoginSignUp'
import Dashboard from './Components/Dashboard/Dashboard'
import Layout from './Layout/Layout'
import AddProduct from './Pages/AddProduct'
import ViewProduct from './Pages/ViewProduct'


const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignUp /> }/>

      <Route element={<Layout />} >
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/addProduct' element={<AddProduct />}/>
      <Route path='/viewProduct' element={ <ViewProduct />}/>
     
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App