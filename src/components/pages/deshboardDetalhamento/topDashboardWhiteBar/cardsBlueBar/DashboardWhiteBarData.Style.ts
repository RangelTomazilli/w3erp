import styled from "styled-components";
import { colorsTheme } from "../../../../theme";

export const BlueBarDataStyle = styled.div`
  background-color: ${colorsTheme.primary};
  border-radius: 15px;
  width: 83vw;
  height: 250px;
  margin: 98px 0 0 21px;
  padding: 20px;
`;
export const TextDateBlueBar = styled.span`
  color: ${colorsTheme.primary};
  font-weight: 400;
  font-size: 16px;
  padding: 0 5px;
`;
export const CardsBlockBlueBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
`;
export const CardBlueBar = styled.div`
  background-color: ${({ color }) => `${color}`};
  border-radius: 20px;
  width: 235px;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const RightBlockDiv = styled.div`
  margin-left: 8px;
`;
