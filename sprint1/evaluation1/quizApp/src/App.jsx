import { useState } from 'react'
// import { Button } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home'
import LeaderBoard from './components/leaderboard'
import Quiz from './components/quiz'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Quiz' element={<Quiz/>}/>
      <Route path='/LeaderBoard' element={<LeaderBoard/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
