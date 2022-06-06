import styled from "styled-components";

export const NavContent = styled.nav`
  width: 90%;
  height: 37px;
  display: flex;
  position: absolute;
  bottom: 5px;
  justify-content: space-between;
`;

export const IconImg = styled.img`
  height: 32px;

  &:focus {
    cursor: pointer;
    background-color: #ffe031;
    border-radius: 50%;
  }
`;
