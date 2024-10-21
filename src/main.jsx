import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: 'about',
        element: <About />
      },

      {
        path: 'contact',
        element: <Contact />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
