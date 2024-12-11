import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaRegHeart, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from 'react-icons/io'

const Footer = () => {
  return (
    <div className=' bg-[#111827] footer-container mt-20 mx-20 py-5 flex flex-col items-center gap-1 text-white'>
      <h2 className=' text-2xl font-bold'>Abdullah Al Nahid</h2>
      <h3>React Developer and Web Designer</h3>
      <div className=' my-1 text-4xl flex gap-2 text-stone-500'>
        <Link to='https://wa.me/880131748895' target='_blank'><FaWhatsapp className=' text-white' /></Link>
        <Link to='https://github.com/nahid-web-dev/' target='_blank'><FaGithub className=' text-white' /></Link>
        <Link to='https://www.facebook.com/profile.php?id=100049033221473' target='_blank'><IoLogoFacebook className=' text-white' /></Link>
        <Link to='https://www.linkedin.com/in/al-nahid-b8b543328/' target='_blank'><FaLinkedin className=' text-white' /></Link>
      </div>
      <h3 className=' text-sm'>Made with <FaRegHeart className='inline text-red-400' /> using React, Tailwind and more.</h3>
    </div>
  )
}

export default Footer