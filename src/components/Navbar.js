import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav className={visible ? "nav nav-fixed" : "nav"}>
      {/* <nav className="nav"> */}
      <div className="navbar">
        <div>
          <a className="title-container" href="/">
            <img className="logo" src={logo} />
            <h1 className="title">Immersive Insights</h1>
          </a>
        </div>
        <ul className="navlinks">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/contactus">Contact us</a>
          </li>
        </ul>
        <div className="login-paid">
          <a href="/login">Log in</a>
          <button>Get paid to test</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
