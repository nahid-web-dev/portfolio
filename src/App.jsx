import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation();

  function changeMenu() {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className='app-container'>
      <Navbar menu={menu} changeMenu={changeMenu} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
