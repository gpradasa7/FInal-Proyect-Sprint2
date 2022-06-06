import React from "react";
import {
  ImgReg,
  RegBackground,
  P,
  NextButton,
  SpanInfo,
} from "../../styles/registerStyles";
import location from "../../assets/img-location.png";

export default function Location() {
  return (
    <RegBackground>
      <P
        style={{
          position: "absolute",
          top: "10.32%",
        }}
      >
        Allow access to geo data on the device mark your address on the map
      </P>
      <ImgReg
        src={location}
        alt="img-location"
        style={{
          position: "absolute",
          top: "19.91%",
          width: "92%",
          borderRadius: "20px",
        }}
      />
      <SpanInfo>Where I am ?</SpanInfo>
      <NextButton>Confirm</NextButton>
    </RegBackground>
  );
}
