import { useEffect } from 'react';
import TravelCard from '../../components/TravelCard/TravelCard';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    {
      id: 1,
      country: "France",
      price: 1200,
      image: "/france.jpg",
      description: "Discover romantic Paris and the charming French countryside."
    },
    {
      id: 2,
      country: "Japan",
      price: 1800,
      image: "/japan.jpg",
      description: "Discover the perfect blend of tradition and modernity"
    },
    {
      id: 3,
      country: "Italy",
      price: 1400,
      image: "/italy.jpg",
      description: "Explore ancient history and savor world-class cuisine"
    }
  ];

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world's most beautiful destinations</p>

        </div>
        
      </div>
      
      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="travel-cards">
          {destinations.map(destination => (
            <TravelCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;