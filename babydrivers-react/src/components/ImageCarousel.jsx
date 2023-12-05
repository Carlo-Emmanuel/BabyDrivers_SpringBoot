import React from 'react'
import h1_img from "../assets/images/pexels-asad-photo-maldives-1268871.jpg"
import h2_img from "../assets/images/pexels-asad-photo-maldives-3155696.jpg"
import h3_img from "../assets/images/pexels-pixabay-38238.jpg"


const ImageCarousel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={h1_img} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={h2_img} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={h3_img} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
