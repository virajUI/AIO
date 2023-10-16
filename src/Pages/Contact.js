import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Contact.css";

const Contact = () => {
  return (
    <Container fluid className="Contact-background Contact-container">
      <img src="Contact-us-img.png" className="img-fluid Contact-us-img" alt="Responsive image" />
      <div className="row">
        <div className="col-md-3">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-map-marker"></span>
            </div>
            <div className="text">
              <p><span>Address:</span> Z16, Opposite Chittod Complex, Zone-I, MP Nagar, Bhopal, Madhya Pradesh</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-phone"></span>
            </div>
            <div className="text">
              <p><Link to="/about">+91-54875848415778</Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-paper-plane"></span>
            </div>
            <div className="text">
              <p><span>Email:</span> <a href="mailto:youremail@example.com">youremail@example.com</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-globe"></span>
            </div>
            <div className="text">
              <p><span>Website:</span> <a href="https://yoursite.com">yoursite.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
