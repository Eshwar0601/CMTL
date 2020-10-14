import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowNavbar() {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand to="/">
          <img src={require("../assests/images/logo.png")} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/about" className="nav-link text-white">
              ABOUT US
            </Link>
            <Link to="/" className="nav-link text-white">
              HOME
            </Link>
            <Link to="/services" className="nav-link text-white">
              SERVICES
            </Link>
            <Link to="/projects" className="nav-link text-white">
              PROJECTS
            </Link>
            <Link to="/clients" className="nav-link text-white">
              CLIENTS
            </Link>
            <Link to="/gallery" className="nav-link text-white">
              GALLERY
            </Link>
            <Link to="/contactus" className="nav-link text-white">
              CONTACT US
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default ShowNavbar;
