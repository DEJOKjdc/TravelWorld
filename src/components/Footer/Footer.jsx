import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TravelWorld</h3>
          <p>Your trusted travel partner since 2010</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Travel Street, City</p>
          <p>📞 +1 234 567 8900</p>
          <p>✉️ info@travelworld.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 TravelWorld. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;