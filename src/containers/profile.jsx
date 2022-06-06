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

export default function Profile() {
  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <ImgProfil src={ImgProfile} alt="profile" />
      <H2profile>Jenny Wilson</H2profile>
      <SelectProfile>
        <ImgIcon src={account} alt="first-icon" />{" "}
        <SpanProfile>Account edit</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={notification} alt="first-icon" />
        <SpanProfile>Notifications</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={payment} alt="first-icon" />{" "}
        <SpanProfile>Payment</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={language} alt="first-icon" />{" "}
        <SpanProfile>Language</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={location} alt="first-icon" />{" "}
        <SpanProfile>Location</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={faq} alt="first-icon" /> <SpanProfile>FAQ</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={support} alt="first-icon" />{" "}
        <SpanProfile>Support</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
    </RegBackground>
  );
}
