import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Clients() {
  return (
    <div>
      <div className="container">
        <div className="row row-content">
          <div className="col col-12" >
            <img src={require('../assests/images/logo.png')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12" >
            <h1 className="text-headding text-center mb-5 mt-5">Our Clients</h1>
          </div>
        </div>

        <div className="row row-content">
          <div className="col col-12">
            <h1 className="project-text-headding text-center m-4">LABORATORY TESTING OF CONSTRUCTION MATERIALS</h1>
          </div>
        </div>

        <div className="row row-content clients-bg">
          <div className="col col-12 col-md-6">
            <ul>
              <li>M/s RAL Constructions</li>
              <li>M/s Reinforced Earth India Ltd</li>
              <li>M/s Sobha Developers</li>
              <li>M/s Sujala structures</li>
              <li>M/s Aveda Ventures</li>
              <li>M/s B.A.R Builders & Developers</li>
              <li>M/s Gcube Consultants</li>
              <li>M/s. Samruddhi Renewables Solutions</li>
              <li>M/s Sterling and Wilson Pvt Ltd</li>
              <li>M/s Silver Route Constructions & Services Pvt Ltd.</li>
              <li>M/s V.M.Constructions</li>
              <li>M/s B.M.CONSTROTECH PVT LTD</li>
              <li>M/s Jayantisuper Constructions Pvt Ltd.</li>
              <li>M/s Good Earth Eco Futures Pvt Ltd</li>
              <li>M/s Magnus Constructions</li>
            </ul>
          </div>
          <div className="col col-12 col-md-6">
            <ul>
              <li>M/s BSR Infratech India Ltd.</li>
              <li>M/s Value Tech Associates</li>
              <li>M/s Indian Institute for Human Settlements</li>
              <li>M/s Gina Engineering Company (P) Ltd</li>
              <li>M/s PGB Constructions LLP</li>
              <li>M/s Creative Constructions.</li>
              <li>M/s Enviro Infra Engineers Pvt Ltd</li>
              <li>M/s KUIDFC – NKUSIP</li>
              <li>M/s Synectics Engineering Consultants</li>
              <li>M/s Ramsons Infrastructures</li>
              <li>M/s Ayana Renewable Power Private Limited</li>
              <li>M/s RSP Infratech</li>
              <li>M/s Gopalan Enterprises</li>
              <li>M/s Palladium Projects</li>
              <li>M/s Daksh Energy Solutions</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-6.jpg')} className="img-fluid m-4 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-2.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-3.jpg')} className="img-fluid mt-3 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-4.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-4">
            <img src={require('../assests/images/client-5.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-4">
            <img src={require('../assests/images/client-1.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-4">
            <img src={require('../assests/images/client-7.jpg')} className="img-fluid image-align-center m-5" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-8.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-9.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-10.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3">
            <img src={require('../assests/images/client-11.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-6">
            <img src={require('../assests/images/client-12.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-6">
            <img src={require('../assests/images/client-13.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clients;
