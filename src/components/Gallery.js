import React from "react";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <div className="container">
        <div className="row row-content">
          <div className="col col-12" data-aos="fade-in" data-aos-delay="400">
            <img
              src={require("../assests/images/logo.png")}
              className="img-fluid image-align-center"
              alt="Responsive image"
            />
          </div>
          <div className="col col-12">
            <h1
              className="text-headding text-center mb-5 mt-5"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              Gallery
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">
              GEOTECHNICAL INVESTIGATION
            </h3>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <div className="gallery-text">
              <p>Rotary Drilling using Hydraulic Rig</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/card1.jpg")}
            />
          </div>

          <div className="gallery__item gallery__item--2">
            <div className="gallery-text">
              <p>Rotary Drilling using Calyx Rig</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_06.png")}
            />
          </div>
          <div className="gallery__item gallery__item--3">
            <div className="gallery-text">
              <p>General view of the site</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_07.png")}
            />
          </div>
          <div className="gallery__item gallery__item--4">
            <div className="gallery-text">
              <p>Manual auger</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_08.jpeg")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">Geophysical Survey</h3>
          </div>
        </div>
        <div className="gallery-01">
          <div className="gallery__item gallery__item--01">
            <img
              className="gallery__img"
              src={require("../assests/images/card2.jpg")}
            />
          </div>
          <div className="gallery__item gallery__item--02">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_10.png")}
            />
          </div>
          <div className="gallery__item gallery__item--03">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_11.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">HIGHWAY MATERIAL TESTING</h3>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--001">
            <div className="gallery-text">
              <p>Field CBR Testing</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_12.png")}
            />
          </div>
          <div className="gallery__item gallery__item--002">
            <div className="gallery-text">
              <p>Field DCPT Testing</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_13.png")}
            />
          </div>
          <div className="gallery__item gallery__item--003">
            <div className="gallery-text">
              <p>Field Density by Sand replacement Method</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_14.png")}
            />
          </div>
          <div className="gallery__item gallery__item--004">
            <div className="gallery-text">
              <p>Field Density by Core cutter Method</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_15.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">FOUNDATION TESTING</h3>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <div className="gallery-text">
              <p>Static Vertical Compression Pile Load Test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_16.png")}
            />
          </div>
          <div className="gallery__item gallery__item--2">
            <div className="gallery-text">
              <p>Static Pull out Pile Load Test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_17.png")}
            />
          </div>
          <div className="gallery__item gallery__item--3">
            <div className="gallery-text">
              <p>Static Lateral Pile Load Test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_18.png")}
            />
          </div>
          <div className="gallery__item gallery__item--4">
            <div className="gallery-text">
              <p>Low-strain Pile Integrity tests</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_19.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">
              GEOTECHNICAL ENGINEERING CONSULTANCY
            </h3>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_20.png")}
            />
          </div>
          <div className="gallery__item gallery__item--2">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_21.png")}
            />
          </div>
          <div className="gallery__item gallery__item--3">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_22.png")}
            />
          </div>
          <div className="gallery__item gallery__item--4">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_23.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">LABORATORY TESTING</h3>
          </div>
        </div>
        <div className="gallery0001">
          <div className="gallery__item gallery__item--0001">
            <div className="gallery-text">
              <p>Compressive Strength on Concrete Cores</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_24.png")}
            />
          </div>
          <div className="gallery__item gallery__item--0002">
            <div className="gallery-text">
              <p>Hydrometer Analysis</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_25.png")}
            />
          </div>
          <div className="gallery__item gallery__item--0003">
            <div className="gallery-text">
              <p>Point Load test on Rock Specimen</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_26.png")}
            />
          </div>
          <div className="gallery__item gallery__item--0004">
            <div className="gallery-text">
              <p>Field Laboratory Test Set up for Quality control work</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_27.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">NDT TEST FACILITIES</h3>
          </div>
        </div>
        <div className="gallery10">
          <div className="gallery__item gallery__item--10">
            <div className="gallery-text">
              <p>Ultrasonic Pulse Velocity Test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_28.png")}
            />
          </div>
          <div className="gallery__item gallery__item--20">
            <div className="gallery-text">
              <p>Concrete Core Extraction</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_29.png")}
            />
          </div>
          <div className="gallery__item gallery__item--30">
            <div className="gallery-text">
              <p>Rebound Hammer Test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_30.png")}
            />
          </div>
          <div className="gallery__item gallery__item--40">
            <div className="gallery-text">
              <p>Half Cell Potential test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_31.png")}
            />
          </div>
          <div className="gallery__item gallery__item--50">
            <div className="gallery-text">
              <p>Ultrasonic Thickness Gauge test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_32.png")}
            />
          </div>
          <div className="gallery__item gallery__item--60">
            <div className="gallery-text">
              <p>Dye Penetration test</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_33.png")}
            />
          </div>
          <div className="gallery__item gallery__item--70">
            <div className="gallery-text">
              <p>Profoscope rebar locators</p>
            </div>
            <img
              className="gallery__img"
              src={require("../assests/images/Image_34.png")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mt-4 mb-2">TRAINING COURSES</h3>
          </div>
        </div>
        <div className="gallery-20">
          <div className="gallery__item gallery__item--0201">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_35.png")}
            />
          </div>
          <div className="gallery__item gallery__item--0202">
            <img
              className="gallery__img"
              src={require("../assests/images/Image_36.png")}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
