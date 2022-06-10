import React from "react";
import Navbar from "../components/Navbar";
import {
  ButtonFilter,
  ButtonFilterSection,
  Resto,
  FilterResult,
  FilterSection,
  ImgResto,
  PointsResto,
  PriceResto,
  SectionLocation,
  TimePrepairResto,
  TitleResto,
  TitleFilter,
  RestoDescription,
} from "../styles/homeStyles";
import { RegBackground, SpanInfo } from "../styles/registerStyles";
import location from "../assets/icon-home-location.png";
import dish1 from "../assets/img-dish-1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <RegBackground>
      <SectionLocation>
        <img
          style={{ display: "inline-block", height: "100%" }}
          src={location}
          alt="icon-location"
        />
        <SpanInfo style={{ margin: "0 5px" }}>DELIVER TO</SpanInfo>
        <select style={{}} name="location">
          <option value="home">882 Well St, New-York</option>
        </select>
      </SectionLocation>

      <FilterSection>
        <TitleFilter>Restaurants and cafes</TitleFilter>
        <ButtonFilterSection>
          <ButtonFilter>ALL</ButtonFilter>
          <ButtonFilter>Fast food</ButtonFilter>
          <ButtonFilter>Pizza</ButtonFilter>
          <ButtonFilter>Salad</ButtonFilter>
          <ButtonFilter>Dinner</ButtonFilter>
          <ButtonFilter>Breakfast</ButtonFilter>
        </ButtonFilterSection>
      </FilterSection>

      <FilterResult>
        <Resto>
          <ImgResto src={dish1} alt="Resto1" />

          <RestoDescription>
            <Link
              to="/rest/detail:name"
              style={{ textDecoration: "none", color: "#414141" }}
            >
              <TitleResto>Pardes Restaurant</TitleResto>
              <PointsResto>★★★☆☆</PointsResto>
              <TimePrepairResto>Work time 09:30 - 23:00</TimePrepairResto>
              <PriceResto>
                Before you{" "}
                <span style={{ fontWeight: "300", color: "#414141" }}>4$</span>
              </PriceResto>
            </Link>
          </RestoDescription>
        </Resto>
        <Resto>
          <ImgResto src={dish1} alt="Resto2" />
          <Link
            to="/rest/detail:name"
            style={{ textDecoration: "none", color: "#414141" }}
          >
            <RestoDescription>
              <TitleResto>Glamour Kafe</TitleResto>
              <PointsResto>★★★☆☆</PointsResto>
              <TimePrepairResto>Work time 09:30 - 23:00</TimePrepairResto>
              <PriceResto>
                Before you{" "}
                <span style={{ fontWeight: "300", color: "#414141" }}>4$</span>
              </PriceResto>
            </RestoDescription>
          </Link>
        </Resto>
        <Resto>
          <ImgResto src={dish1} alt="Resto3" />
          <Link
            to="/rest/detail:name"
            style={{ textDecoration: "none", color: "#414141" }}
          >
            <RestoDescription>
              <TitleResto>Aromat Bakery</TitleResto>
              <PointsResto>★★★★☆</PointsResto>
              <TimePrepairResto>Work time 09:30 - 23:00</TimePrepairResto>
              <PriceResto>
                Before you{" "}
                <span style={{ fontWeight: "300", color: "#414141" }}>4$</span>
              </PriceResto>
            </RestoDescription>
          </Link>
        </Resto>
        <Resto>
          <ImgResto src={dish1} alt="Resto4" />
          <Link
            to="/rest/detail:name"
            style={{ textDecoration: "none", color: "#414141" }}
          >
            <RestoDescription>
              <TitleResto>Last night Restaurant & kafe</TitleResto>
              <PointsResto>★★★☆☆</PointsResto>
              <TimePrepairResto>Work time 09:30 - 23:00</TimePrepairResto>
              <PriceResto>
                Before you{" "}
                <span style={{ fontWeight: "300", color: "#414141" }}>4$</span>
              </PriceResto>
            </RestoDescription>
          </Link>
        </Resto>
      </FilterResult>

      <Navbar />
    </RegBackground>
  );
}
