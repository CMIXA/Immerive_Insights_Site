import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
