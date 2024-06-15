import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.20fr);
  grid-template-rows: repeat(5, 0.10fr);
  gap: 1px 2px; 
  padding: 2px;
`;

export const CardContainer1 = styled.button`
  padding: 1rem;
  margin-left: 40px;
  color: #292929;
  width: 230px;
  height: 99px;
  margin-bottom: -50px;
  border-radius: 16px;
  border: none;
  font-family: barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  box-shadow: 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D;
  background-color: #fff;
`;

export const StyledImage = styled.img`
  width: 24px;
  height: auto;
`;

export const MinecraftText = styled.div`
  font-weight: 500;
`;

export const RestoText = styled.div`
  font-weight: 300;
`;

export const Pessoas = styled.div`
  font-weight: 300;
  margin-left: 0px;
`;
