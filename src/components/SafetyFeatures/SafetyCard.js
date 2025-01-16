import React from 'react';
import './SafetyFeatures.css';

const SafetyCard = ({ img, title }) => {
  return (
    <div className="safety-card">
      <img src={img} alt={title} className="safety-image" />
      <p className="safety-text">{title}</p>
    </div>
  );
};

export default SafetyCard;
