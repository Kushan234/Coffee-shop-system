import React from 'react'
import Header from '../Components/Header/Header'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {

    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if( !isAuthenticated ) return <Navigate to={'/'}/>
  return (
    <>
    <Header />
    <Outlet/>
    </>
  )
}

export default Layout