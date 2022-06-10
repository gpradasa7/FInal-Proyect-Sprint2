import React from "react";
import ImgSupport from "../assets/img-support.png";
import back from "../assets/icon-back.png";
import next from "../assets/icon-next.png";
import support from "../assets/icon-profile-support.png";
import chat from "../assets/icon-support-chat.png";
import mail from "../assets/icon-support-mail.png";

import {
  H2profile,
  IconBack,
  ImgIcon,
  ImgIcon2,
  ImgProfileEdit,
  SelectProfile,
  SpanProfile,
} from "../styles/profileStyles";
import { RegBackground } from "../styles/registerStyles";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileSupport() {
  const navigate = useNavigate();

  const handlerReturn = () => {
    navigate(-1);
  };
  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <H2profile>Support</H2profile>
      <ImgProfileEdit
        style={{ margin: "30px 0", width: "220px" }}
        src={ImgSupport}
        alt="support"
      />
      <IconBack onClick={handlerReturn} src={back} alt="second-icon" />
      <SelectProfile>
        <ImgIcon src={support} alt="first-icon" />
        <SpanProfile>Support</SpanProfile>
        <ImgIcon2 src={next} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <Link
          to="/profile/chat"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          <ImgIcon src={chat} alt="first-icon" />
          <SpanProfile>Live chat</SpanProfile>
          <ImgIcon2 src={next} alt="second-icon" />
        </Link>
      </SelectProfile>
      <SelectProfile>
        <ImgIcon src={mail} alt="first-icon" />
        <SpanProfile>Send email</SpanProfile>
        <SpanProfile
          style={{
            fontSize: "10px",
            fontWeight: "400",
            color: "#A7A7A7",
            position: "absolute",
            right: "3.50%",
          }}
        >
          example@gmail.com
        </SpanProfile>
      </SelectProfile>
    </RegBackground>
  );
}
