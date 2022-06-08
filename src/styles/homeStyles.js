import styled from "styled-components";

export const SectionLocation = styled.div`
  margin: 4% 0;
  display: flex;
  height: 32px;
  width: 90%;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;
export const FilterSection = styled.div`
  display: flex;
  width: 100%;
  margin: 3% 0;
  flex-wrap: wrap;
`;
export const TitleFilter = styled.div`
  display: block;
  width: 100%;
  color: #414141;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  text-align: left;
`;
export const ButtonFilter = styled.div`
  display: flex;
  min-width: 35%;
  background: #f2f2f2;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
  height: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-right: 5px;
  &:active {
    background: #ffe031;
  }
`;
export const ButtonFilterSection = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  overflow-x: auto;
  margin: 3% 0;
`;
export const FilterResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 270%;
  overflow-y: auto;
  margin: 10% 0 0 0;
`;

export const Resto = styled.div`
  display: inline-flex;
  width: 100%;
  min-height: 106px;
  margin: 2% 0;
  &:hover {
    cursor: pointer;
  }
`;
export const ImgResto = styled.img`
  width: 104px;
  border-radius: 10px;
  line-height: 16px;
  display: inline-block;
`;
export const TitleResto = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: block;
`;
export const PointsResto = styled.div`
  font-size: 12px;
  line-height: 16px;
  display: block;
`;
export const TimePrepairResto = styled.div`
  width: 100%;
  font-weight: 300;
  line-height: 16px;
  display: block;
`;
export const PriceResto = styled.div`
  width: 100%;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #a7a7a7;
  line-height: 16px;
  display: block;
`;
export const RestoDescription = styled.div`
  justify-content: center;
  width: 100%;
  margin: 0 4%;
  display: flex;
  flex-direction: column;
`;

export const HeaderRest = styled.div`
  position: absolute;
  top: 70px;
  display: flex;
  width: 100%;
  height: 116px;
`;

export const TimeAprox = styled.div`
  font-weight: 300;
  font-size: 10px;
  float: right;
`;
export const AboutResto = styled.div``;
export const DishesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 450px;
  position: absolute;
  top: 312px;
`;
export const DishItem = styled.div`
  margin: 2.5% auto;
  align-items: center;
  width: 144px;
  min-height: 142px;
`;
export const TitleDish = styled.div``;
export const PriceDish = styled.div``;
