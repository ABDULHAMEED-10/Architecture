/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import image1 from "../../../../assets/bg_main.png";
import image2 from "../../../../assets/main.jpg";
// import image2 from "../../../../assets/hwX5Pf1.jpg";


import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero_blur">
        <h4>
          Building House
        </h4>
        <h1>Building Dream, shaping future</h1>
        <p>
          We are committed to providing you with the best building services. We approach every project with a focus functionality and structural engineering. 
        </p>
        <button type="button" className="btn-primary">
          Contact Us
        </button>
      </div>
      <img className="main_image" src={image1} alt="hero" />
      <div className="blue_div">
        
      </div>
      <img className="sec_image" src={image2} alt="hero" />
    </div>
  );
};

export default HeroSection;
