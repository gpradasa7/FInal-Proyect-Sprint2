import React from "react";
import back from "../../assets/icon-back.png";
import logo from "../../assets/img-resto-logo.png";
import {
  AboutResto,
  ButtonFilter,
  ButtonFilterSection,
  DishesSection,
  DishItem,
  FilterSection,
  HeaderRest,
  ImgResto,
  PointsResto,
  PriceDish,
  Resto,
  RestoDescription,
  TimeAprox,
  TitleDish,
  TitleResto,
} from "../../styles/homeStyles";
import dish1 from "../../assets/img-dish-1.png";
import dishplate from "../../assets/img-dish-plate.png";
import { IconBack } from "../../styles/profileStyles";
import { Imglogo, RegBackground } from "../../styles/registerStyles";

export default function RestaurantDishes() {
  return (
    <RegBackground>
      <IconBack src={back} alt="second-icon" />
      <Imglogo
        style={{
          display: "block",
          height: "41px",
          position: "absolute",
          top: "24px",
        }}
        src={logo}
        alt="logo"
      />
      <HeaderRest>
        <Resto>
          <ImgResto
            src={dish1}
            alt="Resto1"
            style={{ height: "95px", marginLeft: "4%" }}
          />
          <RestoDescription>
            <TitleResto
              style={{
                fontStyle: "normal",
                color: "#414141",
                fontSize: "16px",
              }}
            >
              Pardes Restaurant
            </TitleResto>
            <AboutResto style={{ fontSize: "12px", textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </AboutResto>
            <PointsResto>★★★☆☆</PointsResto>
            <TimeAprox>15-20 min</TimeAprox>
          </RestoDescription>
        </Resto>
      </HeaderRest>
      <FilterSection
        style={{
          margin: "0",
          display: "flex",
          position: "relative",
          top: "-100px",
        }}
      >
        <ButtonFilterSection>
          <ButtonFilter>Fast food</ButtonFilter>
          <ButtonFilter>Pizza</ButtonFilter>
          <ButtonFilter>Salad</ButtonFilter>
          <ButtonFilter>Dinner</ButtonFilter>
          <ButtonFilter>Breakfast</ButtonFilter>
        </ButtonFilterSection>
      </FilterSection>
      <DishesSection>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
        <DishItem>
          <img src={dishplate} alt="dish" style={{ height: "90px" }} />
          <TitleDish>Bolognese salad</TitleDish>
          <PriceDish>$ 14.45</PriceDish>
        </DishItem>
      </DishesSection>
    </RegBackground>
  );
}
