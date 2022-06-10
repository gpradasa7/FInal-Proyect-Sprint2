import React from "react";
import { Link } from "react-router-dom";
import {
  RegBackground,
  NextButton,
  H2,
  Input,
} from "../../styles/registerStyles";

export default function CreateAccount() {
  return (
    <RegBackground>
      <H2 style={{ top: "3.95%", left: "2.5%" }}>Create account</H2>

      <Input
        type="text"
        name="name"
        placeholder="NAME"
        style={{
          position: "absolute",
          top: "18.16%",
          width: "95%",
        }}
      />
      <Input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        style={{
          position: "absolute",
          top: "28.16%",
          width: "95%",
        }}
      />
      <Input
        type="password"
        name="password"
        placeholder="*********"
        style={{
          position: "absolute",
          top: "38.16%",
          width: "95%",
        }}
      />

      <NextButton>
        <Link to="/home">Sing In</Link>
      </NextButton>
    </RegBackground>
  );
}
