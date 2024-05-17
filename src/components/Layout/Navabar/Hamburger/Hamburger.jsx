import { CloseOutlined, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Hamburger.css';

const Hamburger = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);
  return (
    <div className="hamburger">
      <div className="hamburger-icon d-flex" onClick={handleNavOpen}>
        <Menu fontSize="inherit" color="inherit" />
      </div>

      <div className={`ham-links-box ${navOpen ? 'ham--open' : 'ham--close'}`}>
        <div className="ham-close_icon d-flex" onClick={handleNavClose}>
          <CloseOutlined fontSize="inherit" />
        </div>
        <div className="ham-links d-flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'ham__active' : 'ham__link'
            }
            onClick={handleNavClose}
          >
            Home
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'ham__active' : 'ham__link'
            }
            onClick={handleNavClose}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
