import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsCircleFill, BsPersonX } from "react-icons/bs";

const ImageCarousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Slide Functionalities
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  const goToSlide = (index) => {
    setSlide(index);
  };

  return (
    <div className="carousel-slide">
      <BsChevronLeft className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slide == index ? "slide" : "slide-hidden"}
          />
        );
      })}
      <BsChevronRight className="arrow arrow-right" onClick={nextSlide} />
    </div>
  );
};

export default ImageCarousel;

//Failed indicators component
/* <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
              onClick={() => goToSlide(index)}
            ></button>
          );
        })}
      </span> */
