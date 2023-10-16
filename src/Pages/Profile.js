import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import React from "react";
import "../css/Profile.css";
// import "./Profile.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
function Profile() {
  const first_name = localStorage.getItem("first name");
  const last_name = localStorage.getItem("last name");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");
  const phone = localStorage.getItem("phone");
  return (
    <>
      <section className="vh-100 profilewhite">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3 mdb-card">
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-dark mdb-col"
                  >
                    <MDBCardImage
                      src="https://pm1.aminoapps.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_00.jpg"
                      alt="Avatar"
                      className="my-5 mdb-card-image"
                      fluid
                    />

                    <MDBCardText className="PRmargin">
                      Name: {first_name} {last_name}
                    </MDBCardText>
                    <MDBCardText className="PRmargin">ID: {id}</MDBCardText>
                    <Link to={`/Create`} className="link">
                      <button className="btn btn-danger PRcreate">
                        <MDBIcon far icon="edit mb-5" />
                        Create Event
                      </button>
                    </Link>
                    <Link to={`/Addbusiness`} className="link">
                      <button className="btn btn-danger PRaddbusiness">
                        <MDBIcon far icon="edit mb-5" />
                        Addbusiness
                      </button>
                    </Link>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted Profile-email">
                            {email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted Profile-phone">
                            {phone}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
              <MDBAccordion flush initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How does it work?"
                  className="mdb-accordion-item"
                >
                  Anim pariatur cliche reprehenderit, enim eiusmod high lif
                </MDBAccordionItem>

                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="What is USP?"
                  className="mdb-accordion-item"
                >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="What is Traction"
                  className="mdb-accordion-item"
                >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Profile;
