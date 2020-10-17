import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="jumbotron linear-background img-fluid">
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="text-headding h1-responsive pt-3 mb-5">
              Civil Material Testing Laboratory
            </h2>
            <p
              className="mx-3 mb-2 jumbotron-body-text"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              We take pleasure in introducing our organization “CMTL”, by a team
              of experienced personnel having extensive knowledge in the fields
              of Geotechnical Investigations, Pile Foundations Testing,
              Non-Destructive Testing of RC &amp; steel Structures, construction
              material testing Laboratory and other allied services in the field
              of civil engineering. CMTL provides professional engineering
              testing / consultancy services for all kinds of infrastructure
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-content home1-bg mb-5">
          <div className="col-12">
            <h1
              className="text-headding-quote hr-center"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              "Our Commitment is to provide the best quality work and timely
              completion of the project with full satisfaction of our clients"
            </h1>
          </div>
        </div>

        <div className="row row-content">
          <div className="col col-12 col-md-4 mb-3">
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <img
                className="card-img-top"
                src={require("../assests/images/home-card-1.png")}
                alt="What We Offer"
              />
              <div className="card-body">
                <h3 className="card-title border-bottom text-center">
                  What We Offer
                </h3>
                <p className="card-text text-center">
                  We offer laboratory services in the field of Building
                  material, Geotechnical investigation,Geophysical Surveys,
                  Highway material testing, Foundation testing, Non-Destructive
                  Testing of RC &amp; steel Structures, and many more.
                </p>
                <div className="hr-center">
                  <button className="btn bg-primary">
                    <Link className="text-white text-center" to="/services">
                      Check out our services
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-4 mb-3">
            <div className="card" data-aos="fade-up" data-aos-delay="600">
              <img
                className="card-img-top"
                src={require("../assests/images/home-card-2.png")}
                alt="Expert Engineers"
              />
              <div className="card-body">
                <h3 className="card-title border-bottom text-center">
                  Expert Engineers
                </h3>
                <p className="card-text mb-2 text-center">
                  All laboratory staff has understood the importance of customer
                  satisfaction. Laboratory personnel have always interact with
                  customers in a way that is appropriate, providing needed
                  information, and courteous.
                </p>
                <p className="text-center">
                  Laboratory technicians are trained professionals responsible
                  for performing complex task.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-4 mb-3">
            <div className="card" data-aos="fade-up" data-aos-delay="900">
              <img
                className="card-img-top"
                src={require("../assests/images/image-card-3.jpg")}
                alt="Customer Support"
              />
              <div className="card-body">
                <h3 className="card-title border-bottom text-center">
                  Customer Support
                </h3>
                <p className="card-text text-center">
                  Get 24x7 dedicated customer support. You can visit our help
                  desk for your any kind of technical query:
                </p>
                <div className="hr-center">
                  <button className="btn btn-lg bg-primary float-center">
                    <Link className="text-white text-center" to="/contactus">
                      Contact Us
                    </Link>
                  </button>
                </div>
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
