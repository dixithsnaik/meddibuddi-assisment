import React from 'react';
import './SafetyFeatures.css';
import SafetyCard from './SafetyCard';

const safetyData = [
  {
    id: 1,
    title: "Gov. Approved Diagnostic Centres",
    img: "/assets/vectors/safe-secure-lab-tests/test-centers.svg",
  },
  {
    id: 2,
    title: "Daily Temperature Check of all Technicians",
    img: "/assets/vectors/safe-secure-lab-tests/temprature-check.svg",
  },
  {
    id: 3,
    title: "Mandatory use of Mask & Sanitizers",
    img: "/assets/vectors/safe-secure-lab-tests/mask-and-sanitizer.svg",
  },
  {
    id: 4,
    title: "Regular Disinfection of Labs",
    img: "/assets/vectors/safe-secure-lab-tests/disinfection.svg",
  },
];

const SafetyFeatures = () => {
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
