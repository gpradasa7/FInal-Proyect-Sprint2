import React from "react";
import ImgProfile from "../assets/img-profile.png";
import account from "../assets/icon-profile-account.png";
import notification from "../assets/icon-profile-notification.png";
import payment from "../assets/icon-profile-payment.png";
import language from "../assets/icon-profile-language.png";
import location from "../assets/icon-profile-location.png";
import faq from "../assets/icon-profile-faq.png";
import support from "../assets/icon-profile-support.png";
import next from "../assets/icon-next.png";

import {
  H2profile,
  ImgIcon,
  ImgIcon2,
  ImgProfil,
  SelectProfile,
  SpanProfile,
} from "../styles/profileStyles";
import { RegBackground } from "../styles/registerStyles";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <ImgProfil src={ImgProfile} alt="profile" />
      <H2profile>Jenny Wilson</H2profile>
      <SelectProfile>
        <Link
          to="/profile/edit"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={account} alt="first-icon" />
          <SpanProfile>Account edit</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <Link
          to="/profile/notifications"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={notification} alt="first-icon" />
          <SpanProfile>Notifications</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <Link
          to="/profile/payment"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={payment} alt="first-icon" />
          <SpanProfile>Payment</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <Link
          to="profile/language"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={language} alt="first-icon" />
          <SpanProfile>Language</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <Link
          to="/profile/location"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={location} alt="first-icon" />
          <SpanProfile>Location</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <Link
          to="/profile/faqs"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={faq} alt="first-icon" /> <SpanProfile>FAQ</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>

      <SelectProfile>
        <Link
          to="/profile/support"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={support} alt="first-icon" />
          <SpanProfile>Support</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <Navbar />
    </RegBackground>
  );
}
