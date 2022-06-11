import React from "react";
import { Link } from "react-router-dom";

import {
  ImgResto,
  PointsResto,
  PriceResto,
  Resto,
  RestoDescription,
  TimePrepairResto,
  TitleResto,
} from "../../styles/homeStyles";

function PintarRestaurants({ index, name, image, Worktime }) {
  return (
    <>
      <Resto>
        <ImgResto src={`${image}`} alt="Resto1" />

        <RestoDescription>
          <Link
            to={`/rest/detail/${index}`}
            style={{ textDecoration: "none", color: "#414141" }}
          >
            <TitleResto>{name}</TitleResto>
            <PointsResto>★★★☆☆</PointsResto>
            <TimePrepairResto>Work time {Worktime}</TimePrepairResto>
            <PriceResto>
              Before you{" "}
              <span style={{ fontWeight: "300", color: "#414141" }}>4$</span>
            </PriceResto>
          </Link>
        </RestoDescription>
      </Resto>
    </>
  );
}

export default PintarRestaurants;
