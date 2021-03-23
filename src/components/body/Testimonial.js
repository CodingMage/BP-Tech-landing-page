import React from "react";
import Quote from "../../svg/quote.png";
import Arrow1 from "../../svg/Arrow1.png";
import Arrow2 from "../../svg/Arrow2.png";
import Vee from "../../svg/vee.png";
import Uloma from "../../svg/uloma.png";
import Aka from "../../svg/aka.png";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import { ReactComponent as Plane } from "../../svg/Shape.svg";

function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-quote">
            <img src={Quote} alt="Quote" />
          </div>
          <div className="testimonial-middle">
            <div className="testimonial-middle-text">Client Testimonials</div>
            <div className="testimonial-middle-btn">
              <div className="arrow">
                <img src={Arrow1} alt="Left arrow" />
              </div>
              <div className="arrow">
                <img src={Arrow2} alt="Right arrow" />
              </div>
            </div>
          </div>

          <div className="testimonial-cards">
            <div className="testimonial-cards-card">
              <p>
                I am very satisfied with the work on the Oracle team. good
                service, satisfying work results and can also increase my
                business turnover. thank you so much to the oracle team
              </p>
              <div className="card-details">
                <div className="card-details-img">
                  <img src={Vee} alt="Vee" />
                </div>
                <div className="card-details-info">
                  <h3>Vee VIctory</h3>
                  <p>Businesswoman</p>
                </div>
              </div>
            </div>

            <div className="testimonial-cards-card">
              <p>
                I can say, this team is indeed extraordinarily perfect. I will
                do a lot of teamwork with this team next time. I do not hesitate
                to cooperate because the results are very satisfying
              </p>
              <div className="card-details">
                <div className="card-details-img">
                  <img src={Aka} alt="aka" />
                </div>

                <div className="card-details-info">
                  <h3>Aproko Person</h3>
                  <p>CEO rumania.ox</p>
                </div>
              </div>
            </div>

            <div className="testimonial-cards-card">
              <p>
                I am very satisfied with the work on the Oracle team. good
                service, satisfying work results and can also increase my
                business turnover. thank you so much to the oracle team
              </p>
              <div className="card-details">
                <div className="card-details-img">
                  <img src={Uloma} alt="Vee" />
                </div>

                <div className="card-details-info">
                  <h3>Ulema Rebreather</h3>
                  <p>Founder Lala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Testimonial;

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-content-text">
            Subscribe to Our Newsletter
          </div>
          <div className="newsletter-content-input">
            <TextField
              className="news-email"
              id="outlined-basic"
              label="E-mail"
              value="yusufkehinde11@gmail.com"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Plane />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
