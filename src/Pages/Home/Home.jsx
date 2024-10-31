import React, { useEffect, useState } from 'react'
import './Home.css'
import { FiGitMerge, FiGithub, FiLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BiLogoMongodb } from 'react-icons/bi'
import { IoLogoCss3 } from 'react-icons/io'
import rectangle from '../../assets/rectangle.png'
import { RiBootstrapLine, RiNextjsFill, RiNextjsLine } from 'react-icons/ri'
import pic from '../../assets/pic2.png'
import { FaHtml5, FaNodeJs, FaReact, FaGithub } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiTailwindcss, SiMongodb } from 'react-icons/si'
import { MdEmail, MdOutlineTurnSlightRight } from 'react-icons/md';
import { ImArrowUpRight2 } from 'react-icons/im'

const Home = () => {

  const [typeText, setTypeText] = useState("Freelancer")



  useEffect(() => {
    const texts = ["Freelancer", "React Developer", "Next Developer"]
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % texts.length
      setTypeText(texts[index])
    }, 4000)

    return () => clearInterval(interval)
  }, [])



  return (
    <div className='home-page-container min-h-screen bg-gray-900'>

      <div className='animated-container flex items-center justify-evenly '>

        <div className=' text-white dynamic-part-container sm:w-[430px]'>
          <h2 className=' text-sm sm:text-3xl'>Abdullah Al Nahid</h2>
          <div className=' dynamic-box ml-10'>
            <span className='text-2xl'>is a </span>
            <span className='dynamic-text text-4xl pl-2 relative'>{typeText}</span>
          </div>

        </div>

        <div className=' extra-icons text-4xl text-white flex gap-6 cursor-pointer'>
          <FiGitMerge className=' text-blue-200' />
          <FiGithub className=' text-gray-500' />
          <FiLink className=' text-blue-400' />
        </div>

        <div className={`bg-slate-600 imgBox`}>
          <img src={pic} alt="img" />
        </div>

      </div>

      <div className='second-part-home flex flex-col gap-5 ml-10'>
        <div className=' text-center text-2xl'>
          <span className=' text-blue-400'>Mern </span>
          <span className=' text-slate-300'>Stack</span>
          <MdOutlineTurnSlightRight className=' text-3xl text-white inline-block' />
          <span className=' text-gray-50'>NEXT.JS</span>
        </div>
        <p className=' text-md'>He crafts responsive websites || <br /> where technologies meet creativity</p>
        <div className='ex-links pl-56 flex gap-1'>
          <Link to='/contact'>Contact me!!</Link>
          <Link to='/resume.pdf' target='_blank'>Get Resume</Link>
        </div>
      </div>

      <div className="skill-section mt-28 px-10">
        <h2 className=' text-4xl text-blue-400 flex items-center gap-4'>Skills <hr className='w-[60%]' /></h2>
        <div className="skill-holder flex justify-around items-center">
          <div className='rectangle-img-box '>
            <img src={rectangle} alt="bg-pic" />
          </div>
          <ul className='skill-container flex text-xl flex-wrap justify-evenly text-white '>
            <li><FaReact className=' text-6xl text-blue-500' />React</li>
            <li><SiExpress className=' text-6xl text-indigo-800' />Express</li>
            <li><RiNextjsFill className=' text-6xl text-white' />Next.js</li>
            <li><BiLogoMongodb className=' text-6xl text-green-600' />Mongodb</li>
            <li><SiJavascript className=' text-6xl text-yellow-300' />JS</li>
            <li><IoLogoCss3 className=' text-6xl text-blue-800' />Css</li>
            <li><SiTailwindcss className=' text-6xl text-cyan-400' />Tailwind</li>
            <li><FaNodeJs className=' text-6xl text-green-500' />Node</li>
            <li><FaHtml5 className=' text-6xl text-orange-500' />Html</li>
          </ul></div>
      </div>

      {/* //////////////// */}


      {/* What I Offer Section */}



      {/* /////////////// */}

      <div className=" bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          {/* Introduction Section */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-100">Abdullah Al Nahid</h1>
            <p className="text-lg mt-2 text-gray-400">MERN Stack & Next.js Developer | Tailwind CSS Specialist</p>
          </header>

          {/*Intro Section */}
          <section className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mb-5 sm:mb-10">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4">#Introduction</h2>
            <p className="sm:text-lg text-gray-400">
              I'm a dynamic Full Stack Developer specializing in the MERN Stack (MongoDB, Express, React, Node.js) and Next.js. My expertise
              spans both front-end and back-end development, with a focus on building responsive and scalable web applications. With a deep understanding
              of modern frameworks, I'm passionate about creating seamless user experiences and efficient server-side operations.
            </p>
          </section>


          {/* Projects Section */}
          <div className="projects-section mb-12">
            <h2 className="text-3xl font-semibold text-blue-400 mb-6">Featured Projects</h2>
            <div className="flex flex-wrap justify-between gap-6">

              <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-2xl font-bold text-white">#Art Gallery</h3>
                <p className="text-gray-400 mt-2">A full-stack art gallery platform with dynamic content, built using   <span className=' text-gray-200 underline'>React,</span> and Node.js.</p>
                <div className='my-2'>
                  <h2 className='text-lg text-stone-200'>See :</h2>
                  <Link to='https://naya-canvas.netlify.app/' target='_blank' className=' flex justify-end items-center gap-2 text-blue-300  text-lg underline'>Naya Canvas<ImArrowUpRight2 /></Link>
                </div>
              </div>
              <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-2xl font-bold text-white">#E-commerce Platform</h3>
                <p className="text-gray-400 mt-2">A full-stack <span className=' text-gray-200 underline'>NEXT.JS</span> application for managing products, orders, and user accounts with secure authentication.</p>
                <div className='my-2'>
                  <h2 className='text-lg text-stone-200'>See :</h2>
                  <Link to='https://sleek-lifestyle-next.netlify.app/' target='_blank' className=' flex justify-end items-center gap-2 text-blue-300  text-lg underline'>Sleek Lifestyle<ImArrowUpRight2 /></Link>
                </div>
              </div>
              <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-2xl font-bold text-white">#Food Ordering Page</h3>
                <p className="text-gray-400 mt-2">A full-stack art gallery platform with dynamic content, built using   <span className=' text-gray-200 underline'>React,</span> and Node.js.</p>
                <div className='my-2'>
                  <h2 className='text-lg text-stone-200'>See :</h2>
                  <Link to='https://foodorder-landing-page.netlify.app/' target='_blank' className=' flex justify-end items-center gap-2 text-blue-300  text-lg underline'>Tomato<ImArrowUpRight2 /></Link>
                </div>
              </div>
              <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-2xl font-bold text-white">#Portfolio Website</h3>
                <p className="text-gray-400 mt-2">A responsive personal portfolio built with React.js and styled with <span className=' text-gray-200 underline'>Tailwind</span> CSS.</p>
                <div className='my-2'>
                  <h2 className='text-lg text-stone-200'>See :</h2>
                  <div className=' flex justify-end items-center gap-2  text-lg '>You are already here!</div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-400 mb-4">I'm available for freelance opportunities and collaborations. Reach out!</p>
            <a
              href="mailto:nahid.web.creator@gmail.com"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium"
            >
              <MdEmail className="mr-2" /> Contact Me
            </a>
          </div>
        </div>
      </div>


      {/* /////////// */}

      <div className=" bg-gray-900 text-gray-400 py-10">

        {/* My Expertise Section */}
        <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-200 mb-4">#My Expertise</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-200">End-to-End Web Solutions</h3>
              <p className="sm:text-lg text-gray-400">
                Whether it is front-end development using React and Tailwind CSS, or creating powerful back-end systems with Node.js and Express,
                I provide complete web development solutions tailored to your unique requirements.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-200">Next.js Performance & SEO</h3>
              <p className="sm:text-lg text-gray-400">
                Leveraging the full capabilities of Next.js, I ensure your websites are not only fast and optimized but also SEO-friendly,
                maximizing your online presence with efficient server-side rendering and static site generation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-200">Database Management & Security</h3>
              <p className="sm:text-lg text-gray-400">
                I design scalable databases using MongoDB, ensuring secure and efficient data handling, while keeping performance and security at the forefront.
              </p>
            </div>
          </div>
        </section>

        {/* My Development Approach Section */}
        <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-200 mb-4">#My Development Approach</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-400">
            <li>
              <span className="font-bold text-gray-200">User-Centered Design:</span> I put user experience at the core of my development process, ensuring that every
              interface is intuitive, responsive, and visually engaging.
            </li>
            <li>
              <span className="font-bold text-gray-200">Clean & Maintainable Code:</span> I follow best practices in writing clean, modular, and reusable code
              that is easy to maintain and scale.
            </li>
            <li>
              <span className="font-bold text-gray-200">Agile Methodologies:</span> I believe in iterative development, ensuring continuous collaboration, flexibility,
              and on-time project delivery.
            </li>
            <li>
              <span className="font-bold text-gray-200">Constant Learning:</span> I stay updated with the latest technologies, ensuring that your project benefits from the
              most modern and efficient solutions available.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16">
          <p className="text-gray-500">Contact me for freelance opportunities! </p>
        </footer>
      </div>


    </div>
  )
}

export default Home