import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";

import ProtectedRoute from "./pages/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/booking" element={<BookingPage />} />

        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
