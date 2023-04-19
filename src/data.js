import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
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
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
