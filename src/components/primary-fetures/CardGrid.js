import React from 'react';
import Card from './Card';

const CardGrid = ({data}) => {

  let cardsData = data.props;

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.iconText} iconPath={card.iconUrl} />
      ))}
    </div>
  );
};

export default CardGrid;
