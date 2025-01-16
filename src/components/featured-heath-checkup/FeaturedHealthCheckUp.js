import React from "react";

import  './FeaturedHealthCheckup.css';

function FeaturedHealthCheckUp() {
    var array = ['Popular', 'Central Visit', 'Full Body Check Up', 'Diabetes','Women health'];
  return (
    <div className="featured-health-checkup">
      <div className="featured-header">
        <span>Featured Health Check-ups</span>
        <span>View All</span>
      </div>
      <div className="fhc-slider-parent">
      <div className="fhc-slider">
        {array.map((item, index) => (
          <div className='fhc-slider-item' key={index}>{item}</div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default FeaturedHealthCheckUp;
