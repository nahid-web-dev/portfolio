import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-400 py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className=" text-2xl sm:text-4xl font-bold text-gray-100">Abdullah Al Nahid</h1>
        <p className=" text-sm sm:text-lg mt-2 text-gray-400">Full Stack Developer (MERN & Next.js) | Tailwind CSS Enthusiast</p>
      </header>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">#About Me</h2>
        <p className="  sm:text-lg text-gray-400">
          Hi there! I'm a passionate and skilled Full Stack MERN || NEXT.JS Developer with a solid background in both front-end and back-end technologies.
          With a deep understanding of HTML, CSS, JavaScript, React, Node.js, Express, Tailwind CSS, and MongoDB, I bring a comprehensive
          approach to web development, ensuring seamless user experiences and efficient server-side operations.
        </p>
      </section>

      {/* What I Offer Section */}
      <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">What I Offer</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-200">Front-End Development</h3>
            <p className=" sm:text-lg text-gray-400">
              Crafting responsive, interactive, and visually appealing interfaces using HTML, CSS, JavaScript, and React. My expertise in
              Tailwind CSS ensures that your designs are not only beautiful but also adhere to modern web standards and best practices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-200">Back-End Development</h3>
            <p className="text-lg text-gray-400">
              Building robust, scalable, and secure server-side applications with Node.js and Express. I excel at designing RESTful APIs
              and managing data with MongoDB to create dynamic web applications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-200">Full Stack Projects</h3>
            <p className="text-lg text-gray-400">
              Experience in developing full-stack applications from the ground up, integrating front-end and back-end technologies to
              deliver complete and polished solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">Why Work With Me?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-400">
          <li><span className="font-bold text-gray-200">Problem-Solving:</span> I thrive on solving complex problems and turning challenges into opportunities for innovation and growth.</li>
          <li><span className="font-bold text-gray-200">Attention to Detail:</span> My meticulous approach ensures that every project is of the highest quality, with a keen eye for both design and functionality.</li>
          <li><span className="font-bold text-gray-200">Communication:</span> I believe in clear and consistent communication, keeping you updated at every stage of the project to ensure alignment and progress toward your goals.</li>
          <li><span className="font-bold text-gray-200">Passion for Learning:</span> Committed to staying updated with the latest trends and technologies in the ever-evolving tech landscape.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16">
        <p className="text-gray-500">Contact me for freelance opportunities! | My CV</p>
      </footer>
    </div>
  )
}

export default About