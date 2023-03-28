import React from "react";
// import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
// import logo from "./images/logo.png";
import Navbar from "./components/Navbar";
// import "./css/Navbar.css";

function App() {
  return (
    <Navbar />
    // <Navbar className="Navbar">
    //   <Navbar.Container className="Navbar"></Navbar.Container>
    //   <Navbar.Brand className="Navbar-Brand" href="#home">
    //     <img
    //       src={logo}
    //       width="30"
    //       height="30"
    //       className="d-inline-block align-top"
    //       alt="Immersive Insights logo"
    //     />
    //     Immersive Insights
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <NavDropdown title="Services" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#unmoderated-testing">
    //           Unmoderated Testing
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#moderated-testing">
    //           Moderated Testing
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#user-interviews">
    //           User Interviews
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //       <NavDropdown title="Resources" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#guides">Guides</NavDropdown.Item>
    //         <NavDropdown.Item href="#tools">Tools</NavDropdown.Item>
    //         <NavDropdown.Item href="#glossary">Glossary</NavDropdown.Item>
    //       </NavDropdown>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <Nav.Link href="#about-us">About Us</Nav.Link>
    //       <Nav.Link href="#contact-us">Contact Us</Nav.Link>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#login">Login</Nav.Link>
    //       <Button variant="primary">Get Paid to Test</Button>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default App;
