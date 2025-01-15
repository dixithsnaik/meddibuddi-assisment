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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d133b4d25efd9ea417707f69232fcc3b8c812da7437cf5788ce577418e02f43?placeholderIfAbsent=true&apiKey=c5d52c1829324b209d22f7c9793efb11"
            className='arrowIcon'
            alt=""
          />
        </div>
    </div>
    <div className="image-container"></div>
    </div>
  );
}