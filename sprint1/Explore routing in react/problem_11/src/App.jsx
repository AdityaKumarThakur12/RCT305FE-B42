import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Services } from './components/services'
import './App.css'

function App() {
  let routeData = [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/services",
      element: <Services/>
    },
  ]
  return(
    <Routes>
      {
        routeData.map((ele)=>(
           <Route path={ele.path} element={ele.element}/>
        ))
      }

    </Routes>
  )
}

export default App
