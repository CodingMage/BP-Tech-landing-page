import React from "react";
import Logo from "../../svg/Icon.png";
import Facebook from "../../svg/Facebook.png";
import Twitter from "../../svg/Twitter.png";
import LinkedIn from "../../svg/LinkedIn.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contain-footer">
          <div className="footer-top">
            <div className="footer-grid">
              <div className="footer-brand">
                <img src={Logo} alt="Bp Tech" />
                <div className="brand-text">BP Tech</div>
              </div>
              <div className="footer-address">
                <div className="footer-address-head">HEAD OFFICE</div>
                <p>
                  Plot 5 Block 100 Ladipo Omotesho Cole Street Lekki phase 1
                  Marwa bustop Lagos
                </p>
              </div>

              <div className="footer-links">
                <div className="footer-links-head">QUICK LINKS</div>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Careers</p>
              </div>

              <div className="footer-form">
                <form>
                  <input type="email" placeholder="Enter your Email Address" />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="footer-bottom">
            <div className="footer-bottom-right">
              <div className="footer-rights">©2021 All right reserved</div>
              <div className="footer-terms">
                Terms & conditions | Privacy policy
              </div>
            </div>

            <div className="footer-bottom-left">
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={LinkedIn} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
