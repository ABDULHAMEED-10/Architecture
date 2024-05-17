import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Hamburger from './Hamburger/Hamburger';
import './Navbar.css';

import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper d-flex">
        <div className="logo d-flex">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="nav__links d-flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav__active' : 'nav__link'
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav__active' : 'nav__link'
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className='contact'>
          <PhoneIcon
            style={{ fontSize: 18, color: 'red' }}
          />
          <h1 className="contact_num">+880 1833-182808</h1>
          
          </div>
        
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
