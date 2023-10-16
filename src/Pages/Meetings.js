import React from "react";
import { Card, Container } from "react-bootstrap";
import "../css/Meetings.css";
import "bootstrap/dist/css/bootstrap.min.css";

const meetings = [
  {
    title: "ARBS staff meeting",
    time: "9:00 AM",
    state: "Bhopal",
    place: "Conference Room A",
    speaker1: "shivam chaurivar",
    speaker2: "ajay nagar",
    address:
      "mapnagar,zone-1 , near something to fill space this and that and you and me",
  },
  {
    title: "ARBS staff meeting",
    time: "11:00 AM",
    state: "Delhi",
    place: "Conference Room B",
    speaker1: "shivam chaurivar",
    speaker2: "ajay nagar",
    address:
      "mapnagar,zone-1 , near something to fill space this and that and you and me",
  },
];

const MeetingsPage = () => {
  return (
    <Container fluid className="Events-background">
      <div className="row ">
        <h3 className="home-titles">Upcoming Meetups</h3>
        {meetings.map((meeting, index) => (
          <div className="col no-paddingme " key={index}>
            <Card className="Meetingcard">
              <Card.Body>
                <div className="d-flex justify-content-between ">
                  <div className="card Events-left-cards">
                    <div className="card-body p-4">
                      <div>
                        <span className="span1">In person</span>
                        <span className="span2">Meeting</span>
                      </div>
                      <div className="Evdiv ">
                        <h4 className="mb-0 text-heading">All meetings</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, quo ei simul congue exerci,
                        ad nec admodum perfecto mnesarchum, vim ea mazim fierent
                        detracto. Ea quis iuvaret expetendis his, te elit
                        voluptua dignissim per, habeo iusto primis ea eam.
                      </p>
                      <h6 className="badge bg-light text-black mb-0">New</h6>
                      <h6 className="badge bg-light text-black mb-0">Admin</h6>
                    </div>
                  </div>

                  <hr />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MeetingsPage;
