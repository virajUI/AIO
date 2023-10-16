import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./../css/exsignininfo.css";
// import "./exsignininfo.css"
const SigninEX = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("suyashmalvi@gmail.com");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("Suyash@123");
  // eslint-disable-next-line no-unused-vars
  const [apiData, setapiData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [alertMsg, setAlertMsg] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [getToken, setToken] = useState("");
  const [getlistofBusiness, setlistofBusiness] = useState([]);

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    try {
      const response = await axios.post(
        "https://testapi.arbsindia.com/public/api/sign-in",
        { email, password }
      );
      if (response.status) {
        setapiData(response.data);
        console.log(response.data);
        setAlertMsg(response.data.msg);
        setToken(response.data.data.token);
        console.log(response.data.data.business_id);
        setlistofBusiness(response.data.data.business_id);
      }
    } catch (error) {
      console.error(error);
      console.error(error.response);
      console.error(error.response.data);
      console.error(error.response.data.msg);
      setAlertMsg(error.response.data.msg);
    }
  };

  return (
    <Container fluid >
  <div className="Featured-startup-title">
    <h3>Featured Startups</h3>
  </div>
  <Row >
    {getlistofBusiness.map((item) => (
      <Col key={item.id}>
        <Card >
          <Card.Body>
            <Card.Title>{item.business_name}</Card.Title>
            <Card.Text>
              ID: {item.id}
              <br />
              Email: {item.business_email}
            </Card.Text>
            <p>-something something carrer</p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  );
};

export default SigninEX;

// {/* <Card.Img
//                 variant="top"
//                 src={
//                   item.image_url
//                     ? item.image_url
//                     : "https://via.placeholder.com/100x100?text=No+Image"
//                 }
//               /> */}
