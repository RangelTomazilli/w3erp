import styled from "styled-components";
import { colorsTheme } from "../../../theme";

export const ReturnButtonBox = styled.div`
  color: ${colorsTheme.grey900};
  display: flex;
  width: 80vw;
  align-items: center;
`;
export const BackgroundIcon = styled.div`
  background-color: ${colorsTheme.grey100};
  width: 48px;
  height: 48px;
  border-radius: 30px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const SpanButton = styled.span`
  font-family: "Sora";
  font-weight: 400;
  font-size: 20px;
`;
