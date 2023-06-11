import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={120} />
          <span className="f-text">
            our vission <br /> live under a beautiful home
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="f-heading" >information</span>
          <span className="f-location">Sulaymanyah City center building</span>
          <div className="flexCenter f-menu">
            <span className="f-text">Home</span>
            <span className="f-text">About</span>
            <span className="f-text">Contact</span>
            <span className="f-text">Residencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
