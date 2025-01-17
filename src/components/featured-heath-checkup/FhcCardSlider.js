
import React from 'react';
import './FhcCardSlider.css';

const cardData = [
  {
    "packagename": "MB Pack 1 - MediBuddy Health Wealth Package",
    "packagetime": "Reports in 10-12 hrs",
    "packagenos": "90 Tests",
    "packageincludes": [{
      "name": "Radiology",
      "img": "./sas/asa/saa"
    },
    {
      "name": "2 Consultations",
      "img": "./sas/asa/saa"
    }],
    "packagefasting": "08-14 Hrs",
    "packageavailimg": "./sadas/adas/asdas",
    "packageavailtext": "Lab",
    "packageoriginalcost": "$10,000",
    "packagediscount": "55% OFF",
    "packagecost": "$2,500 onwards",
    "packageextratext": "Available Locations: Noida & Bangalore Only"
  },
  {
    "packagename": "MB Pack 1 - MediBuddy Health Wealth Package",
    "packagetime": "Reports in 10-12 hrs",
    "packagenos": "90 Tests",
    "packageincludes": [{
      "name": "Radiology",
      "img": "./sas/asa/saa"
    },
    {
      "name": "2 Consultations",
      "img": "./sas/asa/saa"
    }],
    "packagefasting": "08-14 Hrs",
    "packageavailimg": "./sadas/adas/asdas",
    "packageavailtext": "Lab",
    "packageoriginalcost": "$10,000",
    "packagediscount": "55% OFF",
    "packagecost": "$2,500 onwards",
    "packageextratext": "Available Locations: Noida & Bangalore Only"
  }
]

function Card({ data }) {

  return <div className='package-card'>
    <h1 className='package-card-h1'>{data.packagename}</h1>
    <div className='package-card-time'>
      <img className='package-icon' src="./asdas/asdasd"></img>
      <h3 className='package-card-time-h3'>{data.packagetime}</h3>
    </div>
    <div className='package-card-div-1'>
      <div className='package-card-nos'>
        <h3 className='package-card-nos-h3'>{data.packagenos}</h3>
        <ul className='package-card-nos-ul'>
          <h3 className='package-card-nos-h3-bland'>Cholesterol - Total</h3>
          <h3 className='package-card-nos-h3-bland'>Vitamin D... + 87 more</h3>
        </ul>
      </div>
      <div className='package-card-includes'>
        <h3 className='package-card-includes-h3'>Includes</h3>
        <ul className='package-card-includes-ul'>
          {data.packageincludes.map((item, index) => <li key={index}>
            <div className='package-card-includes-li-div'>
              <img className='package-icon' src={item.img}></img>
              <h3 className='package-card-includes-h3-bland'>{item.name}</h3>
            </div>
          </li>)}
        </ul>
      </div>
    </div>
    <div className='package-card-div-1'>
      <div className='package-card-fasting'>
        <h3 className='package-card-fasting-h3'>Fasting</h3>
        <h3 className='package-card-fasting-h3-bland'>{data.packagefasting}</h3>
      </div>
      <div className='package-card-avail'>
        <h3 className='package-card-fasting-h3'>Available at</h3>
        <div className='package-card-avail-insidediv'>
          <img className='package-icon' src={data.packageavailimg}></img>
          <h3 className='package-card-avail-h3'>{data.packageavailtext}</h3>
        </div>
      </div>
    </div>
    <div className='package-card-div-1'>
      <div className='package-card-cost'>
        <div className='package-card-cost-insidediv1'>
          <h3 className='package-card-cost-h3'>{data.packageoriginalcost}</h3>
          <h3 className='package-card-cost-h3'>{data.packagediscount}</h3>
        </div>
        <div className='package-card-cost-insidediv1'>
          <h3 className='package-card-cost-h3'>{data.packagecost}</h3>
        </div>
      </div>
      <div className='package-card-button-div'>
        <button className='package-card-button'>Book Now</button>
      </div>
    </div>
    <div className='package-card-extra'>
      <h3 className='package-card-extra-h3'>{data.packageextratext}</h3>
    </div>
  </div>
}


export default function FhcCardSlider() {

  return (
    <div className='Package-main-container'>
      <div className='Package-main-slider'>
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}