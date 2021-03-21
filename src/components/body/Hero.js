import React from "react";
import Ellipse from "../../svg/Ellipse.png";

function Hero() {
  return (
    <section className="hero">
      <div className="containor">
        <div className="hero-content">
          <div className="hero-content-one">
            <div className="hero-content-one-head">
              Experienced Personal Consulting
            </div>
            <div className="hero-content-one-sub">
              Increase your revenue, shorten your sales cycles, and strengthen
              your brand.
            </div>
            <div className="hero-content-one-button">
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className="hero-content-two">
            <div className="hero-content-two-img">
              <img src={Ellipse} alt="Ellipse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
