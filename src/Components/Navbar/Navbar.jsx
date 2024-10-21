import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = ({ menu, changeMenu }) => {
  return (
    <div className={`navbar bg-opacity-70 flex justify-end items-center mb-2 h-16 bg-white sm:px-10 lg:px-36 sticky top-0 z-30
      ${menu ? "navbar-on" : "navbar-off"}
    `}>
      <ul className='nav-links flex gap-20 text-2xl'>
        <li onClick={changeMenu}><NavLink to='/'>#Home</NavLink></li>
        <li onClick={changeMenu}><NavLink to='/about'>#About</NavLink></li>
        <li onClick={changeMenu}><NavLink to='/contact'>#Contact</NavLink></li>
      </ul>
      <div className='menu-bar text-3xl text-white block sm:hidden absolute top-[30px] right-[40px] -translate-y-1/2 ' onClick={changeMenu}>
        {menu ? <MdOutlineRestaurantMenu /> : <AiOutlineMenu />}
      </div>
    </div>
  )
}

export default Navbar