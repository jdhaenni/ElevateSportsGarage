import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}
