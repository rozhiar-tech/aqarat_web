import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Companies from "../components/companies/Companies";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";

function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
}

export default Home;
