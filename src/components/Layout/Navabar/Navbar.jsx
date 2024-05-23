import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Hamburger from './Hamburger/Hamburger';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper ">
        <div className="logo d-flex">
          <spna><img src={Logo} alt="Logo" /></spna><span className='brand-name'>Shoccho Sthapona</span>
        </div>
        <div className="nav__links d-flex">
          <NavLink
            to="/"
            className="nav_link"
            
          >
            Home
          </NavLink>


          <NavLink
            to=""
            className="nav_link"
          >
            Contact 
          </NavLink>
        </div>
       
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
