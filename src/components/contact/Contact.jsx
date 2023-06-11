import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="c-title">Contact Us</span>
          <span className="c-subtitle">We are here to help you</span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="title">Call Us</span>
                    <span className="subtitle">+91 9876543210</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <span>Call Now</span>
                </div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="title">Call Us</span>
                    <span className="subtitle">+91 9876543210</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <span>Call Now</span>
                </div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="title">Call Us</span>
                    <span className="subtitle">+91 9876543210</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <span>Call Now</span>
                </div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="title">Call Us</span>
                    <span className="subtitle">+91 9876543210</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <span>Call Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className={"image-container"}>
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
