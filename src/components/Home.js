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
            <h2 className="text-headding h1-responsive pt-3 mb-5">Civil Material Testing Laboratory</h2>
            <p className="mx-3 mb-2 jumbotron-body-text">We take pleasure in introducing our organization “CMTL”, by a team of experienced
                  personnel having extensive knowledge in the fields of Geotechnical Investigations, Pile
                  Foundations Testing, Non-Destructive Testing of RC &amp; steel Structures, construction material
                  testing Laboratory and other allied services in the field of civil engineering. CMTL provides
                  professional engineering testing / consultancy services for all kinds of infrastructure projects.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row row-content">
              <div className="col-12">
                  <h1>Text comes Here</h1>
              </div>
          </div>
          <div className="row row-content">
              <div className="col-12">
                  <h1>Text comes Here</h1>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
