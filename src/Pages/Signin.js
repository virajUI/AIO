/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [apiData, setData] = useState(null);

  const [alertMsg, setAlertMsg] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [getToken, setToken] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [getlistofBusiness, setlistofBusiness] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://testapi.arbsindia.com/public/api/sign-in",
        { email, password }
      );
      if (response.status) {
        setData(response.data);
        console.log(response.data);
        setAlertMsg(response.data.msg);
        setToken(response.data.data.token);
        console.log(response.data.data.business_id);
        setlistofBusiness(response.data.data.business_id);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("id", response.data.data.id);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("last name", response.data.data.last_name);
        localStorage.setItem("first name", response.data.data.first_name);
        localStorage.setItem("phone", response.data.data.plain_phone);
        // localStorage.setItem('insider Business id', response.data.data.);
        window.location.href = "/";
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
    <>
      <MDBContainer fluid className="p-5 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="assets"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div>
              <h3 className="card-title offset-lg-5">Sign in</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="exampleInputEmail1"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <br />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary mb-4 w-100">
                Sign In
              </button>
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain any spaces, special characters, or
                emojis.
              </div>
            </form>

            <div className="alert">{alertMsg}</div>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="#!">Forgot password?</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Signin;
