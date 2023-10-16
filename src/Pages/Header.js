import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <Container fluid>
      <Carousel controls={false} indicators={false} interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className="img-fix-second"
            src="/header1.jpg" // assuming header1.jpg is directly inside the public folder
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fix-second"
            src="/header2.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Header;
