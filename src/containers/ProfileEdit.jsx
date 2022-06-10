import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const handlerReturn = () => {
    navigate(-1);
  };
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(false);
  };

  return (
    <RegBackground style={{ justifyContent: "flex-start", marginTop: "50px" }}>
      <H2profile>Profile</H2profile>
      <ImgProfileEdit src={ImgProfile} alt="profile" />
      <IconChangePhoto src={editPhotoProfile} alt="second-icon" />
      <IconBack onClick={handlerReturn} src={back} alt="second-icon" />
      <SelectProfile>
        <SpanProfile>
          <input
            style={{
              border: "none",
              inlineSize: "252px",
              blockSize: "26px",
              borderRadius: "5px",
              padding: "0 20px",
            }}
            type="text"
            defaultValue="Jenny Wilson"
            disabled={edit}
          />
        </SpanProfile>
        <ImgIcon2 onClick={handleEdit} src={editBotton} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <SpanProfile>
          <input
            style={{
              border: "none",
              inlineSize: "252px",
              blockSize: "26px",
              borderRadius: "5px",
              padding: "0 20px",
            }}
            type="text"
            defaultValue="jennywilson@gmail.com"
            disabled={edit}
          />
        </SpanProfile>
        <ImgIcon2 onClick={handleEdit} src={editBotton} alt="second-icon" />
      </SelectProfile>
      <SelectProfile>
        <SpanProfile>
          <input
            style={{
              border: "none",
              inlineSize: "252px",
              blockSize: "26px",
              borderRadius: "5px",
              padding: "0 20px",
            }}
            type="text"
            defaultValue="+1 903 354 43 43"
            disabled={edit}
          />
        </SpanProfile>
        <ImgIcon2 onClick={handleEdit} src={editBotton} alt="second-icon" />
      </SelectProfile>
      <NextButton>Save</NextButton>
    </RegBackground>
  );
}
