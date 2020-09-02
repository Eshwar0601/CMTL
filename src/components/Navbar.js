import React, { Component } from 'react';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Clients from './Clients';
import ContactUs from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';


function ShowNavbar() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand to="/"><img src={require('../assests/images/logo.png')}  className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">HOME</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/projects" className="nav-link">PROJECTS</Link>
              <Link to="/clients" className="nav-link">CLIENTS</Link>
              <Link to="/about" className="nav-link">ABOUT US</Link>
              <Link to="/contactus" className="nav-link">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      </Router>
    );
}


export default ShowNavbar;
