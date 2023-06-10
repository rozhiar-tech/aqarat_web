import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import "./Resdencies.css";
import { sliderSettings } from "../../utils/commom";
import data from "../../utils/slider.json";
function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth  r-container">
        <div className="r-title flexColStart">
          <span className="span-head">Best Choice</span>
          <span className="span-body">Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={item.image} alt="residency" />
                <span className="span-body r-price">
                  <span className="span-head2">$</span>
                  <span>{item.price}</span>
                </span>
                <span className="span-head r-name">{item.name}</span>
                <span className="span-body r-location">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
