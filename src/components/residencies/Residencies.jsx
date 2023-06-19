import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import "./Resdencies.css";
import { sliderSettings } from "../../utils/commom";
// import data from "../../utils/slider.json";
import app from "../../firebaseInit";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

function Residencies() {
  const db = getFirestore(app);
  const [propertyList, setPropertyList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const properties = collection(db, "properties");
      const propertySnapshot = await getDocs(properties);
      const propertyData = propertySnapshot.docs.map((doc) => doc.data());
      setPropertyList(propertyData);
    };
    getData();
  }, [db]);

  const SendToSinglePropertyPage = (item) => {
    localStorage.setItem("property", JSON.stringify(item));
    window.location.href = "/single-property";
  };

  return (
    <section className="r-wrapper" id="residencie">
      <div className="paddings innerWidth  r-container">
        <div className="r-title flexColStart">
          <span className="span-head">Best Choice</span>
          <span className="span-body">Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {propertyList.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => SendToSinglePropertyPage(item)}
              >
                <img src={item.photos[0]} alt="residency" />
                <span className="span-body r-price">
                  <span className="span-head2">$</span>
                  <span>{item.price}</span>
                </span>
                <span className="span-head r-name">{item.location}</span>
                <span className="span-body r-location">{item.description}</span>
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
