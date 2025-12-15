import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/homepage.css';

const Navbar = () => {

const navigate = useNavigate();

const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const SCROLL_THRESHOLD = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // Conditional class names
  const titleClass = `header-section ${isHidden ? 'hidden-element' : ''}`;
  const demoClass = `header-section ${isHidden ? 'hidden-element' : ''}`;
  
  // New: Class for the menu section to center it when elements are hidden
  const menuClass = `header-section ${isHidden ? 'menu-centered' : ''}`;

  return (
    <header id="main-header">
      <div className="header-container">
        
        {/* Left: Title Section (Disappears) */}
        <div id="header-title" className={titleClass}>
          <h1>PPA</h1>
        </div>

        {/* Middle: Menu Section (Stays Fixed & Centers) */}
        <nav id="header-menu" className={`${menuClass} ${isMenuOpen ? 'open' : ''}`}>
          <a href="#aboutus" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#contactus" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </nav>

        {/* Mobile: hamburger toggle (visible on small screens) */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Right: Demo Button Section (Disappears) */}
        <div id="header-demo" className={demoClass} >
          <button  className="demo-button" onClick={() => navigate(`/login`)}>Get a Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar