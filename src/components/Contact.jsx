import React from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const Contact = () => {
  const navigate = useNavigate();
  function handlehome(){
    navigate('/')
  }
  function handleqr(){
    navigate('/contact');
  }
  return (
    <>
      <section className="contact-section">
        <div className="contact-intro">
          <h2 className="contact-title">For Book Appointment </h2>
          <p className="contact-description">
            for Further Questions, Please Call{" "}
            <span>
              <a href="tel:1800180-132" style={{ textDecoration: "none" }}>
                1800180-132
              </a>
            </span>
          </p>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="9cbbd7d0-14de-4dcc-84ee-2b862f330233" // Use import.meta.env for Vite
          />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission from Web3Forms"
          />
          <input type="hidden" name="from_name" value="My Website" />

          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                id="name"
                name="first-name"
                className="form-input"
                placeholder="first name"
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="second-name" className="form-label">
                Last Name
              </label>
              <input
                id="second-name"
                name="second-name"
                className="form-input"
                placeholder="last name"
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date for Reservation
              </label>
              <input
                id="date"
                name="date"
                className="form-input"
                type="date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-input"
                placeholder="Your email"
                type="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+1 (234) 56789"
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <button className="form-submit btn-55">
            <span>Reserve Now</span>
          </button>
          <button className="button" onClick={handlehome}>Back to home🏟️</button>
        </form>
        <p> To Visit Profile Scan this</p>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
  <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value='https://userharish001.github.io/portfolio/'
    viewBox={`0 0 256 256`}
  />
</div>
      </section>
    </>
  );
};

export default Contact;
