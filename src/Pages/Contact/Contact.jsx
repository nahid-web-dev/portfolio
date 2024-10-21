import React from 'react'
import './Contact.css'
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className=' min-h-screen contact-page-container px-36 text-white'>

      <div className="first-part-contact flex justify-between">
        <div className='pt-10'>
          <h2 className=' text-stone-300 text-3xl sm:text-4xl'>/contact-me</h2>
          <h4 className=' text-white text-md pl-10 mt-2'>I love freelancing opportunities</h4>
        </div>
        <div className=' pt-10 text-white mr-20 flex flex-col items-center gap-2 text-2xl cursor-pointer'>
          <span></span>
          <FaLinkedinIn />
          <FiGithub />
        </div>
      </div>

      <div className="second-part-contact flex items-center justify-evenly">
        <h2 className=' text-2xl text-blue-300 italic'>#Contacts</h2>
        <span></span>
      </div>

      <div className="third-part-contact flex justify-between mt-10 items-center text-stone-300 text-sm">
        <p>I'm interested in freelance opportunities. However, if you have other <br /> request or question, don't hesitate to contact me
        </p>
        <div className='msg-box flex flex-col justify-evenly items-center gap-4 py-10 text-stone-300'>
          <h2 className=' text-center text-stone-200 text-xl mb-5'>Message me here</h2>
          <Link to='https://wa.me/880131748895'><FaWhatsapp />What'sApp</Link>
          <a href='mailto:nahid.web.creator@gmail.com'><MdEmail />Email</a>
        </div>
      </div>

      <div className="all-medias flex justify-evenly items-center mt-10">
        <h2 className='text-2xl text-blue-300 italic'>#all-medias</h2>
        <span></span>
      </div>

      <ul className='media-links flex flex-wrap my-20 text-stone-400'>
        <Link to='https://www.linkedin.com/in/al-nahid-b8b543328/' target='_blank'><FaLinkedin className=' text-white' />Linkedin</Link>
        <Link to='https://github.com/nahid-web-dev/' target='_blank'><FaGithub className='text-white' />Github</Link>
        <Link to='#'><IoLogoInstagram className='text-white' />Instagram</Link>
        <Link to='https://www.facebook.com/profile.php?id=100049033221473' target='_blank'><FaFacebook className='text-white' />Facebook</Link>
        <Link to='https://wa.me/880131748895' target='_blank'><RiWhatsappFill className='text-white' />What'sApp</Link>
        <Link to='#'><FaTwitter className='text-white' />Twitter</Link>
      </ul>
    </div>
  )
}

export default Contact