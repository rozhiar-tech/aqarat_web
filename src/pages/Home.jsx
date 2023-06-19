import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Companies from "../components/companies/Companies";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ChatBot from "../components/chatBot/ChatBot";

function Home() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <ChatBot />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
