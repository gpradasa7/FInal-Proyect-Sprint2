import React from "react";
import ImgProfile from "../assets/img-profile.png";
import back from "../assets/icon-back.png";
import editPhotoProfile from "../assets/icon-change-photoprofile.png";
import editBotton from "../assets/icon-edit-profile.png";

import {
  H2profile,
  IconBack,
  IconChangePhoto,
  ImgIcon2,
  ImgProfileEdit,
  SelectProfile,
  SpanProfile,
} from "../styles/profileStyles";
import { NextButton, RegBackground } from "../styles/registerStyles";

export default function ProfileEdit() {
  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <H2profile>Profile</H2profile>
      <ImgProfileEdit src={ImgProfile} alt="profile" />
      <IconChangePhoto src={editPhotoProfile} alt="second-icon" />
      <IconBack src={back} alt="second-icon" />
      <SelectProfile>
        <SpanProfile>Jenny Wilson</SpanProfile>
        <ImgIcon2 src={editBotton} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <SpanProfile>jennywilson@gmail.com</SpanProfile>
        <ImgIcon2 src={editBotton} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <SpanProfile>+1 903 354 43 43 </SpanProfile>
        <ImgIcon2 src={editBotton} alt="second-icon" />
      </SelectProfile>
      <NextButton>Save</NextButton>
    </RegBackground>
  );
}
