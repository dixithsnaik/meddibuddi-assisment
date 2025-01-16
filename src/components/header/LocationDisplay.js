import React from 'react';
import '../../App.css';

export function LocationDisplay() {
  return (
    <div className="locationContainer">
      <img
        loading="lazy"
        src="/assets/icons/arrow-left.svg"
        className="back-button"
        alt="back-button icon"
      />
      <div className="locationContent">
        <div className="locationTitle">
          <div>Billekahalli</div>
          <img
            loading="lazy"
            src="/assets/icons/location-GPS.svg"
            className="locationArrow"
            alt="Arrow icon"
          />
        </div>
        <div className="locationAddress">
          Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka - 560076
        </div>
      </div>
    </div>
  );
}
