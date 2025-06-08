import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our travel experts</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Our Office</h3>
          <div className="contact-details">
            <p>📍 123 Travel Street, City, Country</p>
            <p>📞 +1 234 567 8900</p>
            <p>✉️ info@travelworld.com</p>
          </div>
          
          <h3>Working Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;