import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-twitter"></i>
            </a>

            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://plus.google.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-google"></i>
            </a>

            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" target="_blank" rel="noopener noreferrer" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright : All rights reserved.
        </div>
        {/* Copyright */}
      </footer>

      {/* Your other content goes here */}
    </>
  );
}
