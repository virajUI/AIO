import React from "react";
import { Card, Container } from "react-bootstrap";
import "../css/Events.css";

import axios from 'axios';

const url = 'https://testapi.arbsindia.com/public/api/get-page-list'; // replace with your URL
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NjA3MDUxNywiZXhwIjoxNjk2Njc1MzE3LCJuYmYiOjE2OTYwNzA1MTcsImp0aSI6ImRSbzlxZjZmcGhFTW1IcU8iLCJzdWIiOjc4NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.hPiA-KsF5CA6_i0l14OxFwLBjXgnUUqI7XriQmD7bb0'; // replace with your token


const data = {
  business_id: '105',
  type: '4',
  status: '1'
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
};

const postData = () => {
  axios.post(url, data, { headers })
  .then(response => {
    if (response.status === 200) {
      console.log('Success:', response.data);
      return 'Okay';
    }
  })
  .catch(error => console.error('Error:', error));
};


const MeetingsPage = () => {
  return (
    <Container fluid className="Events-background">
      <div class="Events-hero-image">
        <div class="Events-hero-text">
          <h1>E v e n t s</h1>
        </div>
      </div>

      <div class="container Events-box">
        <div class="main-timeline-4 text-white">
          <div class="timeline-4 left-4">
            <div class="card Events-left-cards">
              <div class="card-body p-4">
                <div>
                  <span className="span1">In person</span>
                  <span className="span2">Meeting</span>
                </div>
                <hr /> 
                <div className="Evdiv ">
                  <h3 className="mb-0 text-heading">All meetings</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
                <hr />
                <h6 class="badge bg-light text-black mb-0">New</h6>
                <h6 class="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div class="timeline-4 right-4">
            <div class="card Events-right-cards">
              <div class="card-body p-4">
                <div>
                  <span className="span1">In person</span>
                  <span className="span2">Meeting</span>
                </div>
                <hr />
                <div className="Evdiv ">
                  <h3 className="mb-0 text-heading">All meetings</h3>
                </div>

                
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
                <hr />
                <h6 class="badge bg-light text-black mb-0">New</h6>
                <h6 class="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div class="timeline-4 left-4">
            <div class="card Events-left-cards">
              <div class="card-body p-4">
                <div>
                  <span className="span1">In person</span>
                  <span className="span2">Meeting</span>
                </div>
                <hr />
                <div className="Evdiv ">
                  <h3 className="mb-0 text-heading">All meetings</h3>
                </div><p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
                <hr />
                <h6 class="badge bg-light text-black mb-0">New</h6>
                <h6 class="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div class="timeline-4 right-4">
            <div class="card Events-right-cards">
              <div class="card-body p-4">
                <div>
                  <span className="span1">In person</span>
                  <span className="span2">Meeting</span>
                </div>
                <hr />
                <div className="Evdiv ">
                  <h3 className="mb-0 text-heading">All meetings</h3>
                </div>
                
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
                <hr />
                <h6 class="badge bg-light text-black mb-0">New</h6>
                <h6 class="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div class="timeline-4 left-4">
            <div class="card Events-left-cards">
              <div class="card-body p-4">
                <div>
                  <span className="span1">In person</span>
                  <span className="span2">Meeting</span>
                </div>
                <hr />
                <div className="Evdiv ">
                  <h3 className="mb-0 text-heading">All meetings</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
                <hr />
                <h6 class="badge bg-light text-black mb-0">New</h6>
                <h6 class="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>

     
    </Container>
  );
};

export {MeetingsPage , postData} ;
export default MeetingsPage;