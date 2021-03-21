import React from "react";
import Work from "../../svg/work.png";
import Icon1 from "../../svg/icon1.png";
import Icon2 from "../../svg/icon2.png";
import Icon3 from "../../svg/icon3.png";
import { ReactComponent as Plus } from "../../svg/plus.svg";

function AboutUs() {
  return (
    <>
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
                new operating model that would be more customer-centric and
                driven by intelligence to deliver exceptional experiences and
                outcomes.
              </p>
              <p>
                An operating model that harnesses new and innovative
                technologies that take advantage of digital channels to grow
                lead generation, brand awareness and visibility, optimise leads
                conversion and brand positioning to continually push the
                boundaries of doing business in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scope">
        <div className="container-fluid">
          <div className="scope-content">
            <div className="line"></div>
            <div className="scope-content-head">Scope Of Work</div>
            <div className="scope-content-sub">
              Our Blueprint for Success to help you ACCELERATE growth.
            </div>
            <p>
              If you don’t have the time or expertise to build your own inside
              digital marketing and sales operation team, or you’re currently
              experiencing frustration and uncertainty with the team you’re
            </p>
            <p>
              Our all-in-one services encompass the entire operation to deliver
              results that are predictable and repeatable over time - the only
              way to build and maintain a truly sustainable and scalable inside
              sales operation.
            </p>
            <p>
              We carefully select the brightest minds in the industry to serve
              our various clients!
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-top">
          <h2>How We Do It</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan,
            netus donec mauris ante. Amet non semper urna.
          </p>
        </div>
        <div className="features-bottom">
          <div className="feature-card">
            <div className="card-icon">
              <img src={Icon1} alt="Marketplace Consulting" />
            </div>
            <div className="card-head">Marketplace Consulting</div>
            <p>
              We help organizations across the private, public, and social
              sectors create the transformation that matters to them by
              analyzing “who’s buying, what and why?”
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">
              <img src={Icon2} alt="Digital Marketing" />
            </div>
            <div className="card-head">Digital Marketing</div>
            <p>
              We use digital tools to help you grow brand awareness, convert
              more leads through social media, content management and customer
              service.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">
              <img src={Icon3} alt="Sales Operation" />
            </div>
            <div className="card-head">Sales Operation</div>
            <p>
              We design, build & manage highvelocity inside sales operations to
              deliver sales results that are predictable and repeatable over
              time.
            </p>
          </div>
        </div>
        <div className="features-btn">
          <button>
            <Plus /> Learn More
          </button>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
