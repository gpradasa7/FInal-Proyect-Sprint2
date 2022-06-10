import React from "react";
import Navbar from "../components/Navbar";
import { ImgIcon } from "../styles/profileStyles";
import search from "../assets/icon-search.png";
import recent from "../assets/icon-search-recent.png";
import {
  InputSearch,
  RecenResults,
  RecentSearch,
} from "../styles/searchStyles";

export default function Search() {
  return (
    <div>
      <ImgIcon
        style={{
          width: "13.55px",
          position: "absolute",
          top: "45px",
          left: " 23px",
          zIndex: "1",
        }}
        src={search}
        alt="first-icon"
      />
      <InputSearch
        type="text"
        style={{
          display: "flex",
          position: "relative",
          top: "20px",
          left: " 10px",
          border: "none",
        }}
        placeholder="Search for a dish"
      ></InputSearch>
      <RecentSearch>Recent searches</RecentSearch>
      <RecenResults>
        <img
          style={{
            margin: "0 5px",
          }}
          src={recent}
          alt="recent"
        />
        Pizza
      </RecenResults>

      <Navbar />
    </div>
  );
}
