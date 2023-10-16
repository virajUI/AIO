import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "typeface-roboto";

import {
  MDBContainer,
} from "mdb-react-ui-kit";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [super_admin] = useState(0);
  const [phone, setPhone] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [apiData, setData] = useState(null);
  const [alertMsg, setAlertMsg] = useState(null);
  const [getToken, setToken] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://testapi.arbsindia.com/public/api/sign-up",
        {
          email,
          password,
          first_name,
          last_name,
          phone,
          password_confirmation,
          super_admin,
        }
      );
      if (response.status === 200) {
        // Check the specific status code
        setData(response.data);
        console.log(response.data);
        setAlertMsg(response.data.msg);
        setToken(response.data.data.token);

        navigate("/Signin");
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
    <MDBContainer fluid className="Signup-dimensions">
      <section className="vh-100 background-color">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "30px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 Sign-up-text">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <h6 className="form-label" htmlFor="first_name">
                            First Name:
                          </h6>
                          <input
                            type="text"
                            id="first_name"
                            className="form-control"
                            placeholder="First Name"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <h6 className="form-label" htmlFor="last_name">
                            Last Name:
                          </h6>
                          <input
                            type="text"
                            id="last_name"
                            className="form-control"
                            placeholder="Last Name"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <h6 className="form-label" htmlFor="email">
                            Your Email:
                          </h6>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <h6 className="form-label" htmlFor="phone">
                            Phone:
                          </h6>
                          <input
                            type="number"
                            id="phone"
                            className="form-control"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <h6 className="form-label" htmlFor="password">
                            Password:
                          </h6>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <h6
                            className="form-label"
                            htmlFor="password_confirmation"
                          >
                            Confirm Password:
                          </h6>
                          <input
                            type="password"
                            id="password_confirmation"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={password_confirmation}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree to all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBContainer>
  );
};

export default Signup;
