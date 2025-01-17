import React from 'react';
import './SafetyFeatures.css';
import SafetyCard from './SafetyCard';

const SafetyFeatures = ({data}) => {

  // console.log(data);
  let safetyData = data.props;

  return (
    <div className="safety-feachers">
    <h3 className="safety-heading">100% Safe & Secure Lab Tests</h3>
      <div className="safety-grid">
    {safetyData.map((item) => (
      <SafetyCard key={item.id} title={item.title} img={item.img} />
    ))}
  </div></div>
    
  );
};
export default SafetyFeatures;
