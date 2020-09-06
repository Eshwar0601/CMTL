import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className="jumbotron linear-background img-fluid">
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="text-headding h1-responsive pt-3 mb-5" data-aos="fade-in" data-aos-delay="400">Civil Material Testing Laboratory</h2>
            <p className="mx-3 mb-2 jumbotron-body-text" data-aos="fade-in" data-aos-delay="700">We take pleasure in introducing our organization “CMTL”, by a team of experienced
                  personnel having extensive knowledge in the fields of Geotechnical Investigations, Pile
                  Foundations Testing, Non-Destructive Testing of RC &amp; steel Structures, construction material
                  testing Laboratory and other allied services in the field of civil engineering. CMTL provides
                  professional engineering testing / consultancy services for all kinds of infrastructure projects.
            </p>
          </div>
        </div>
      </div>
      <div className="container">

      <div className="row row-content home1-bg">
          <div className="col-12">
              <h1 className="text-headding" data-aos="fade-up" data-aos-delay="600">We Provide the Best Industrial Services World Wide</h1>
          </div>
      </div>


          <div className="row row-content">
              <div className="col col-12 col-md-4 mb-3">

                  <div className="card" data-aos="fade-up" data-aos-delay="300">
                    <img className="card-img-top" src={require('../assests/images/home-card-1.png')} alt="Card image cap"/>
                    <div className="card-body">
                      <h3 className="card-title border-bottom text-center">What We Offer</h3>
                      <p className="card-text">We offer laboratory services in the field of Road and Building Material, Geotechnical investigation,Geophysical Surveys, Highway material testing, Field Testing, Foundation Testing, Geotechnical Engineering Consultancy, Laboratory Testing, Soil Testing, Rock Testing Non Destructive Testing, Investigation, Renovation &amp; Restoration, NDT Test Facilities etc.</p>
                    </div>
                  </div>

              </div>


              <div className="col col-12 col-md-4 mb-3">

                  <div className="card" data-aos="fade-up" data-aos-delay="600">
                    <img className="card-img-top" src={require('../assests/images/home-card-2.png')} alt="Card image cap"/>
                    <div className="card-body">
                      <h3 className="card-title border-bottom text-center">Expert Engineers</h3>
                      <p className="card-text mb-2">All laboratory staff has understood the importance of customer satisfaction. Laboratory personnel have always interact with customers in a way that is appropriate, providing needed information, and courteous.</p>
                      <p>Laboratory technicians are trained professionals responsible for performing complex task.</p>
                    </div>
                  </div>

              </div>


              <div className="col col-12 col-md-4 mb-3">

                  <div className="card" data-aos="fade-up" data-aos-delay="900">
                    <img className="card-img-top" src={require('../assests/images/image-card-3.jpg')} alt="Card image cap"/>
                    <div className="card-body">
                      <h3 className="card-title border-bottom text-center">Customer Support</h3>
                      <p className="card-text">Get 24x7 dedicated customer support.

You can visit our help desk for your any kind of technical query:</p>
                    </div>
                  </div>

              </div>






          </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
