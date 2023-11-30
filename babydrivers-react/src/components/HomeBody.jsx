import React from "react";
import hotel1 from "../assets/img/pexels-kelly-2869215.jpg";
import hotel2 from "../assets/img/pexels-pew-nguyen-244133.jpg";

function HomeBody() {
  return (
    <div className="body-container">
      <section className="description">
        <h1 className="section-head">What we are all about.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          in ornare quam viverra orci. Pretium lectus quam id leo in vitae
          turpis.
        </p>
        <div className="main-photos">
          <img src={hotel1} id="hotel-photo1" class="main-body-photo" alt="" />
          <img src={hotel2} class="main-body-photo" alt="" />
        </div>
      </section>
      <section className="staff"></section>
      <section className="amenities"></section>
    </div>
  );
}

export default HomeBody;