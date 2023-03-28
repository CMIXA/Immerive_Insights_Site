import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
// import logo from "./images/logo.png";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
// import "./css/Navbar.css";

function App() {
  return (
    // <Navbar />
    // <Home />

    <div className="App">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
