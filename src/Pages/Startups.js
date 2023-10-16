import React, { Component } from "react";
import "../css/Startups.css";
import { Container } from "react-bootstrap";
class Startups extends Component {
  render() {
    return (
      <Container fluid className="Startup-background">
        <div class="Startups-hero-image">
        <div class="Startups-hero-text">
          <h1>S t a r t u p s</h1>
        </div>
      </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Card image cap"
            />
            <div className="card-body Startup-background">
              <h4 className="startup-content-card">Azurelane</h4>
              <p className="startup-content-card" >
                A company for online cloud.
              </p>
              <p className="startup-content-card Startup-grey">
                Madhya Pradesh
              </p>
              <p className="startup-content-card" >
                ~A company by Suyash
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Card image cap"
            />
            <div className="card-body Startup-background">
              <h4 className="startup-content-card">Card title</h4>
              <p className="startup-content-card">
                A company for..
              </p>
              <p className="startup-content-card Startup-grey">
                Maharashtra
              </p>
              <p className="startup-content-card">
                     ~Abcd
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              alt="Card image cap"
            />
            <div className="card-body Startup-background">
              <h4 className="startup-content-card">Card title</h4>
              <p className="startup-content-card">
                A company for
              </p>
              <p className="startup-content-card Startup-grey">
                State
              </p>
              <p className="startup-content-card">
                ~Abcd
              </p>
            </div>
          </div>
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1679474025458-2b204e8e2a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Card image cap"
            />
            <div className="card-body Startup-background">
              <h4 className="startup-content-card">Card title</h4>
              <p className="startup-content-card">
                A company for
              </p>
              <p className="startup-content-card Startup-grey">
                A company for
              </p>
              <p className="startup-content-card">
                ~gghr
              </p>
            </div>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {/* Existing cards */}
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1679474025458-2b204e8e2a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Card image cap"
              />
              <div className="card-body Startup-background">
                <h4 className="startup-content-card">Card title</h4>
                <p className="startup-content-card">
                 A company for
                </p>
                <p className="startup-content-card Startup-grey">
                 State
                </p>
                <p className="startup-content-card">
                 ~A company for
                </p>
              </div>
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1679474025458-2b204e8e2a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Card image cap"
              />
              <div className="card-body Startup-background">
                <h4 className="startup-content-card">Card title</h4>
                <p className="startup-content-card">
                  A company for
                </p>
                <p className="startup-content-card Startup-grey">
                  State
                </p>
                <p className="startup-content-card">
                  ~kjvji
                </p>
              </div>
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1679474025458-2b204e8e2a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Card image cap"
              />
              <div className="card-body Startup-background">
                <h4 className="startup-content-card">Card title</h4>
                <p className="startup-content-card">
                  A company for
                </p>
                <p className="startup-content-card Startup-grey">
                  State
                </p>
                <p className="startup-content-card">
                  ~fghtrh
                </p>
              </div>
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1679474025458-2b204e8e2a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Card image cap"
              />
              <div className="card-body Startup-background">
                <h4 className="startup-content-card">Card title</h4>
                <p className="startup-content-card">
                  A company for
                </p>
                <p className="startup-content-card Startup-grey">
                  State
                </p>
                <p className="startup-content-card">
                  ~utif
                </p>
              </div>
            </div>

            {/* Additional cards in the next line */}
            <div className="card m-2" style={{ width: "18rem" }}>
              {/* Card content */}
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              {/* Card content */}
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              {/* Card content */}
            </div>
            <div className="card m-2" style={{ width: "18rem" }}>
              {/* Card content */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Startups;
