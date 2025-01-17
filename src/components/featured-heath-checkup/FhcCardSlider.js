import React from "react";
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
  return (
    <div className="package-card-wrapper">
      {/* {data.isSponsored && (
        <div className="package-card-sponsoredTag">
          <div>
            <div>Sponsored</div>
          </div>
        </div>
      )}
      {!data.isSponsored && (
        <div className="package-card-cashlessTag">
          <div>
            <img
              loading="lazy"
              src="/assets/icons/check-mark.svg"
              className="icon"
              alt="Cashless icon"
            />
            <div>Cashless</div>
          </div>
        </div>
      )} */}
      <div className="package-card">
        <h1 className="package-card-h1">{data.packageName}</h1>
        <div className="package-card-div-1">
          <div className="package-card-nos">
            <h3 className="package-card-nos-h3">Tests: {data.testCount}</h3>
            <ul className="package-card-nos-ul">
              {/* Example placeholder for test details */}
              <li className="package-card-nos-ul-li">
                <h3 className="package-card-nos-h3-bland">Test Details Here</h3>
              </li>
            </ul>
          </div>
          <div className="package-card-includes">
            <h3 className="package-card-includes-h3">Includes</h3>
            <ul className="package-card-includes-ul">
              {/* Example placeholder for included details */}
              <li>
                <div className="package-card-includes-li-div">
                  <h3 className="package-card-includes-h3-bland">
                    Example Include
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="package-card-div-2">
          <div className="package-card-fasting">
            <h3 className="package-card-fasting-h3">Fasting</h3>
            <h3 className="package-card-fasting-h3-bland">
              {data.minAge} - {data.maxAge} years
            </h3>
          </div>
          <div className="package-card-avail">
            <h3 className="package-card-fasting-h3">Available</h3>
            <div className="package-card-avail-insidediv">
              <h3 className="package-card-fasting-h3-bland">
                Home Sample Available:{" "}
                {data.isHomeSampleAvailable ? "Yes" : "No"}
              </h3>
            </div>
          </div>
        </div>
        <div className="package-card-div-1">
          <div className="package-card-cost">
            <div className="package-card-cost-insidediv1">
              <h3 className="package-card-cost-h3">
                Original Price: ₹{data.discountInfo.discountPrice}
              </h3>
              <h3 className="package-card-cost-h3-dis">Discount: {data.discount}%</h3>
            </div>
            <div className="package-card-cost-insidediv1">
              <h3 className="package-card-cost-h3-2">Coupon: {data.discountInfo.coupon}</h3>
            </div>
          </div>
          <div className="package-card-button-div">
            <button className="package-card-button">Add</button>
          </div>
        </div>
      </div>
      <div className="package-card-extra">
        <h3 className="package-card-extra-h3">
          Sale: {data.discountInfo.saleName}
        </h3>
      </div>
    </div>
  );
}


export default function FhcCardSlider({ data }) {
  // console.log(data.packages);
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
