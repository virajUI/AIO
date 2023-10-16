import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
        <Navbar.Brand href="/">
          <img
            src="https://accountantlalaji.com/wp-content/uploads/2019/08/cropped-logoo-1-1-150x47.png"
            className="img"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end nav-margin-right">
          <Nav>
            <Nav.Link href="/" className="medium navtitle" style={{ letterSpacing: '0.1em' }}>Home</Nav.Link>
            <Nav.Link href="#link" className="medium navtitle" style={{ letterSpacing: '0.1em' }}>Services</Nav.Link>
            <Nav.Link href="#link" className="medium navtitle" style={{ letterSpacing: '0.1em' }}>Startups</Nav.Link>
            <Nav.Link href="#link" className="medium navtitle" style={{ letterSpacing: '0.1em' }}>Events</Nav.Link>
            <Link to="Stories3" className="nav-link medium navtitle" style={{ letterSpacing: '0.1em' }}>Stories</Link>
            <Nav.Link href="#link" className="medium navtitle nav-margin-right" style={{ letterSpacing: '0.1em' }}>Contact Us</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Join Us
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="Signin">Sign-in</Dropdown.Item>
                <Dropdown.Item href="Signup">Sign-up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Menu;
