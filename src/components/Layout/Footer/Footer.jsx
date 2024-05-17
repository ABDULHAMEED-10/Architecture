import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FooterLogo from '../../../assets/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper d-flex">
        <div className="logo d-flex">
          <img src={FooterLogo} alt="FooterLogo" />
        </div>

        <div className="footer-copyright d-flex">
          <span>
            &copy; 2024 Freelancer - Phlox Elementor WordPress Theme. All rights
            reserved.
          </span>
        </div>

        <div className="footer__links d-flex">
          <div className="footer__link d-flex">
            <FacebookOutlinedIcon fontSize="inherit" color="inherit" />
          </div>
          <div className="footer__link d-flex">
            <LinkedInIcon fontSize="inherit" color="inherit" />
          </div>
          <div className="footer__link d-flex">
            <InstagramIcon fontSize="inherit" color="inherit" />
          </div>
          <div className="footer__link d-flex">
            <MailOutlineOutlinedIcon fontSize="inherit" color="inherit" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
