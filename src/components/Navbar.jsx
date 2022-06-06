import React from "react";

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
        <IconImg src={iconHome} alt="icon-home" />
        <IconImg
          src={iconSearch}
          style={{ height: "29px" }}
          alt="icon-search"
        />
        <IconImg src={iconRecent} alt="icon-recent" />
        <IconImg src={iconProfile} alt="icon-profile" />
      </NavContent>
    </RegBackground>
  );
}
