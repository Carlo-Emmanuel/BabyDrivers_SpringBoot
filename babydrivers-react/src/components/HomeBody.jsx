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
          <div className="main-photos">
            <ImageCarousel data={slides}></ImageCarousel>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            in ornare quam viverra orci. Pretium lectus quam id leo in vitae
            turpis.
          </p>
        </div>
      </section>
      <section className="staff"></section>
      <section className="amenities"></section>
    </div>
  );
}

export default HomeBody;
