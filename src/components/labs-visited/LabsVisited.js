import React from "react";
import "./LabsVisited.css";
function LabsVisited() {
  var array = [
    {
      name: "Apollo Diagnostics",
      area: "Kormanangala, Bangalore",
      slot: "Next Slot - 07:30 AM, Tomorrow",
      image: "/assets/images/lab1.png",
    },
    {
      name: "Apollo Diagnostics",
      area: "Kormanangala, Bangalore",
      slot: "Next Slot - 07:30 AM, Tomorrow",
      image: "/assets/images/lab2.png",
    },
    {
      name: "Apollo Diagnostics",
      area: "Kormanangala, Bangalore",
      slot: "Next Slot - 07:30 AM, Tomorrow",
      image: "/assets/images/lab1.png",
    },
    {
      name: "Apollo Diagnostics",
      area: "Kormanangala, Bangalore",
      slot: "Next Slot - 07:30 AM, Tomorrow",
      image: "/assets/images/lab1.png",
    },
  ];
  return (
    <div className="labs-visited">
      <div className="labs-header">
        <h3 className="labs-h1">Labs Visisted</h3>
        <div className="labs-see-all">
          <span>See All</span>
          <img src="/assets/icons/chevron_right_blue.svg" alt="arrow-r" />
        </div>
      </div>

      <div className="labs-slider">
        <div className="labs-cards-slider">
          {array.map((lab, index) => {
            return (
              <div className="lab-card">
                <img src={lab.image} alt="lab" className="main-img" />
                <div className="lab-card-rating">
                  <img src="/assets/icons/star.svg" alt="star" />
                  <span className="rating">4.5/5 (120 ratings)</span>
                </div>
                <div className="lab-card-details">
                  <h4>{lab.name}</h4>

                  <div className="lab-card-loc">
                    <img
                      src="/assets/icons/location.svg"
                      alt="location"
                      className="card-icons"
                    />
                    <span>{lab.area}</span>
                  </div>
                  <div className="lab-card-loc">
                    <img
                      src="/assets/icons/clock.svg"
                      alt="clock"
                      className="card-icons"
                    />
                    <span>{lab.slot}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lab-trust">
        <div className="lab-trust-header">
          <div>
            <div>
              <span>Trusted by </span>
              <span className="lab-header-blue"> 20,00,000+ </span>
            </div>
            <div>
              <span className="lab-header-darkblue"> Users Every month </span>
            </div>
          </div>
          <img src="/assets/vectors/active-users/trust.svg" />
        </div>
        <div className="lab-data">
          <div className="lab-data-div1">
            <div className="lab-data-contents">
              <img
                className="lab-data-contents-img"
                src="/assets/vectors/active-users/approved-centers.svg"
                alt="doctor"
              />
              <span>200+ Approved Diagnostic Centres</span>
            </div>
            <div className="lab-data-contents">
              <img
                className="lab-data-contents-img"
                src="/assets/vectors/active-users/lab-tests-types.svg"
                alt="doctor"
              />
              <span>1200+ Lab Tests Offered</span>
            </div>
          </div>
          <div className="lab-data-div1">
            <div className="lab-data-contents">
              <img
                className="lab-data-contents-img"
                src="/assets/vectors/active-users/location-pincodes.svg"
                alt="doctor"
              />
              <span>1200+ Pincodes Covered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabsVisited;
