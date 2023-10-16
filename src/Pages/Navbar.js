import "../css/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ReactNavbar() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(
    localStorage.getItem("first name")
  );

  // HANDLE LOGOUT EVENT
  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");

    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    setFirstName(null);

    navigate("/");
  };

  return (
    <Navbar
      className="bg-body-tertiary navbar-sticky"
      style={{
        borderBottom: "0.5px solid #D3D3D3",
        fontFamily: "Bebas Neue, sans-serif",
      }}
    >
      <Container fluid className="Navbar-color-scheme">
        <Navbar.Brand href="/Home">
          <img
            src="https://accountantlalaji.com/wp-content/uploads/2018/05/gggggg.png"
            className="App-logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto Nav-text nav-font-bold-weight"
            style={{
              // borderBottom: "0.5px solid #D3D3D3",
              marginRight: "520px",
            }}  
          >
            <Nav.Link
              href="/Stories"
              className="Nav-text"
              style={{ fontWeight: "SemiBold" }}
            >
              STORIES
            </Nav.Link>
            <Nav.Link
              href="/Startups"
              className="Nav-text"
              style={{ fontWeight: "SemiBold" }}
            >
              STARTUPS
            </Nav.Link>
            <Nav.Link
              href="/Events"
              className="Nav-text"
              style={{ fontWeight: "SemiBold" }}
            >
              EVENTS
            </Nav.Link>
            <Nav.Link
              href="/Contact"
              className="Nav-text"
              style={{ fontWeight: "SemiBold" }}
            >
              CONTACT
            </Nav.Link>
            {!firstName && (
              <>
                <Nav.Link
                  href="/Signin"
                  className="Nav-text"
                  style={{ fontWeight: "SemiBold" }}
                >
                  LOGIN
                </Nav.Link>
                <Nav.Link
                  href="/Signup"
                  className="Nav-text"
                  style={{ fontWeight: "SemiBold" }}
                >
                  SIGN UP
                </Nav.Link>
              </>
            )}
            {firstName && (
              <NavDropdown
                title={`Hi, ${firstName}`}
                id="basic-nav-dropdown"
                className="Nav-text"
              >
                <NavDropdown.Item
                  href="/OurStory"
                  style={{ fontWeight: "SemiBold" }}
                >
                  OurStory
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/ProtectedPage"
                  style={{ fontWeight: "SemiBold" }}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/Logout"
                  onClick={logout}
                  style={{ fontWeight: "SemiBold" }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactNavbar;
