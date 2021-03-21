import React from "react";
import Work from "../../svg/work.png";
function AboutUs() {
  return (
    <section className="whatWeDo">
      <div className="container-fluid">
        <div className="row">
          <div className="whatwedo-left">
            <img src={Work} alt="Work" />
          </div>

          <div className="whatwedo-right">
            <div className="whatwedo-right-top">WHAT WE DO</div>
            <div className="whatwedo-right-head">
              Reinventing Business Processes to Accelerate Success
            </div>

            <p>
              In today’s digitally disrupted market, conventional revenue
              sources are becoming more elusive, sustainable growth requires a
              new operating model that would be more customer-centric and driven
              by intelligence to deliver exceptional experiences and outcomes.
            </p>
            <p>
              An operating model that harnesses new and innovative technologies
              that take advantage of digital channels to grow lead generation,
              brand awareness and visibility, optimise leads conversion and
              brand positioning to continually push the boundaries of doing
              business in Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
