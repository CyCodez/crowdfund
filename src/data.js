import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const links = [
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

export const social = [
  {
    id: 1,
    url: "https://web.facebook.com/chainfundit10?_rdc=1&_rdr",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/chainfundit/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/company/chainfundit",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.youtube.com/@chainfundit",
    icon: <FaYoutube />,
  },
];
