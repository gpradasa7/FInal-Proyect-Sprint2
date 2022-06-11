import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Forms from "../../hooks/form";
import { Form } from "../../styles/homeStyles";
import {
  RegBackground,
  NextButton,
  H2,
  Input,
} from "../../styles/registerStyles";

export default function CreateAccount() {
  const url = "https://crud2-heroku.herokuapp.com/usuarios";
  const [data, handleChange, reset] = Forms({
    name: "",
    email: "",
    tel: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();
    axios.post(url, data).then(() => reset());
    const dataUser = data.find(item => item.email == Forms.email);
    sessionStorage.setItem("infoUser", JSON.stringify(dataUser));
  };

  useEffect(() => {}, []);

  return (
    <RegBackground>
      <H2 style={{ top: "3.95%", left: "2.5%" }}>Create account</H2>
      <Form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
        }}
      >
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
          type="text"
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="Ingresa tu nombre"
          style={{
            position: "absolute",
            top: "28.16%",
            width: "95%",
          }}
        />
        <Input
          type="email"
          value={data.email}
          onChange={handleChange}
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
          value={data.password}
          onChange={handleChange}
          name="password"
          placeholder="*********"
          style={{
            position: "absolute",
            top: "38.16%",
            width: "95%",
          }}
        />

        <NextButton type="submit">
          <Link
            style={{ textDecoration: "none", color: "#414141" }}
            to="/location"
          >
            Sing In
          </Link>
        </NextButton>
      </Form>
    </RegBackground>
  );
}
