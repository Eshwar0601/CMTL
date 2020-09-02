import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
function ContactUs() {
  return (
    <div>
      <h1 className="text-center"> Contact Us </h1>
      <div className="container">
        <div className="row">
          <div className="col col-12" >
            <div className="card">
              <div className="card-body">
                <div className="z-depth-1-half map-container-7">
                  <iframe className="map-style col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7744.71063042357!2d75.5870540755898!3d13.937436960910084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba930e7492e17%3A0x2e13fff40b2e55df!2sMalleshwara%20Nagar%2C%20Shivamogga%2C%20Karnataka%20577201!5e0!3m2!1sen!2sin!4v1592059092618!5m2!1sen!2sin"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                  </iframe>
                </div>

                <div class="row">
                    <div class="col-md-6 mt-4">
                        <form name="contact" method="POST" data-netlify="true">
                            <div class="md-form">
                                <input type="text" id="contact-name" class="form-control"/>
                                <label for="contact-name" class="">Your name</label>
                            </div>
                            <div class="md-form">
                                <input type="text" id="contact-email" class="form-control"/>
                                <label for="contact-email" class="">Your email</label>
                            </div>
                            <div class="md-form">
                                <input type="text" id="contact-Subject" class="form-control"/>
                                <label for="contact-Subject" class="">Subject</label>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 mt-4">
                        <div class="md-form primary-textarea">
                            <textarea id="contact-message" class="md-textarea form-control mb-0" rows="5"></textarea>
                            <label for="contact-message">Your message</label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="text-center">
                            <a class="btn btn-dark text-white btn-block">Send Message</a>
                        </div>
                    </div>
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

export default ContactUs;
