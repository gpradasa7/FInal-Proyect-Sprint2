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
  const url = "https://hut-food.herokuapp.com/usuarios";
  const [data, handleChange, reset] = Forms({
    name: "",
    email: "",
    tel: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();
    axios.post(url, data).then(() => reset());
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
          value={data.name}
          onChange={handleChange}
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
        <Link
          style={{ textDecoration: "none", color: "#414141" }}
          to="/location"
        >
          <NextButton type="submit">Sing In</NextButton>
        </Link>
      </Form>
    </RegBackground>
  );
}
