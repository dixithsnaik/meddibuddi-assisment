import React from 'react';
import './LifeStyle.css';

export const LifeStyleCard = ({ imageUrl, text }) => {
    return (
        <div className="packageCard" aria-label={text}>
            <img 
                src={imageUrl} 
                alt="" 
                className="packageImage"
                aria-hidden="true"
            />
            <span className="packageText">{text}</span>
        </div>
    );
};
