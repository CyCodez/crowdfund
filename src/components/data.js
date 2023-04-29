import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  {
    id: 1,
    url: "/",
    text: (
      <NavLink className="Navigate" to="/home">
        Campaign
      </NavLink>
    ),
  },
  {
    id: 2,
    url: "/about",
    text: (
      <NavLink className="Navigate" to="/about">
        About
      </NavLink>
    ),
  },
  {
    id: 3,
    url: "/projects",
    text: (
      <NavLink className="Navigate" to="/vision">
        Vision
      </NavLink>
    ),
  },
  {
    id: 4,
    url: "/contact",
    text: (
      <NavLink className="Navigate" to="/donations">
        Donations
      </NavLink>
    ),
  },
];

export default links;
