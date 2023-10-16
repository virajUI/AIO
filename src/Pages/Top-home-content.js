import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import "../css/Top-home-content.css";
// import "./Home.css";

import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function Top() {
  const navigate = useNavigate();

  function handleClickBH() {
    navigate("/home");
  }

  return (
    <Container fluid className="no-margintophm no-paddinghm">
      <Row>
        <Col>
          <img
          src={"https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
          alt="img"
          className="img-top-home"
          />
          <Card className="HMcard">
            {/* <Card.Body>
                <Card.Title>Discover cities</Card.Title>
                <Row>
                  <Col>
                    {" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Bhopal
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Delhi
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Indore
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Mumbai
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Banglore
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Pune
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Hyderabad
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Chandigarh
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Kolkata
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Kochi
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Ahmedabad
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Thiruvanthapuram
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Bhubneshwar
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Chennai
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Coimbatore
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Agra
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      London
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Britin
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Otva
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Germany
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Ontario
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Winstin
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Nomad
                    </Button>{" "}
                    <Button
                      className="margin-bottom"
                      variant="light"
                      onClick={handleClickBH}
                    >
                      Australia
                    </Button>
                  </Col>
                </Row>
              </Card.Body> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Top;
