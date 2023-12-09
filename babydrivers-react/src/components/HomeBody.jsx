import React from "react";
import headerImg from "../assets/img/pexels-juan-salamanca-61106.jpg";
import img2 from "../assets/img/santamonica.jpg";

import ImageCarousel from "./ImageCarousel.jsx";
import { slides } from "./homeCarousel.json";

function HomeBody() {
  /* const captions = [
    {
      title: "First slide label",
      content: "Some content for the first slide.",
    },
    {
      title: "Second slide label",
      content: "Some content for the second slide.",
    },
    {
      title: "Third slide label",
      content: "Some content for the third slide.",
    },
  ];  */
  return (
    <div className="body-container">
      <div className="header-photo-container">
        <img src={img2} alt="header photo" id="head-photo" />
      </div>
      <section className="section-container">
        <h1>Welcome to Hotel California</h1>

        <h2 className="section-head">What we are all about.</h2>
        <div className="info-container">
          <p className="intro-text">
          Explore Hotel California! <br />
          Your sanctuary in the heart of Los Angeles<br />
          Experience the perfect fusion of luxury and comfort<br />
          Immerse yourself in modern elegance, exceptional service, and a unique stay tailored just for you
          </p>
          <div className="main-photos">
            <ImageCarousel data={slides}></ImageCarousel>
          </div>
        </div>
      </section>
      <section className="staff"></section>
      <section className="amenities"></section>
    </div>
  );
}

export default HomeBody;
