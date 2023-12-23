import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <FooterBody>
      <div className="container-sm">
        <div className="row first-row">
          <div className="col-md-3">
            <div className="first">Use Billette</div>
            <div>Create Event</div>
            <div>Pricing</div>
            <div>Billette Boost</div>
            <div>Billette Mobile Ticket App</div>
            <div>Billette Registration Software</div>
            <div>Content Standard</div>
            <div>FAQs</div>
          </div>
          <div className="col-md-3">
            <div className="first">Plan Events</div>
            <div>Sell Tickets Online</div>
            <div>Evant Planning</div>
            <div>Sell Concert Ticket Online</div>
            <div>Community Engagement</div>
            <div>Virtual Event Platform</div>
            <div>Event Management System</div>
            <div>QR Codes for Event Chack-in</div>
          </div>
          <div className="col-md-3">
            <div className="first">Find Events</div>
            <div>Nigeria Events</div>
            <div>New York Evants</div>
            <div>CHicago Events</div>
            <div>Events in Dallas Today</div>
            <div>Los Angeles Evants</div>
          </div>
          <div className="col-md-3">
            <div className="first">Connect With Us</div>
            <div>Contact Support</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>LinkedIn</div>
          </div>
        </div>
        <div className="row mt-5 second-r">
          <div className="col-md-2 flex-c">2023 Billette</div>
          <div className="col-md-2"> </div>
        </div>
      </div>
    </FooterBody>
  );
}
const FooterBody = styled.div`
  position: relative;
  margin-top: 100px;
  bottom: 0px;
  background-color: #303030;
  padding: 30px 0px;

  * {
    color: white;
    font-size: 13px;
    margin-top: 10px;
    font-weight: bold;
  }
  .first-row {
    .first {
      color: white;
      font-weight: bolder;
      font-size: 15px;
      margin-bottom: 35px;
    }
    *,
    .second-r {
      color: white;
      font-size: 13px;
      margin-top: 10px;
      font-weight: bold;
      :hover {
        color: #16ce72;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
    }
  }

  img {
    width: 150px;
    margin: 0px;
  }
  .flex-c {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Footer;
