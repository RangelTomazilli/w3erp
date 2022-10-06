import styled from "styled-components";
import { colorsTheme } from "../../../../theme";

export const TopoBlueBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
`;
export const DashboardTitle = styled.h4`
  font-weight: 600;
  font-size: 32px;
  font-family: "Sora";
  color: ${colorsTheme.white};
  display: flex;
`;
export const FilterDateDashBoard = styled.div`
  background-color: ${colorsTheme.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
`;
