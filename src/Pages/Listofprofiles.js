import React from "react";
import '../css/Listofprofiles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const Listofprofiles = () => {
  return (
    <div className="container">
    <h2> List of profiles </h2>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/yoru.jpg"
              className=" rounded-start rounded-end list-profiles-img"
              alt="nothing"
            />
            <h5 className=" list-profiles-h5">Card title</h5>
            <h6 className=" list-profiles-h6">h6 title </h6>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title list-profiles-body-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Row>
              <Col className="d-flex justify-content-center"><button type="button" class="btn btn-primary">Primary</button></Col>
              <Col className="d-flex justify-content-center"><button type="button" class="btn btn-primary">Primary</button></Col>
              <Col className="d-flex justify-content-center"><button type="button" class="btn btn-primary">Primary</button></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listofprofiles;
