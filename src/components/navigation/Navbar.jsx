import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/homepage.css';

const Navbar = () => {

const navigate = useNavigate();

const [isHidden, setIsHidden] = useState(false);
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
        <nav id="header-menu" className={menuClass}>
          <a href="#benefits">About Us</a>
          <a href="#specs">Service</a>
          <a href="#how-to">Product</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* Right: Demo Button Section (Disappears) */}
        <div id="header-demo" className={demoClass} >
          <button  className="demo-button" onClick={() => navigate(`/login`)}>Get a Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar