import React from "react";
import "./Companies.css";
function Companies() {
  return (
    <section className="c-wrapper">
      <h1 className="text-4xl font-bold text-gold paddings flexCenter">
        Download Our Apps On
      </h1>
      <div className="paddings innerWidth flexCenter company-container">
        <img src="./AppStore.png" alt="AppStore" />
        <img src="./PlayStore.png" alt="playstore" />
      </div>
    </section>
  );
}

export default Companies;
