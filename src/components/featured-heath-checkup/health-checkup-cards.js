import React from 'react';
import styles from './FeaturedHealthCheckup.css';
import CheckUpCard from './ChcekUpCard';

export default function HealthCheckupCard() {
  const array = []; 
  return (
    <div className='fhc-main-card-slider-div' >

      <div className='fhc-card-slider'>
        {array.map((item, index) => (
          <CheckUpCard key={index} item={item}/>
        ))}
      </div>
      
    </div>
  );
}