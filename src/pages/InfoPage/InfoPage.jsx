import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './InfoPage.css';

const InfoPage = () => {
  const { country } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countryInfo = {
    France: {
      days: 7,
      price: 1200,
      locations: ['Paris', 'Nice', 'Lyon', 'Bordeaux'],
      accommodation: {
        min: 'Standard Hotel - $100/night',
        max: 'Luxury Suite - $500/night'
      },
      highlights: [
        'Eiffel Tower Tour',
        'Loire Valley Castles',
        'French Riviera',
        'Wine Tasting in Bordeaux'
      ],
      itinerary: [
        'Day 1-2: Paris Exploration',
        'Day 3-4: Loire Valley',
        'Day 5: Lyon Culinary Experience',
        'Day 6-7: French Riviera'
      ]
    },
    Japan: {
      days: 10,
      price: 1800,
      locations: ['Tokyo', 'Kyoto', 'Osaka', 'Mount Fuji'],
      accommodation: {
        min: 'Traditional Ryokan - $80/night',
        max: 'Luxury Hotel - $600/night'
      },
      highlights: [
        'Cherry Blossom Viewing',
        'Mount Fuji Climb',
        'Traditional Tea Ceremony',
        'Robot Restaurant'
      ],
      itinerary: [
        'Day 1-3: Tokyo Adventure',
        'Day 4-6: Kyoto Cultural Experience',
        'Day 7-8: Osaka Food Tour',
        'Day 9-10: Mount Fuji Area'
      ]
    },
    Italy: {
      days: 8,
      price: 1400,
      locations: ['Rome', 'Florence', 'Venice', 'Tuscany'],
      accommodation: {
        min: 'Boutique B&B - $90/night',
        max: 'Historic Palace Hotel - $450/night'
      },
      highlights: [
        'Colosseum Tour',
        'Vatican Museums',
        'Venetian Gondola Ride',
        'Tuscan Wine Tour'
      ],
      itinerary: [
        'Day 1-2: Rome Ancient History',
        'Day 3-4: Florence Art Tour',
        'Day 5-6: Venice Exploration',
        'Day 7-8: Tuscany Countryside'
      ]
    }
  };

  const info = countryInfo[country];

  const handlePayment = () => {
    alert(`Processing payment of $${info.price} for ${country} tour package`);
    
  };

  return (
    <div className="info-page">
      <div className="info-header">
        <h1>Discover {country}</h1>
      </div>
      
      <section className="info-section">
        <h2>Journey Details</h2>
        <p>Duration: {info.days} days</p>
        
        <h3>Destinations</h3>
        <ul className="locations-list">
          {info.locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
        
        <h3>Accommodation Options</h3>
        <div className="accommodation-info">
          <p>Budget: {info.accommodation.min}</p>
          <p>Luxury: {info.accommodation.max}</p>
        </div>
        
        <h3>Trip Highlights</h3>
        <ul className="highlights-list">
          {info.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        
        <h3>Suggested Itinerary</h3>
        <ul className="itinerary-list">
          {info.itinerary.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        
        <div className="payment-section">
          <div className="price-tag">
            <span className="price-amount">${info.price}</span>
            <span className="price-duration">/{info.days} days</span>
          </div>
          <button className="payment-button" onClick={handlePayment}>
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;