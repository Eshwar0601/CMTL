import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
// import NetlifyForm from "react-netlify-form";
function ContactUs() {
  return (
    <div>
      <div className="container">
        <div className="row row-content">
          <div className="col col-12" data-aos="fade-in" data-aos-delay="400">
            <img
              src={require("../assests/images/logo.png")}
              className="img-fluid image-align-center"
              alt="logo"
            />
          </div>
          <div className="col col-12" data-aos="fade-in" data-aos-delay="600">
            <h1 className="text-headding text-center mb-5 mt-5">Contact Us</h1>
          </div>
        </div>

        <div className="row">
          <div className="col col-12">
            <div className="card">
              <div className="card-body">
                <div className="z-depth-1-half map-container-7">
                  <iframe
                    title="maps"
                    className="map-style col-12"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5502931142864!2d77.54281961482233!3d13.000589990836897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAyLjEiTiA3N8KwMzInNDIuMCJF!5e0!3m2!1sen!2sin!4v1599201859148!5m2!1sen!2sin"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>

                <div class="row">
                  <div class="col col-12 mt-4">
                    {/* form */}
                    <form action="" name="contact" method="post">
                      <div class="md-form">
                        <input type="hidden" name="form-name" value="contact" />
                        <label for="name" class="">
                          Your name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                        />
                      </div>
                      <div class="md-form">
                        <label for="email">Your email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                        />
                      </div>
                      {/* <div class="md-form">
                            <label for="contact-Subject" class="">
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="contact-Subject"
                              class="form-control"
                            />
                          </div> */}

                      <div class="col col-12 mt-4 mb-5">
                        <div class="md-form primary-textarea">
                          <label for="message">Your message</label>
                          <textarea
                            id="message"
                            name="message"
                            className="md-textarea form-control mb-0"
                            rows="5"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="col col-md-12">
                        <div class="text-center">
                          <button
                            type="submit"
                            class="btn btn-dark text-white btn-block"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
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

// <NetlifyForm name="Contact Form">
// {({ loading, error, success }) => (
//   <div>
//     {loading && <div>Loading...</div>}
//     {error && (
//       <div>Your information was not sent. Please try again later.</div>
//     )}
//     {success && <div>Thank you for contacting us!</div>}
//     {!loading && !success && (
//       <div>
//         <input type="text" name="Name" required />
//         <textarea name="Message" required />
//         <button>Submit</button>
//       </div>
//     )}
//   </div>
// )}
// </NetlifyForm>

{
  /* <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
  <div class="md-form">
    <label for="contact-name" class="">
      Your name
    </label>
    <input type="text" name="name" id="contact-name" class="form-control" />
  </div>
  <div class="md-form">
    <label for="contact-email" class="">
      Your email
    </label>
    <input type="text" name="email" id="contact-email" class="form-control" />
  </div> */
}
{
  /* <div class="md-form">
  <label for="contact-Subject" class="">
    Subject
  </label>
  <input
    type="text"
    name="subject"
    id="contact-Subject"
    class="form-control"
  />
</div> */
}

//   <div class="col col-12 mt-4 mb-5">
//     <div class="md-form primary-textarea">
//       <label for="contact-message">Your message</label>
//       <textarea
//         id="contact-message"
//         name="message"
//         class="md-textarea form-control mb-0"
//         rows="5"
//       ></textarea>
//     </div>
//   </div>
//   <div class="col col-md-12">
//     <div class="text-center">
//       <button type="submit" class="btn btn-dark text-white btn-block">
//         Send Message
//       </button>
//     </div>
//   </div>
// </form>;
