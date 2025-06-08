import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './TravelCard.css';

const TravelCard = ({ country, price, image, description }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/info/${country}`);
  };

  return (
    <div className="travel-card">
      <img src={image} alt={country} className="travel-card-image" />
      <div className="travel-card-content">
        <h3 className="travel-card-title">{country}</h3>
        <p className="travel-card-description">{description}</p>
        <p className="travel-card-price">Starting from ${price}</p>
        <button className="travel-card-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
