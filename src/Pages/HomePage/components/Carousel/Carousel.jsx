import { useState, useEffect } from 'react';
import { CarouselData } from '../../../../demodata';
import './Carousel.css';
import CarouselItem from './CarouselItem';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time, setTime] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1));
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [time, currentIndex]);
  return (
    <div className="carousel_ d-flex">
      <div className="carousel__wrapper_ ">
        <div
          className="carousel__slides"
          style={{ transform: `translate(-${currentIndex * 100}%)` }}
        >
          {CarouselData.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="carousel__btns d-flex">
        {CarouselData.map((item, index) => (
          <div
            key={index}
            className={`${
              currentIndex == index ? 'carousel__active' : 'carousel__btn'
            } d-flex`}
            onClick={() => {
              setCurrentIndex(index)
              setTime(5000)
            }}
          >
            <div className="carousel__btn-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
