import React from "react";
import chainlogo from "./chainfundit-logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="header flex3">
        <div class="flex-items">
          <a href="mailto:campaigns@chainfundit.com">
            Email:Campaigns@ChanfundIt.com
          </a>
        </div>
        <div class="flex-items">
          <a href="tel:+442038380360" className="mytel">
            +442038380360
          </a>
        </div>
        <div class="flex-items">
          <a href="#pay" className="mytel">
            DONATE
          </a>
        </div>
      </div>
      <div className="topnav">
        <img
          src={chainlogo}
          width="300px"
          style={{ marginTop: "15px" }}
          alt="tech"
        />
        <NavLink className="Navigate" to="/donations">
          Donations
        </NavLink>
        <NavLink className="Navigate" to="/vision">
          Vision
        </NavLink>
        <NavLink className="Navigate" to="/about">
          About
        </NavLink>
        <NavLink className="Navigate" to="/home">
          Campaign
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
