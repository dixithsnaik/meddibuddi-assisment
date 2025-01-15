import React from 'react';

const Card = ({ title, iconPath }) => {
  return (
    <div className="card">
      <img src={iconPath} alt={title} className="card-icon" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;