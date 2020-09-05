import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Clients() {
  return (
    <div>
      <div className="container">
        <div className="row row-content">
          <div className="col col-12" data-aos="fade-in" data-aos-delay="400" >
            <img src={require('../assests/images/logo.png')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12" >
            <h1 className="text-headding text-center mb-5 mt-5" data-aos="fade-up" data-aos-delay="600">Our Clients</h1>
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
              <li data-aos="fade-up" data-aos-delay="600">M/s RAL Constructions</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Reinforced Earth India Ltd</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Sobha Developers</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Sujala structures</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Aveda Ventures</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s B.A.R Builders & Developers</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Gcube Consultants</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s. Samruddhi Renewables Solutions</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Sterling and Wilson Pvt Ltd</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Silver Route Constructions & Services Pvt Ltd.</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s V.M.Constructions</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s B.M.CONSTROTECH PVT LTD</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Jayantisuper Constructions Pvt Ltd.</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Good Earth Eco Futures Pvt Ltd</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Magnus Constructions</li>
            </ul>
          </div>
          <div className="col col-12 col-md-6">
            <ul>
              <li data-aos="fade-up" data-aos-delay="600">M/s BSR Infratech India Ltd.</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Value Tech Associates</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Indian Institute for Human Settlements</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Gina Engineering Company (P) Ltd</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s PGB Constructions LLP</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Creative Constructions.</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Enviro Infra Engineers Pvt Ltd</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s KUIDFC – NKUSIP</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Synectics Engineering Consultants</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Ramsons Infrastructures</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Ayana Renewable Power Private Limited</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s RSP Infratech</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Gopalan Enterprises</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Palladium Projects</li>
              <li data-aos="fade-up" data-aos-delay="600">M/s Daksh Energy Solutions</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-3" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-6.jpg')} className="img-fluid m-4 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-2.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-3.jpg')} className="img-fluid mt-3 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-4.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-4" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-5.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-4" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-1.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-4" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-7.jpg')} className="img-fluid image-align-center m-5" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-3" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-8.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-9.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-10.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-3" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-11.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-md-6" data-aos="fade-left" data-aos-delay="400">
            <img src={require('../assests/images/client-12.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
          <div className="col col-12 col-md-6" data-aos="fade-right" data-aos-delay="400">
            <img src={require('../assests/images/client-13.jpg')} className="img-fluid mt-5 image-align-center" alt="Responsive image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clients;
