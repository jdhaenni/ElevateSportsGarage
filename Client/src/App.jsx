import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './pages/ProtectedRoute';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route
                    path="/protected"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                >
                </Route>
    </Routes>
   </Router>
)}
