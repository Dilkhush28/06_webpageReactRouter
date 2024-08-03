import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function Layout() {
  return (
    <>
{/*    
    <Header/>
    <Outlet />
    <About />
    <Contact />
    <Footer />
    */}
    <Header />
    <Outlet />
    <Footer />
    //outlet ham isliye laga rhe kyu ki page ko set krna means outlet 
    
    </>
  )
}

export default Layout