import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/home"
import UserDetailsPage from './components/user';

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path="/"  element=<HomePage/> />
        <Route path="/user/:id" element=<UserDetailsPage/> />
      </Routes>
    </div>
  );
};

export default App;