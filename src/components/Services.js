import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "./Footer";
function Services() {
  // const [showOne, setShow] = React.useState(false);
  // const closeModelOne = () => setShow(false);
  // const showModelOne = () => setShow(true);

  return (
    <div>
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
              data-aos-delay="600"
            >
              Our Services
            </h1>
          </div>
        </div>
        <h4 className="text-center mt-5 mb-5">
          Our services give our customers a competitive edge by increasing
          efficiency of project performance while meeting its specific quality
          assurance requirements.
        </h4>
        <div className="row mb-2 mt-5">
          <div className="col col-12 col-md-6 ">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text vertical-center">
                <p className="text-white">
                  “CMTL” team comprises of several qualified and experienced
                  site engineers/supervisors/drill operators and technicians. We
                  possess hand operated augers, mechanically/hydraulically
                  operated rotary rigs with necessary standard drilling tools to
                  make shallow/deep borings as well as in-situ tests in all
                  kinds of subsurface stratum. We have sufficient equipment to
                  carry out major geotechnical investigations for solar power
                  plants, heavy industry, commercial and housing projects,
                  highways, railway &amp; metro projects, etc.
                </p>
                <p className="text-white">
                  Our capabilities include: Drilling Boreholes through Soil and
                  Rock using rotary drilling rig to 30-100 m depth Conducting
                  Dynamic Cone Penetration Test Conducting Packer Test
                </p>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card1.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Geotechnical Investigations
                </h5>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay">
                <p className="text-white overlay-text vertical-center">
                  Geophysical survey is a cost-effective, non-intrusive and
                  relatively quick way of detecting and assessing sub-surface
                  features. CMTL has developed in-house capabilities in
                  geophysics to effectively complement conventional geotechnics
                  for determination of dynamic soil properties, detecting
                  utilities and voids, site characterization. From this method
                  we can also obtain bedrock quality &amp; overburden thickness,
                  Fracture, fault, weak zone identifications.
                </p>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card2.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Geophysical Surveys
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay">
                <p className="text-white overlay-text">
                  In the current climate of Limited funding and deteriorating
                  pavement conditions, the monitoring, maintenance, and
                  cost-effective, innovative rehabilitation of road pavements is
                  of vital importance. “CMTL” has all the required facilities to
                  carry out field testing, mix design and evaluations for sub-
                  grades and sub-base of roads.
                </p>
                <p className="text-white text-center mt-2 border-top">
                  Field Testing
                </p>
                <ul className="text-white">
                  <li>Field CBR Testing</li>
                  <li>
                    Field Density Testing by Sand Replacement/Core Cutter Method
                  </li>
                  <li>Modulus of Sub grade Reaction (K value) Testing</li>
                  <li>WBM/WMM composition verification.</li>
                </ul>
                <p className="text-white text-center">
                  Quarry/Borrow area Approval Testing
                </p>
                <ul className="text-white">
                  <li>
                    Sampling and testing of quarry material to check its
                    material suitability as per IS/MoRT&amp;H specifications.
                  </li>
                </ul>
              </div>
              <img
                className="card-img-top card-image image-height"
                src={require("../assests/images/National-Highways-India.jpg")}
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Highway material testing
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text">
                <ul className="text-white">
                  <li>Rebound Hammer test (Concrete / Bricks / Mortar).</li>
                  <li>Ultrasonic Pulse Velocity test.</li>
                  <li>Covermeter test.</li>
                  <li>Chemical Analysis of concrete.</li>
                  <li>Core extraction from RC members.</li>
                  <li>Pull-out test on anchors.</li>
                  <li>Transverse test on poles.</li>
                  <li>Load Test on Structures.</li>
                  <li>Field tests on RC components &amp; structures.</li>
                  <li>Special tests.</li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/Image_28.png")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  NDT Test Facilities
                </h5>
              </div>
            </div>
          </div>
          {/* <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay vertical-center">
                <p className="text-white text-center">Field Testing</p>
                <ul className="text-white">
                  <li>Field CBR Testing</li>
                  <li>
                    Field Density Testing by Sand Replacement/Core Cutter Method
                  </li>
                  <li>Modulus of Sub grade Reaction (K value) Testing</li>
                  <li>WBM/WMM composition verification.</li>
                </ul>
                <p className="text-white text-center">
                  Quarry/Borrow area Approval Testing
                </p>
                <ul className="text-white">
                  <li>
                    Sampling and testing of quarry material to check its
                    material suitability as per IS/MoRT&amp;H specifications.
                  </li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card03.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Field Testing
                </h5>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row mb-2">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay overlay-text vertical-center">
                <p className="text-white small-text">
                  We don’t often pay attention to its existence when it is
                  transferring loads from a structure to the soil or bedrock
                  safely and as planned. However, possible shortcomings in the
                  pile design or implementation are easy to observe when
                  settlement occurs. Unfortunately, at this point, correcting
                  those shortcomings are already too late or, at the very least,
                  expensive.
                </p>
                <p className="text-white small-text">
                  A comprehensive testing program is critical to the successful
                  performance of deep foundations. CMTL provides a range of
                  highly accurate testing services that are critical in
                  verifying foundation design parameters and communicating
                  corrective actions as required.
                </p>
                <p className="text-white small-text">
                  Static and Cyclic Plate load tests on soil Static Vertical
                  Compression Pile Load Test using kentledge method Static Pull
                  out Pile Load Test Static Lateral Pile Load Test High-strain
                  Dynamic Pile Testing for fast, reliable and cost effective
                  evaluation of foundation bearing capacity and structural
                  integrity Low-strain Pile Integrity tests to quickly assess
                  structural integrity and length of all types of piles Footing
                  load tests using our own, customized load frame arrangement
                  Since we are qualified Engineers, we are fully capable of not
                  just carrying out the tests, but also validating the test
                  results technically and correlating them to the strata
                  conditions.
                </p>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card04.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Foundation Testing
                </h5>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text vertical-center">
                <p className="text-white small-text">
                  CMTL offers comprehensive geotechnical consultancy services
                  ranging from feasibility and design through to construction
                  supervision. Early understanding of ground conditions can lead
                  to economies in design and construction and prevent cost and
                  time overruns.
                </p>
                <p className="text-white small-text">
                  We pride ourselves on the ability to offer clients practical,
                  cost-effective and innovative solutions. Our teams of
                  geotechnical engineers and civil engineers have a wealth of
                  experience in different industry segments which ensures
                  greater reliability on all parameters.
                </p>
                <p className="text-white small-text">
                  We offer the following geotechnical consultancy services:
                </p>
                <ul className="text-white">
                  <li>Geotechnical processes, Assessment and Report</li>
                  <li>Mitigation foundation distress.</li>
                  <li>
                    Designing of ground improvement techniques in weak soil
                    conditions
                  </li>
                  <li>Forensic/Post-Failure Studies</li>
                  <li>Roads and pavement engineering</li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card4.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Geotechnical Engineering Consultancy
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay overlay-text vertical-center">
                <p className="text-white">
                  CMTL has a fully-fledged laboratory with facilities for
                  testing soil, rock, bitumen, hardened Concrete and almost
                  building material samples. Our laboratory team members are
                  well-trained to handle the state-of-art testing equipment. We
                  can also provide on-site laboratory services for major
                  projects.
                </p>
                <p className="text-white">
                  We are committed to providing reliable and accurate test
                  results to our customers, along with technically correct
                  interpretations. Our laboratory has facilities for carrying
                  out testing of construction materials as per
                  BIS/ASTM/BS/EN/MORT&amp;H/NHAI/RAILWAY/CPWD/ DRDO
                  specifications
                </p>
              </div>
              <img
                className="card-img-top card-image"
                height="375"
                src={require("../assests/images/card7.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Laboratory Testing
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text">
                <ul className="text-white mt-5">
                  <li>
                    Establishing site laboratory at the site for geotechnical
                    evaluation of controlled land filling for major earth works
                    like earthen embankments, earthen impounding reservoir etc.
                  </li>
                  <li>
                    Monitoring of construction activities to ensure Quality
                    construction through continuous supervision and interaction
                    between various agencies involved in the project.
                  </li>
                  <li>
                    Setting up a team of engineers at site or carrying out
                    periodic site visits depending on site requirement for
                    quality inspection.
                  </li>
                  <li>
                    Furnishing periodic reports on quality aspects to the
                    client.
                  </li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                height="350"
                src={require("../assests/images/card9.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <p className="card-title text-center text-white">
                  Establishment of Quality control /Quality Auditing systems at
                  site labs
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text">
                <ul className="text-white">
                  <li>Grain Size Analysis &amp; Hydrometer</li>
                  <li>Moisture Content and Density</li>
                  <li>Atterberg Limits &amp; Shrinkage Limit</li>
                  <li>Specific Gravity</li>
                  <li>Relative density</li>
                  <li>Swell Index</li>
                  <li>Swelling Pressure- oedometer</li>
                  <li>Direct Shear Test</li>
                  <li>Triaxial Shear Test</li>
                  <li>Permeability (Falling head and Constant head)</li>
                  <li>Unconfined Compression (UCS)</li>
                  <li>Standard and Modified Compaction Tests</li>
                  <li>California Bearing Ratio (CBR)</li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card6.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Soil Testing
                </h5>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="row mb-2">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay overlay-text">
                <ul className="text-white mt-5">
                  <li>Density dry / saturated</li>
                  <li>Moisture Content</li>
                  <li>Water absorption</li>
                  <li>Specific Gravity</li>
                  <li>Unconfined Compressive Strength</li>
                  <li>Point Load Strength</li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card7.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <p className="card-title text-center text-white">
                  Rock Testing
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row mb-2">
          <div
            className="col col-12 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card service-card m-2">
              <div class="overlay overlay-text">
                <ul className="text-white small-text">
                  <li>
                    Assessment of quality / strength of RC members through
                    appropriate field tests.
                  </li>
                  <li>
                    Assessment of quality / soundness of buildings / structures.
                  </li>
                  <li>
                    Feasibility study for construction of additional floors.
                  </li>
                  <li>
                    Assessment of Distress / Structural inadequacy and
                    recommending restoration / strengthening measures.
                  </li>
                  <li>
                    Assessment of fire damage structures and recommending
                    appropriate strengthening measures.
                  </li>
                  <li>
                    Assessment of load carrying capacity of RC members by
                    Performing load test.
                  </li>
                  <li>
                    Assessment of load capacity of embedded anchors by
                    performing Pull-out test.
                  </li>
                  <li>
                    Performance load test on handrails, brackets, poles, precast
                    elements, staircase etc.
                  </li>
                  <li>
                    Tests on welded joints (DPT) / assessment of thickness in
                    structural steel members.
                  </li>
                  <li>
                    Performance evaluation tests on low cost new technology
                    buildings /materials.
                  </li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                height="350"
                src={require("../assests/images/renovation.jpeg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Non Destructive Testing, Investigation, Renovation &amp;
                  Restoration
                </h5>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text">
                <p className="text-white mt-5">
                  We are conducting various workshops and training programs on
                  latest technology for individuals, corporate sectors &amp;
                  colleges in testing and good construction practice in civil
                  engineering. We also advise in preparation of technical
                  manuals on various relevant topics pertaining to Civil
                  Engineering practice for Construction QAP (Quality assurance
                  plan)
                </p>
              </div>
              <img
                className="card-img-top card-image image-less-height"
                src={require("../assests/images/Image_36.png")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  Training Courses in latest developments in Civil Engineering:
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div clasName="row">
          <div className="col col-12 col-md-6">
            {/* <div
              className="card service-card m-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="overlay overlay-text">
                <ul className="text-white">
                  <li>Rebound Hammer test (Concrete / Bricks / Mortar).</li>
                  <li>Ultrasonic Pulse Velocity test.</li>
                  <li>Covermeter test.</li>
                  <li>Chemical Analysis of concrete.</li>
                  <li>Core extraction from RC members.</li>
                  <li>Pull-out test on anchors.</li>
                  <li>Transverse test on poles.</li>
                  <li>Load Test on Structures.</li>
                  <li>Field tests on RC components &amp; structures.</li>
                  <li>Special tests.</li>
                </ul>
              </div>
              <img
                className="card-img-top card-image"
                src={require("../assests/images/card11.jpg")}
                alt="Card image cap"
              />
              <div className="card-body bg-primary">
                <h5 className="card-title text-center text-white">
                  NDT Test Facilities
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
