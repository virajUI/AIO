import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Stories2() {
  // Replace with your image URLs
  const images = ["header1.jpg", "header2.png", "header3.png", "header4.png"];

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <Row>
            {images.map((image, index) => (
              <Col xs={6} sm={3} key={index}>
                <Card className="custom-card-2" border="primary">
                  <Card.Img variant="top" src={image} className="custom-img-2" />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {images.map((image, index) => (
        <Row key={index} className={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}>
          <Col xs={12} sm={6}>
            <Card.Img className="custom-fix-3" src={image} alt={`Card image ${index + 1}`} />
          </Col>
          <Col xs={12} sm={6}>
            <Card.Body className="custom-fix-4">
              <Card.Title>Lorem Ipsum{index + 1}</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Stories2;
