import React from "react";
import {
  ImgReg,
  RegBackground,
  P,
  NextButton,
} from "../../styles/registerStyles";
import register from "../../assets/img-register2.png";
import { Link } from "react-router-dom";

export default function Register2() {
  return (
    <RegBackground>
      <ImgReg src={register} alt="img-register" />
      <P>
        Choose what to eat choosing from a variety of restaurants from the list
      </P>
      <NextButton>
        <Link
          to="/register3"
          style={{ textDecoration: "none", color: "#414141" }}
        >
          Next
        </Link>
      </NextButton>
    </RegBackground>
  );
}
