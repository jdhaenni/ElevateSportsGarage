import React from 'react'

<<<<<<<<< Temporary merge branch 1
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ServicesPage from './pages/ServicesPage'
import BookingPage from './pages/BookingPage'
import Proshop from './pages/Proshop'
import Footer from './components/footer/Footer'
import NavBar from './components/navigationBar/Navbar'
=========
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navigationBar/Navbar";
>>>>>>>>> Temporary merge branch 2

import ProtectedRoute from './pages/ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'

export default function App () {
  return (
    <Router>
      <NavBar />
      <Routes>
<<<<<<<<< Temporary merge branch 1
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/proshop' element={<Proshop />} />
=========
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
>>>>>>>>> Temporary merge branch 2

        <Route
          path='/protected'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}
