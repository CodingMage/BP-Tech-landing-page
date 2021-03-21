import React from "react";
import Logo from "../../svg/Icon.png";
import Hamburger from "../../svg/hamburger.png";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <div className="nav-brand">
            <img src={Logo} alt="Bp tech" />
            <h3>BP Tech</h3>
          </div>
          <div className="nav-right">
            <h3>MENU</h3>
            <img src={Hamburger} alt="hamburger" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
