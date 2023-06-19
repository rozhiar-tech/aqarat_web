import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="gold-circle" />
            <h1>
              Let's Find
              <br /> <span>your Dream</span>
              <br /> House
            </h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </span>
            <span className="secondaryText">
              voluptatum, quibusdam, quia, voluptate voluptas quod quos
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="#ffda96" size={25} />
            <input type="text" placeholder="Search Property" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter hero-stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Properties for sale</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Properties for sale</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Properties for sale</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="flexCenter image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
