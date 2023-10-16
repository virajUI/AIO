import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Stories = () => {
  return (
    <Container fluid className="custom-story">
      <div >
      </div>
      <Row >
        <Col md={2}></Col> {/* Left empty column */}
        <Col md={8}>
          <Card
            className="mb-3 custom-fix-1"
            style={{
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              borderRadius: "15px",
            }}
          >
            <Card.Body>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fix"
                    src="https://img.freepik.com/free-photo/people-cheering-drinking-beer-while-playing-beer-pong-indoor-party_23-2149431331.jpg?t=st=1697200810~exp=1697201410~hmac=5eb2bd1b216b89e9ec1bd5958f0694106809ce43a442abd59b8a539835a0bd60"
                    alt="description"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title bold">Lorem Ipsum</h5>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                    </p>
                    <p className="card-text">
                      {/* <small className="text-body-secondary">
                        Last updated 7 mins ago
                      </small> */}
                    </p>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="mb-3"
            style={{
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              borderRadius: "15px",
            }}
          >
            <Card.Body>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fix"
                    src="https://img.freepik.com/premium-photo/medium-shot-kids-teacher-discussing_23-2149038791.jpg?w=740"
                    alt="description"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title bold">Lorem Ipsum</h5>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has be
                    </p>
                    <p className="card-text">
                      {/* <small className="text-body-secondary">
                        Last updated 7 mins ago
                      </small> */}
                    </p>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="mb-3"
            style={{
              boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
              borderRadius: "15px",
            }}
          >
            <Card.Body>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fix"
                    src="https://img.freepik.com/free-photo/look-how-interesting-it-is_329181-10521.jpg?t=st=1697200810~exp=1697201410~hmac=5f945360dc9ec4900bcc2ffa7c811b09141f53cd0c63dda95009ffa3fd72c50a"
                    alt="description"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title bold">Lorem Ipsum</h5>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      s,
                    </p>
                    <p className="card-text">
                      {/* <small className="text-body-secondary">
                        Last updated 7 mins ago
                      </small> */}
                    </p>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col> {/* Right empty column */}
      </Row>
      <br />
    </Container>
  );
};

export default Stories;
