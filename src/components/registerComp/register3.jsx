import React from "react";
import {
  ImgReg,
  RegBackground,
  P,
  NextButton,
} from "../../styles/registerStyles";
import register from "../../assets/img-register3.png";

export default function Register3() {
  return (
    <RegBackground>
      <ImgReg src={register} alt="img-register" />
      <P>
        Choose what to eat choosing from a variety of restaurants from the list
      </P>
      <NextButton>Next</NextButton>
    </RegBackground>
  );
}
