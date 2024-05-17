/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {servicesData} from "../../../../demodata";
import "./HeroSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="hero-section ">
      <div className="hero__img-section d-flex">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          interval={3000}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showStatus={false}
          showArrows={false}
          onChange={(index) => {
            handleSlideChange(index)
          }}
        >
          {servicesData.map((service, index) => (
            <div className="__c_image" key={index}>
              <img src={service.image} alt="hero" />
              <div>
                <h1 className={currentIndex === index ? "animate_h" : "without_animate"}><span>{service.title_1}</span><span style={{color:"white"}}>{service.title_2}</span></h1>
                <div>
                <p className={currentIndex === index ? "animate_p" : "without_animate"}>{service.text}</p>
                <button className={currentIndex === index ? "animate_b btn--primary" : "without_animate btn--primary"}>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
