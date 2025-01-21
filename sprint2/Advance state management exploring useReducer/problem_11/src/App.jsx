import { useState } from 'react'
import { Home } from './components/home'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Movies } from './components/movies'
import { Error } from './components/error'

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='singleMovie/:id' element={<Movies/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>

    
    </>
  )
}

export default App
