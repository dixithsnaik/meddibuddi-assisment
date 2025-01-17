import React from "react";
import "./FhcCardSlider.css";

const cardData = [
  {
    isSponserd:true,
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
    isSponserd:false,
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
         {/* {data.isSponserd && ( 
            <div className="package-card-cashlessTag">
              <div>
                <img
                  loading="lazy"
                  src="assets/icons/chcek-mark.svg"
                  className="icon"
                  alt="Cashless icon"
                />
                <div>Cashless</div>
              </div>
            </div>
          )}
          {!data.isSponserd && ( 
            <div className="package-card-SponseredTag">
              <div>
                <div>Sponsered</div>
              </div>
            </div>
          )} */}
      <div className="package-card">
        <h1 className="package-card-h1">{data.packagename}</h1>
        <div className="package-card-time">
          <img className="package-icon" src="/assets/icons/time.svg"></img>
          <h3 className="package-card-time-h3">{data.packagetime}</h3>
        </div>
        <div className="package-card-div-1">
          <div className="package-card-nos">
            <h3 className="package-card-nos-h3">{data.packagenos}</h3>
            <ul className="package-card-nos-ul">
              <li className="package-card-nos-ul-li">
                <h3 className="package-card-nos-h3-bland">
                  Cholesterol - Total
                </h3>
              </li>
              <li className="package-card-nos-ul-li">
                <h3 className="package-card-nos-h3-bland">
                  Vitamin D... + 87 more
                </h3>
              </li>
            </ul>
          </div>
          <div className="package-card-includes">
            <h3 className="package-card-includes-h3">Includes</h3>
            <ul className="package-card-includes-ul">
              {data.packageincludes.map((item, index) => (
                <li key={index}>
                  <div className="package-card-includes-li-div">
                    <img className="package-icon" src={item.img}></img>
                    <h3 className="package-card-includes-h3-bland">
                      {item.name}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="package-card-div-2">
          <div className="package-card-fasting">
            <h3 className="package-card-fasting-h3">Fasting</h3>
            <h3 className="package-card-fasting-h3-bland">
              {data.packagefasting}
            </h3>
          </div>
          <div className="package-card-avail">
            <h3 className="package-card-fasting-h3">Available at</h3>
            <div className="package-card-avail-insidediv">
              <img className="package-icon" src={data.packageavailimg}></img>
              <h3 className="package-card-fasting-h3-bland">
                {data.packageavailtext}
              </h3>
            </div>
          </div>
        </div>
        <div className="package-card-div-1">
          <div className="package-card-cost">
            <div className="package-card-cost-insidediv1">
              <h3 className="package-card-cost-h3">
                {data.packageoriginalcost}
              </h3>
              <h3 className="package-card-cost-h3-dis">
                {data.packagediscount}
              </h3>
            </div>
            <div className="package-card-cost-insidediv1">
              <h3 className="package-card-cost-h3-2">{data.packagecost}</h3>
            </div>
          </div>
          <div className="package-card-button-div">
            <button className="package-card-button">Add</button>
          </div>
        </div>
      </div>
      <div className="package-card-extra">
        <h3 className="package-card-extra-h3">{data.packageextratext}</h3>
      </div>
    </div>
  );
}

export default function FhcCardSlider() {
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
