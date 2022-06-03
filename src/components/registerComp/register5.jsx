import React from "react";
import { RegBackground, P, H2, Input } from "../../styles/registerStyles";
import logoLoader from "../../assets/Logo-loader.png";
import { Imglogo } from "../../styles/registerStyles";

export default function Register5() {
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
      <H2>Verification</H2>
      <P
        style={{
          display: "inline-block",
          margin: "0",
          justifyContent: "initial",
          position: "absolute",
          top: "26.16%",
        }}
      >
        Enter the four-digit code from SMS SMS not received.
        <a href="/">Send again?</a>
      </P>
      <Input
        type="number"
        name="code"
        placeholder="Enter Code"
        id="code"
        style={{
          position: "absolute",
          top: "35.16%",
          width: "130px",
          height: "24px",
        }}
      />
    </RegBackground>
  );
}
