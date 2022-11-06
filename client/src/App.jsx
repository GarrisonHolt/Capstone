import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Create from './pages/create/Create'
import Profile from './pages/profile/Profile'
import Single from './pages/singlePost/Single'
// import { Switch } from '@headlessui/react';



function App() {
  const { user } = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register/> }/>
        <Route path="/login" element={<Login/> }/>
        <Route path="/create" element={<Create/> }/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/posts/:id" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
