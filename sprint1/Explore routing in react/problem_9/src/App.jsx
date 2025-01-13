import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'


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
  ]
  return(
    <Routes>
      {
        routeData.map((ele,i)=>{
          return <Route key={i} path={ele.path} element={ele.element}/>
        })
      }
    </Routes>
  )
 
}

export default App
