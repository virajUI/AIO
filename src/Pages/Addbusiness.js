import React from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
// import "./Addbusiness.css";
import '../css/Addbusiness.css';
import { useState } from "react";
import axios from "axios";

const Addbusiness = () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateId, setStateId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [country_id, setcountry_id] = useState("101");
  const [pincode, setPincode] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [gstRegistration, setGstRegistration] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [superAdmin, setSuperAdmin] = useState("1");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("owner", owner);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state_id", stateId);
      formData.append("country_id", country_id);
      formData.append("pincode", pincode);
      formData.append("gst_number", gstNumber);
      formData.append("gst_registration", gstRegistration);
      formData.append("super_admin", superAdmin);
      const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NTk4ODU0NywiZXhwIjoxNjk2NTkzMzQ3LCJuYmYiOjE2OTU5ODg1NDcsImp0aSI6IldYUkZJR3NKRjZ5WjBTMzUiLCJzdWIiOjg5NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vj8QuqOabnnhYamjWLxeVLiHwso3wwfTJgakBNTjpd4";
      try {
        const response = await axios.post(
          "https://testapi.arbsindia.com/public/api/add-business",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          alert("Data sent successfully!");
          setMessage(response.data.success);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      // <Container fluid style={{ backgroundColor: bgColor }}>
      <Container>
        <Row>
          <Card>
            <Col>
              {/* <Col md={10}> */}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formOwner">
                      <Form.Label>Owner</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter owner"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formStateId">
                      <Form.Label>State ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter state ID"
                        value={stateId}
                        onChange={(event) => setStateId(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formcountry_id">
                      <Form.Label>Country ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="101"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                        value={country_id}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formPincode">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter pincode"
                        value={pincode}
                        onChange={(event) => setPincode(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGstNumber">
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter GST number"
                        value={gstNumber}
                        onChange={(event) => setGstNumber(event.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGstRegistration">
                      <Form.Label>GST Registration</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter GST registration"
                        value={gstRegistration}
                        onChange={(event) =>
                          setGstRegistration(event.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formSuperAdmin">
                      <Form.Label>Super Admin</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="1"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                        value={superAdmin}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Add more rows for other fields */}

                <Button variant="primary" type="submit">
                  Submit
                </Button>

                {message && <p>{message}</p>}
              </Form>
            </Col>
          </Card>
        </Row>
      </Container>
    );
  
};

export default Addbusiness;
