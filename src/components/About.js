import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Footer from './Footer';


function About() {
  return (
    <div >
      <img data-aos="fade-in" data-aos-delay="400" src={require('../assests/images/logo.png')} className="img-fluid image-align-center" alt="Responsive image" />

      <div className="container">
          <div className="row row-content" >
              <div className="col col-12 col-md-5" data-aos="fade-left" data-aos-delay="400">
                  <img src={require('../assests/images/about01.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
              </div>
              <div className="col col-12 col-md-7" data-aos="fade-right" data-aos-delay="700">
                  <p>
                      M/s Civil Material Testing Laboratory herein after referred as “CMTL” is multi-disciplinary
                      consulting services firm in infrastructure industry specializing in various field and laboratory testing
                      services in the field of civil engineering. It was started on 14 th January 2016 and registered as a
                      partnership firm in January 2017 with earlier experience drawn from Civil-Aid Technoclinic Pvt Ltd
                      and M/s. Bureau Veritas India Pvt Ltd in Bangalore.
                  </p>
              </div>
          </div>


          <div className="row row-content flex-md-row-reverse bg-dark" >
              <div className="col col-12 col-md-5" data-aos="fade-right" data-aos-delay="400">
                <img src={require('../assests/images/about1.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
              </div>
              <div className="col col-12 col-md-7" data-aos="fade-left" data-aos-delay="700">
                <p className="text-white">
                    We take pleasure in introducing our organization “CMTL”, by a team of experienced
                    personnel having extensive knowledge in the fields of Geotechnical Investigations, Pile
                    Foundations Testing, Non-Destructive Testing of RC &amp; steel Structures, construction material
                    testing Laboratory and other allied services in the field of civil engineering. CMTL provides
                    professional engineering testing / consultancy services for all kinds of infrastructure projects.
                </p>
              </div>
          </div>

          <div className="row row-content " >
              <div className="col col-12 col-md-5" data-aos="fade-left" data-aos-delay="400">
                  <img src={require('../assests/images/about2.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
              </div>
              <div className="col col-12 col-md-7" data-aos="fade-right" data-aos-delay="700">
                  <p>
                    Civil Material Testing Laboratory consist of various equipment’s which can conduct around 45 No.
                    of test on various building materials like Soil, Aggregate, Concrete, Bitumen Etc. All the
                    instruments are new with advanced facilities like automatically operated and calibrated. Civil
                    Material Testing Laboratory has been awarded ISO 9001:2015 certificate. Very soon lab is going to
                    be accredited by National Accreditation Board for Testing and Calibration Laboratories (NABL).
                  </p>
              </div>

          </div>

          <div className="row row-content flex-md-row-reverse bg-dark" >
              <div className="col col-12 col-md-5" data-aos="fade-right" data-aos-delay="400">
                <img src={require('../assests/images/about3.png')} className="img-fluid image-align-center" alt="Responsive image" />
              </div>
              <div className="col col-12 col-md-7" data-aos="fade-left" data-aos-delay="700">
                <p className="text-white">
                    Our goal is to exceed the expectations by offering services backed by standardized methodologies
                    based on industry best practices with quality care. Our Consultants and Staff have experience,
                    working for several national and international clients on projects that require diverse range of
                    expertise. We as experts in providing services for site and desktop engineering works are
                    committed to deliver the requirements with quality and reliability. We possess in-house
                    engineering expertise gained with our experiences. One of our key elements of service is to help
                    clients understand the key aspects involved in site.
                </p>
              </div>
          </div>

          <div className="row row-content" >
              <div className="col col-12 col-md-5" data-aos="fade-left" data-aos-delay="400">
                  <img src={require('../assests/images/about4.jpg')} className="img-fluid image-align-center" alt="Responsive image" />
              </div>
              <div className="col col-12 col-md-7" data-aos="fade-right" data-aos-delay="700">
                  <p>
                    For us at “CMTL”, “QUALITY” is a habit, to actively pursue on a routine basis, not something that
                    is unwillingly imposed upon its staff by the company management. We recognize our commitment to
                    the society at large and are aware of the implications of our work in nation building. We work with
                    the motto “We test today for tomorrow’s progress”.
                  </p>
              </div>

          </div>

      </div>

      <Footer />
    </div>
  );
}

export default About;
