import styled from "styled-components";
import { colorsTheme } from "../../../../../theme";

export const DataBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TotalStyled = styled.h4`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: ${colorsTheme.white};
  margin-right: 10px;
`;
export const PercentBackGround = styled.div`
  padding: 2px 13px;
  gap: 10px;
  width: 60px;
  height: 24px;
  text-align: center;
  background-color: ${colorsTheme.success};
  color: ${colorsTheme.white};
  border-radius: 14px;
`;
