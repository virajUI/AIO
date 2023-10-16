/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Col,
  Container,
  Row,
  Card,
  InputGroup,
  Form,
  Image,
} from "react-bootstrap";
import "../css/Create.css";
// import "./Create.css";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Create = () => {
  const [startDate, setStartDate] = useState(new Date()),
    [endDate, setEndDate] = useState(new Date());
  const [theme, setTheme] = useState("light");

  const [image, setImage] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Container fluid className={theme} style={{ height: "100vh" }}>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          {" "}
          <Card className="card-shadowbox-create create-card create-card:hover">
            <Card.Body>
              <Row>
                {" "}
                <Col md={6}>
                  {" "}
                  <InputGroup size="lg">
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="EVENT NAME"
                    />
                  </InputGroup>
                  <Col className="margin-inputbox">
                    <InputGroup size="sm" className="margin-inputbox">
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Description"
                      />
                    </InputGroup>
                    <Form.Select size="sm" className="margin-inputbox">
                      <option>Select Mode </option>
                      <option>In Person</option>
                      <option>Online</option>
                    </Form.Select>
                    <InputGroup size="sm" className="margin-inputbox">
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="ADDRESS"
                      />
                    </InputGroup>
                    <InputGroup size="sm" className="margin-inputbox">
                      <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="PIN CODE"
                      />
                    </InputGroup>
                    <Col className="margin-inputbox">
                      Start Date :{" "}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </Col>
                    <Col className="margin-inputbox">
                      End Date :{" "}
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    </Col>
                  </Col>
                </Col>
                <Col md={6}>
                  <label htmlFor="image-upload">
                    <Image
                      className="techmeetup-img"
                      src={image || "pressstart.jpg"}
                      rounded
                    />
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <hr />
                  <div className="theme-selector">
                    <div
                      className="theme-box light"
                      onClick={() => setTheme("light")}
                    ></div>
                    <div
                      className="theme-box dark"
                      onClick={() => setTheme("dark")}
                    ></div>
                    <div
                      className="theme-box violet-white"
                      onClick={() => setTheme("violet-white")}
                    ></div>
                    <div
                      className="theme-box animated"
                      onClick={() => setTheme("animated")}
                    ></div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default Create;
