import React from "react";
import chainlogo from "./chainfundit-logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="header flex3">
        <div class="flex-items">Email:Campaigns@ChanfundIt.com</div>
        <div class="flex-items">Phone:+442038380360</div>
        <div class="flex-items">DONATE</div>
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
