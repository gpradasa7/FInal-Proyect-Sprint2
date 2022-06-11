import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  ButtonFilter,
  ButtonFilterSection,
  FilterResult,
  FilterSection,
  SectionLocation,
  TitleFilter,
} from "../styles/homeStyles";
import { RegBackground, SpanInfo } from "../styles/registerStyles";
import location from "../assets/icon-home-location.png";
import PintarRestaurants from "../components/homeComp/PintarRestaurants";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const resp = await fetch("https://hut-food.herokuapp.com/restaurantes");
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [users]);

  const dataKeys = users.map(resto => ({
    ...resto,
    key: resto.name,
  }));
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
        <ButtonFilterSection style={{ height: "60px" }}>
          <ButtonFilter>ALL</ButtonFilter>
          <ButtonFilter>Fast food</ButtonFilter>
          <ButtonFilter>Pizza</ButtonFilter>
          <ButtonFilter>Salad</ButtonFilter>
          <ButtonFilter>Dinner</ButtonFilter>
          <ButtonFilter>Breakfast</ButtonFilter>
        </ButtonFilterSection>
      </FilterSection>

      <FilterResult>
        {" "}
        {dataKeys.map(resto => (
          <PintarRestaurants key={resto.index} {...resto} />
        ))}
      </FilterResult>

      <Navbar />
    </RegBackground>
  );
}
