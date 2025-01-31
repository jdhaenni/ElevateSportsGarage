import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login';
import Admin from './pages/Admin';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/admin' element={<Admin />}/>
    </Routes>
   </Router>
)}
