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



function App() {
  const { user } = false
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register/> }/>
        <Route path="/login" element={user ? <Home/> : <Login/> }/>
        <Route path="/create" element={user ? <Create/> : <Register/> }/>
        <Route path="/profile" element={user ? <Profile/> : <Register/> }/>
        <Route path="/posts/:id" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
