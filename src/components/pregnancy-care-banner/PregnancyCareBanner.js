import * as React from "react";
import '../../App.css';

export default function PregnancyCareBanner() {
  const handleClick = () => {
    alert('Booking pregnancy care tests!');
  };

  return (
    <div className='bannerContainer' role="banner">
      <div className='contentWrapper'>
        <h2 className='bannerTitle'>
          Baby On Board?
          <br />
          Get Pregnancy Care Tests!
        </h2>
        <p className='bannerDescription'>
          Diabetes, ANC, Ferritin, HIV/Elisa & Thyroid
        </p>
        <div className='ctaContainer'>
          <button 
            className='ctaButton'
            onClick={() => {}}>
            BOOK NOW
          </button>
          <img
            loading="lazy"
            src="assets/icons/arrow-right.svg"
            className='arrowIcon'
            alt=""
          />
        </div>
    </div>
    <div className="image-background"></div>
    <img
            loading="lazy"
            src="assets/images/pregnacy-care.png"
            className='banner-image'
            alt=""
          />
    </div>
  );
}