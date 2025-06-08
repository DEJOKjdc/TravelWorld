import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="/logoicon.png" alt="Home" className="icon" />TravelWorld</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><img src="/homeicon.png" alt="Home" className="icon" />Home</Link></li>
        <li><Link to="/about"><img src="/about.png" alt="About" className="icon" />About</Link></li>
        <li><Link to="/contact"><img src="/contact.png" alt="Contact" className="icon" />Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;