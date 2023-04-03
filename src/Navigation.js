import React from "react";
import chainlogo from "./chainfundit-logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="header flex3">
        <div className="flex-items">
          <a href="mailto:campaigns@chainfundit.com" className="wt">
            Email:Campaigns@ChanfundIt.com
          </a>
        </div>
        <div class="flex-items">
          <a href="tel:+442038380360" className="mytel wt">
            +442038380360
          </a>
        </div>
        <div class="flex-items">
          <a href="#pay" className="mytel wt">
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
