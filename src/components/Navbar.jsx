import React from "react";
import { Link } from "react-router-dom";

import { RegBackground } from "../styles/registerStyles";
import { IconImg, NavContent } from "../styles/NavContentStyles";
import iconHome from "../assets/icon-home.png";
import iconSearch from "../assets/icon-search.png";
import iconRecent from "../assets/icon-recent.png";
import iconProfile from "../assets/icon-profile.png";
export default function Navbar() {
  return (
    <RegBackground>
      <NavContent>
        <Link to="/home">
          <IconImg src={iconHome} alt="icon-home" />
        </Link>
        <Link to="/search">
          <IconImg
            src={iconSearch}
            style={{ height: "29px" }}
            alt="icon-search"
          />
        </Link>

        <Link to="/orders">
          <IconImg src={iconRecent} alt="icon-recent" />
        </Link>

        <Link to="/profile">
          <IconImg src={iconProfile} alt="icon-profile" />
        </Link>
      </NavContent>
    </RegBackground>
  );
}
