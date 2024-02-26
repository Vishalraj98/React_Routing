import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// why we created this file bez industry standerd
function Layout() {
  return (
    <>
  
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout