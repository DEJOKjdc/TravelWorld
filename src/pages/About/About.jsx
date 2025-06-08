import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your Trusted Travel Partner Since 2010</p>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>We are passionate about creating unforgettable travel experiences. With over a decade of expertise in the travel industry, we've helped thousands of travelers explore the world's most beautiful destinations.</p>
          
          <h2>Our Mission</h2>
          <p>To provide exceptional travel experiences that inspire, educate, and connect people across cultures while ensuring sustainable and responsible tourism.</p>
        </div>
        <div className="about-image">
          <img src="/about-us.jpg" alt="Our Team" />
        </div>
      </div>
    </div>
  );
};

export default About;