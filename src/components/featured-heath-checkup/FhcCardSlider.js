import React, { useState } from "react";
import "./FhcCardSlider.css";

let cardData = [
  {
    isSponserd: true,
    packagename: "MB Pack 1 - MediBuddy Health Wealth Package",
    packagetime: "Reports in 10-12 hrs",
    packagenos: "90 Tests",
    packageincludes: [
      {
        name: "Radiology",
        img: "/assets/icons/radiology.svg",
      },
      {
        name: "2 Consultations",
        img: "/assets/icons/consultations.svg",
      },
    ],
    packagefasting: "08-14 Hrs",
    packageavailimg: "/assets/icons/home.svg",
    packageavailtext: "Home",
    packageoriginalcost: "$10,000",
    packagediscount: "55% OFF",
    packagecost: "$2,500 onwards",
    packageextratext: "Available Locations: Noida & Bangalore Only",
  },
  {
    isSponserd: false,
    packagename: "MB Pack 1 - MediBuddy Health Wealth Package",
    packagetime: "Reports in 10-12 hrs",
    packagenos: "90 Tests",
    packageincludes: [
      {
        name: "Radiology",
        img: "/assets/icons/radiology.svg",
      },
      {
        name: "2 Consultations",
        img: "/assets/icons/consultations.svg",
      },
    ],
    packagefasting: "08-14 Hrs",
    packageavailimg: "/assets/icons/lab.svg",
    packageavailtext: "Lab",
    packageoriginalcost: "$10,000",
    packagediscount: "55% OFF",
    packagecost: "$2,500 onwards",
    packageextratext: "Available Locations: Noida & Bangalore Only",
  },
];

function Card({ data }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="package-card-wrapper">
      <div className="package-card">
        <h1 className="package-card-h1">{data.packageName}</h1>
        <div className="package-card-time">
          <img className="package-icon" src="./assets/icons/time.svg"></img>
          <h3 className="package-card-time-h3">{data.reportsTatText}</h3>
        </div>

        <div className="package-card-div-1">
          <div className="package-card-nos">
            <h3 className="package-card-nos-h3">
              {" "}
              {data.testCount + " "}Tests
            </h3>
            <ul className="package-card-nos-ul">
              <li className="package-card-nos-ul-li">
                <h3 className="package-card-nos-h3-bland">Test Details Here</h3>
              </li>
            </ul>
          </div>
          {data.isRadiologyIncluded && data.consultationCount != 0 && (
            <div className="package-card-includes">
              <h3 className="package-card-includes-h3">Includes</h3>
              <ul className="package-card-includes-ul">
                <li>
                  <div className="package-card-includes-li-div">
                    {data.isRadiologyIncluded && (
                      <>
                        <img
                          className="package-icon"
                          src="./assets/icons/radiology.svg"
                        ></img>
                        <h3 className="package-card-includes-h3-bland">
                          Radiology
                        </h3>
                      </>
                    )}
                  </div>
                </li>
                <li>
                  <div className="package-card-includes-li-div">
                    {data.consultationCount != 0 && (
                      <>
                        <img
                          className="package-icon"
                          src="./assets/icons/consultations.svg"
                        ></img>
                        <h3 className="package-card-includes-h3-bland">
                          {data.consultationCount + " Consultations"}
                        </h3>
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="package-card-div-2">
          <div className="package-card-fasting">
            <h3 className="package-card-fasting-h3">Fasting</h3>
            <h3 className="package-card-fasting-h3-bland">
              {data.fastingHoursText}
            </h3>
          </div>
          <div className="package-card-avail">
            <h3 className="package-card-fasting-h3">Available</h3>
            {data.isHomeSampleAvailable ? (
              <div className="package-card-avail-insidediv">
                <img
                  className="package-icon"
                  src="./assets/icons/home.svg"
                ></img>
                <h3 className="package-card-avail-h3">Home</h3>
              </div>
            ) : (
              <div className="package-card-avail-insidediv">
                <img
                  className="package-icon"
                  src="./assets/icons/lab.svg"
                ></img>
                <h3 className="package-card-avail-h3">Lab</h3>
              </div>
            )}
          </div>
        </div>
        <div className="package-card-div-1">
          <div className="package-card-cost">
            <div className="package-card-cost-insidediv1">
              <h3 className="package-card-cost-h3">₹{data.price}</h3>
              <h3 className="package-card-cost-h3-dis">{data.discount}%</h3>
            </div>
            <div className="package-card-cost-insidediv2">
              <h3 className="package-card-cost-h3-1">
                ₹
                {parseFloat(
                  (data.price - (data.price * data.discount) / 100).toFixed(2)
                )}
              </h3>
              <h3 className="package-card-cost-h3-2">Onwards</h3>
            </div>
          </div>
          <div className="package-card-button-div">
            {count === 0 ? (
              <button className="package-card-button" onClick={incrementCount}>
                Add
              </button>
            ) : (
              <div className="package-card-counter">
                <button className="package-card-counter-button" onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button className="package-card-counter-button" onClick={incrementCount}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FhcCardSlider({ data }) {
  cardData = data.packages;
  return (
    <div className="Package-main-container">
      <div className="Package-main-slider">
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
