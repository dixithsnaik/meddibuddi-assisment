import React from 'react';
import { LifeStyleCard } from './LifeStyleCard';
import './LifeStyle.css';

export const LifeStyleGrid = ({data}) => {
    let packages = [
        { imageUrl: '/assets/vectors/lifestyle-health/hyper-tension.svg', text: 'Hyper-Tension' },
        { imageUrl: '/assets/vectors/lifestyle-health/obesity.svg', text: 'Obesity' },
        { imageUrl: '/assets/vectors/lifestyle-health/smoking.svg', text: 'Smoking' },
        { imageUrl: '/assets/vectors/lifestyle-health/diabetic.svg', text: 'Diabetic' },
        { imageUrl: '/assets/vectors/lifestyle-health/obesity.svg', text: 'Obesity' },
        { imageUrl: '/assets/vectors/lifestyle-health/hyper-tension.svg', text: 'Hyper-Tension' }
    ];

    return (
        <div className="wrapper">
            <h2 className="title">{data.title}</h2>
            <div className="content">
                <div className="container">
                    <div className="row">
                        {packages.slice(0, 3).map((pkg, index) => (
                            <LifeStyleCard
                                key={`top-${index}`}
                                index={index}
                                imageUrl={pkg.imageUrl}
                                text={pkg.text}
                            />
                        ))}
                    </div>
                    <div className="row">
                        {packages.slice(3, 6).map((pkg, index) => (
                            <LifeStyleCard
                                key={`bottom-${index + 3}`}
                                index={index + 3}
                                imageUrl={pkg.imageUrl}
                                text={pkg.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
