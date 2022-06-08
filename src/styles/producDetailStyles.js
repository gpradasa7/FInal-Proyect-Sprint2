import styled from "styled-components";

export const ImgHead = styled.div`
  display: flex;
  width: 100%;
  height: 270px;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

export const DetailDish = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const IngredDish = styled.div`
  display: flex;
  margin: 0;
`;
export const Form = styled.form`
  display: inline-flex;
  width: 100%;
`;
export const InputCheck = styled.input`
  display: inline-block;

  &:focus-visible {
    background: #ffe031;
  }
`;

export const Counter = styled.div`
  display: flex;
  width: 103px;
  height: 44px;
  background: #f2f2f2;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.3px;
`;

export const BottonSection = styled.div`
  justify-content: space-between;
  display: flex;
  position: absolute;

  bottom: 0;
  width: 100vw;
`;
