import React, { useState } from "react";
import { RegBackground, P, H2, Input } from "../../styles/registerStyles";
import logoLoader from "../../assets/Logo-loader.png";
import { Imglogo } from "../../styles/registerStyles";
import { Link } from "react-router-dom";

export default function Register4() {
  const [edit, setEdit] = useState(true);

  const handleEdit = event => {
    console.log(event.target.value.length);
    if (event.target.value.length >= 10) {
      setEdit(false);
    }
  };

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
        onChange={handleEdit}
        type="tel"
        name="tel"
        placeholder="Telephone Number"
        required
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
        By clicking the button Login you accept{" "}
        <a style={{ textDecoration: "none" }} href="/">
          Terms of use
        </a>
      </P>

      <Link
        to="/createAccount"
        style={{ textDecoration: "none", color: "#414141" }}
      >
        <button
          onClick={handleEdit}
          disabled={edit}
          style={{
            position: "absolute",
            bottom: "7.11%",
            left: "5%",
            right: "5%",
            width: "90%",
            height: "44px",
            background: "#ffe031",
            borderEadius: "10px",
            border: "none",
            fontFamily: "Roboto",
            fontSyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "16px",
            textAlign: "center",
            justifyContent: "center",
            color: "#414141",
          }}
        >
          Login
        </button>
      </Link>
    </RegBackground>
  );
}
