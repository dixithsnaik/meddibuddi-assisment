import React from "react";
import  './FeaturedHealthCheckup.css';
import HealthCheckupCard from "./health-checkup-cards";

function FeaturedHealthCheckUp() {
  var array = ['Popular', 'Central Visit', 'Full Body Check Up', 'Diabetes','Women health'];
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="featured-health-checkup">
      <div className="featured-header">
        <span className="featured-title">Featured Health Check-ups</span>
        <span className="featured-view">View All</span>
      </div>
      <div className="fhc-slider-parent">
      <div className="fhc-slider">
       
        {array.map((item, index) => (
         <div className= {index==selected? 'fhc-slider-selected-item':'fhc-slider-item'} onClick={
            ()=>setSelected(index)
         } key={index}>{item}</div>
        
        ))}
      </div>
      </div>
<HealthCheckupCard/>
      
    </div>
  );
}

export default FeaturedHealthCheckUp;
