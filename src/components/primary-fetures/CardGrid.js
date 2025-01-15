import React from 'react';
import Card from './Card';

// Data for the cards
const cardsData = [
  { title: 'Annual Health Check', iconPath: '/assets/vectors/primary-features/annual-health-check.svg' },
  { title: 'Book Lab Tests', iconPath: '/assets/vectors/primary-features/lab-test.svg' },
  { title: 'Popular Health Checks', iconPath:'/assets/vectors/primary-features/popular-health-checks.svg' },
  { title: 'Find Labs / Hospitals', iconPath: '/assets/vectors/primary-features/find-hospitals.svg' },
  { title: 'X-Rays, Scans & MRIs', iconPath: '/assets/vectors/primary-features/scans.svg' },
  { title: 'Previous Orders', iconPath: '/assets/vectors/primary-features/history-orders.svg'  },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} iconPath={card.iconPath} />
      ))}
    </div>
  );
};

export default CardGrid;
