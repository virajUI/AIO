import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from 'react-router-dom';
import '../App.css';

const Footer1 = () => {
  return (
    <Container fluid>
      <ButtonGroup className="mb-2 hundredpercentwidth">
        <Link to="/MainStory" className="btn btn-primary">Home</Link>
        <Button>Services</Button>
        <Button>Startups</Button>
        <Button>Events</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Footer1;
