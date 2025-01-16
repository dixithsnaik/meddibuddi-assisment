import React from 'react';
import styles from './FeaturedHealthCheckup.css';

export default function HealthCheckupCard() {
  const array = []; 
  return (
    <div className='fhc-main-card-slider-div' >

      <div className='fhc-card-slider'>
        {array.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
      </div>

    </div>
  );
}