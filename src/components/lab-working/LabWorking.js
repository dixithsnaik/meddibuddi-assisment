import React from 'react';
import './LabWorking.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: '/assets/vectors/how-it-works/lab-tests.svg',
      description:
        'Search for required Lab tests and select Diagnostic centre of your choice. Add prescription, patient details and address to complete the booking.',
    },
    {
      icon: '/assets/vectors/how-it-works/lab-tests.svg',
      description:
        'Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.',
    },
    {
      icon: '/assets/vectors/how-it-works/lab-tests.svg',
      description:
        'We will email you the reports. You can also access your reports within your account on the MediBuddy App.',
    },
  ];

  return (
    <div className="container">
      <h2 className="heading">How it Works?</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">
              <img src={step.icon} alt={`Step ${index + 1}`} />
            </div>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
