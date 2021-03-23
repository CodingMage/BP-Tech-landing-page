import React from "react";
import Apple from "../../svg/Brand/Apple.png";
import Github from "../../svg/Brand/Github.png";
import Google from "../../svg/Brand/Google+.png";
import Jeep from "../../svg/Brand/Jeep.png";
import Tripadvisor from "../../svg/Brand/Tripadvisor.png";

function Client() {
  return (
    <section className="client">
      <div className="client-head">Our Clients</div>
      <div className="container">
        <div className="client-logos">
          <div className="logos1">
            <img src={Apple} alt="Apple" />
            <img src={Github} alt="Github" />
            <img src={Google} alt="Google" />
            <img src={Jeep} alt="Jeep" />
            <img src={Tripadvisor} alt="Tripadvisor" />
          </div>

          <div className="logos2">
            <img src={Apple} alt="Apple" />
            <img src={Github} alt="Github" />
            <img src={Google} alt="Google" />
            <img src={Jeep} alt="Jeep" />
            <img src={Tripadvisor} alt="Tripadvisor" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
