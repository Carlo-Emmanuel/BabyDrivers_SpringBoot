import React, {useState} from 'react'
import {BsArrowLeft, BsArrowRight, BsPersonX} from 'react-icons/bs'


const ImageCarousel = ({data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide+1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide-1);
  };

  return (
    <div className="carousel-slide">
      <BsArrowLeft className='arrow arrow-left' onClick={prevSlide} />
      {data.map((item,index) => {
        return <img src ={item.src} alt = {item.alt} key={index} className={slide == index ? "slide" : "slide-hidden"} />
      })}
      <BsArrowRight className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {data.map((_, index) => {
          return <button key={index} onClick={null} className='indicator'></button>
        })}
      </span>
    </div>
  );
};

export default ImageCarousel;
