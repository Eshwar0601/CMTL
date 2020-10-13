import React from "react";
import ShowNavbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <ShowNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/gallery" component={Gallery} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
