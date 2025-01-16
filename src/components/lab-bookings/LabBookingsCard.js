import React from "react";
import "./LabBookings.css";
import { useState } from "react";

const testData = [
  {
    id: "cbc-test",
    name: "Complete Blood Count (CBC)",
    description: "EDTA Whole Blood",
    reportTime: "10-12 hrs",
    originalPrice: 800,
    discountedPrice: 500,
    discountPercentage: 55,
    locations: ["Home", "Lab"],
    isCashless: true,
  },
  {
    id: "lft-test",
    name: "Liver Function Test (LFT)",
    description: "Serum",
    reportTime: "24 hrs",
    originalPrice: 1000,
    discountedPrice: 700,
    discountPercentage: 30,
    locations: ["Home", "Lab"],
    isCashless: true,
  },
];

export const useTestCard = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState(null);

  const handleAddTest = () => {
    try {
      setIsAdded(true);
      return {
        success: true,
        data: testData,
      };
    } catch (err) {
      setError(err);
      return {
        success: false,
        error: err,
      };
    }
  };

  return {
    isAdded,
    error,
    handleAddTest,
  };
};

function TestCard(testData) {
  const { isAdded, handleAddTest } = useTestCard();

  return (
    <div className="testCard">
      <div className="cardWrapper">
        <div className="contentContainer">
          <div className="testInfo">
            <div className="testTitle">
              {testData.name} - <br />
              {testData.description}
            </div>
            <div className="reportTimeContainer">
              <div className="timeWrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/39531d235011acf789a4c4f6e0d8a84102eb3071194e21598566daa1dd89bf64?placeholderIfAbsent=true&apiKey=e40ab9010b324a23beb46e8f03978627"
                  className="icon"
                  alt="Clock icon"
                />
                <div>
                  <span className="normalText">Reports in </span>
                  <span className="emphasisText">{testData.reportTime}</span>
                </div>
              </div>
              <div className="locationContainer">
                <div className="locationWrapper">
                  {testData.locations.map((location, index) => (
                    <div key={location} className="locationItem">
                      <img
                        loading="lazy"
                        src={`http://b.io/ext_${index + 2}-`}
                        className="locationIcon"
                        alt={`${location} icon`}
                      />
                      <div>{location}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="priceContainer">
          {testData.isCashless && (
            <div className="cashlessTag">
              <div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/324404b2944a5de8b98aceca7815541f10cfca7644ba4c2125213159e061db4f?placeholderIfAbsent=true&apiKey=e40ab9010b324a23beb46e8f03978627"
                  className="icon"
                  alt="Cashless icon"
                />
                <div>Cashless</div>
              </div>
            </div>
          )}
          <div className="priceWrapper">
            <div className="priceDetails">
              <div className="priceRow">
                <div className="originalPrice">
                  ₹ {testData.originalPrice}/-
                </div>
                <div className="discount">
                  {testData.discountPercentage}% OFF
                </div>
              </div>
              <div className="finalPrice">
                <div className="price">₹ {testData.discountedPrice}/-</div>
                <div className="priceLabel">Onwards</div>
              </div>
            </div>
            <button
              className="addButton"
              onClick={handleAddTest}
              aria-label={`Add ${testData.name} to cart`}
            >
              {isAdded ? "Added" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LabBookingsCard() {
  return (
    <div className="TestDATA-container">
      {testData.map((test) => (
        <TestCard key={test.id} {...test} />
      ))}
    </div>
  );
}
