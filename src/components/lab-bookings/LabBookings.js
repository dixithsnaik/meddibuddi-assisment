import React from "react";

import  './LabBookings.css';
import LabBookingsCard from "./LabBookingsCard";


function LabBookings() {
    var array = ['For Amazon Employees', 'Central Visit', 'Full Body Check Up', 'Diabetes','Women health'];
    const [selected, setSelected] = React.useState(0);
  return (
    <div className="lab-bookings">
      <div className="lab-header">
        <span className="lab-title">Book Popular Lab Tests</span>
        <span className="lab-view-more">View More</span>
      </div>
      <div className="fhc-slider-parent">
      <div className="fhc-slider">
        {array.map((item, index) => (
          <div className={index==selected?'blt-slider-selected-item' :'blt-slider-item'} onClick={()=> setSelected(index)} key={index}>{item}</div>
        ))}
      </div>
      </div>
        <LabBookingsCard/>
    </div>
  );
}

export default LabBookings;
