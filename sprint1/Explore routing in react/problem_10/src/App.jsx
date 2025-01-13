import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { UserProfile } from './components/userprofile'
import { Users } from './components/users'

function App() {
  

  return (
    <Routes>
      <Route path='/users/:userId' element={<UserProfile/>}/>
      <Route path='/' element={<Users/>}/>
      {/* <Route path='/' exact>
          <h1>Welcome to My User App</h1>
      </Route> */}
    </Routes>
  )
}

export default App
