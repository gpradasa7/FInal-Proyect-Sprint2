import React from "react";
import {
  BottonSection,
  Counter,
  DetailDish,
  Form,
  ImgHead,
  IngredDish,
  InputCheck,
} from "../../styles/producDetailStyles";
import { NextButton, P, RegBackground } from "../../styles/registerStyles";

import time from "../../assets/icon-detail-time.png";
import dish1 from "../../assets/img-detail-head.png";
import { H2profile, SpanProfile } from "../../styles/profileStyles";

export const ProductDetail = () => {
  return (
    <RegBackground
      style={{
        alignItems: "baseline",
        justifyContent: "flex-start",
        margin: "0",
        padding: "0",
        overflow: "initial",
      }}
    >
      <ImgHead>
        <img src={dish1} alt="" />
      </ImgHead>
      <DetailDish>
        <H2profile
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            letterSpacing: " -0.3px",
            width: "100%",
            textAlign: "left",
          }}
        >
          Caesar salad without sauge
        </H2profile>
        <SpanProfile
          style={{
            width: "90px",
            height: "16px",
            display: "inline-block",

            margin: "0",
          }}
        >
          <img src={time} alt="time" />
          15-20 min
        </SpanProfile>
        <P
          style={{
            display: "block",
            width: "85%",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "14px",
            letterSpacing: " -0.3px",
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </P>
      </DetailDish>
      <IngredDish
        style={{
          display: "block",
          width: "100%",
        }}
      >
        <h5
          style={{
            display: "block",
            margin: "0",
            color: "#A7A7A7",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          Additional Ingredients
        </h5>
        <Form>
          <InputCheck type="checkbox" name="tomatoes" id="" />
          <label htmlFor="tomatoes">Tomatoes</label>
        </Form>
        <Form>
          <InputCheck type="checkbox" name="grain" id="" />
          <label htmlFor="grain">Grain</label>
        </Form>
        <Form>
          <InputCheck type="checkbox" name="lettuce" id="" />
          <label htmlFor="lettuce">Lettuce leaf</label>
        </Form>
      </IngredDish>
      <BottonSection>
        <Counter>
          -<span>1</span>+
        </Counter>
        <NextButton
          style={{
            width: "189px",
            position: "initial",
          }}
        >
          Add <span>$14.00</span>
        </NextButton>
      </BottonSection>
    </RegBackground>
  );
};
