import React from "react";
import {
  RegBackground,
  P,
  NextButton,
  H2,
  Input,
} from "../../styles/registerStyles";
import logoLoader from "../../assets/Logo-loader.png";
import { Imglogo } from "../../styles/registerStyles";

export default function Register4() {
  return (
    <RegBackground>
      <Imglogo
        src={logoLoader}
        style={{
          width: "84px",
          height: "63px",
          position: "absolute",
          top: "7.82%",
        }}
        alt="img-register"
      />
      <H2>Sing in</H2>
      <P
        style={{
          display: "inline-block",
          margin: "0",
          justifyContent: "initial",
          position: "absolute",
          top: "26.16%",
        }}
      >
        Login or create an account with your phone number to start ordering
      </P>
      <Input
        type="tel"
        name="tel"
        placeholder="Telephone Number"
        style={{
          position: "absolute",
          top: "35.16%",
        }}
      />
      <P
        style={{
          position: "absolute",
          bottom: "14.22%",
          fontWeight: "300",
          fontSize: "10px",
        }}
      >
        By clicking the button Login you accept <a href="/">Terms of use</a>
      </P>
      <NextButton>Login</NextButton>
    </RegBackground>
  );
}
