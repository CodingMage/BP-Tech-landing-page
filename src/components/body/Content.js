import React from "react";
import { ReactComponent as Gender } from "../../svg/gender.svg";
import { ReactComponent as Compass } from "../../svg/compass.svg";
import { ReactComponent as Settings } from "../../svg/settings.svg";
import { ReactComponent as Picture } from "../../svg/picture.svg";
import { ReactComponent as Sms } from "../../svg/sms.svg";
import { ReactComponent as Calender } from "../../svg/calendar_plus.svg";
import { ReactComponent as Plus } from "../../svg/plus.svg";

import Iphone from "../../svg/iPhone Xs Max.png";

function Content() {
  return (
    <section className="content">
      <div className="content-head">6 Impacts of a Social Media Strategy</div>
      <div className="content-others">
        <div className="container">
          <div className="content-grid">
            <div className="grid1">
              <div
                className="grid1-card"
                style={{
                  marginBottom: "141px",
                }}
              >
                <div className="grid1-card-head">
                  <h3>Brand Awareness</h3>
                  <Gender />
                </div>
                <div className="grid1-card-sub">
                  Many people are spending a considerable amount of time on
                  social media. Follow the MONEY
                </div>
              </div>

              <div
                className="grid1-card"
                style={{
                  marginBottom: "96px",
                }}
              >
                <div className="grid1-card-head">
                  <h3>Brand Loyalty</h3>
                  <Compass />
                </div>
                <div className="grid1-card-sub">
                  Cultivate audience on social media to build loyalty by
                  building connections with prospects and customers
                </div>
              </div>

              <div className="grid1-card">
                <div className="grid1-card-head">
                  <h3>Increase Sales</h3>
                  <Settings />
                </div>
                <div className="grid1-card-sub">
                  Social Media potentially increases leads generation and
                  conversion due to increased interactions with prospects
                </div>
              </div>
            </div>
            <div className="grid2">
              <div className="grid2-img">
                <img src={Iphone} alt="Iphone" />
              </div>
            </div>
            <div className="grid3">
              <div
                className="grid3-card"
                style={{
                  marginBottom: "48px",
                }}
              >
                <div className="grid3-card-head">
                  <Picture />
                  <h3>Customer Service</h3>
                </div>
                <div className="grid3-card-sub">
                  Social Media has changed the face of customer service. Brand
                  action must create a positive impact on the social media
                  audience by taking care of queries in real-time basis.
                </div>
              </div>

              <div
                className="grid3-card"
                style={{
                  marginBottom: "96px",
                }}
              >
                <div className="grid3-card-head">
                  <Sms />
                  <h3>Website Traffic</h3>
                </div>
                <div className="grid3-card-sub">
                  Create export opportunities by reaching a wider audience
                  beyond Nigeria in the most efficient and affordable way
                </div>
              </div>

              <div className="grid3-card">
                <div className="grid3-card-head">
                  <Calender />
                  <h3>Competition</h3>
                </div>
                <div className="grid3-card-sub">
                  Social Media has become a real-time marketplace that
                  organizations cannot ignore. According to researches 48% of
                  buyers would be swayed from online campaigns
                </div>
              </div>
            </div>
          </div>

          <div className="content-btn">
            <button>
              <Plus />
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
