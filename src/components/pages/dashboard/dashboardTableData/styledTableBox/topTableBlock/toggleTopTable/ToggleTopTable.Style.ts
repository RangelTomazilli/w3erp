import styled from "styled-components";
import { colorsTheme } from "../../../../../../theme";

export const BackgroundToggle = styled.div`
  background-color: ${colorsTheme.grey100};
  display: flex;
  border: 1px solid ${colorsTheme.grey60};
  border-radius: 10px;
  padding: 5px;
`;
export const OnHighButton = styled.div`
  background-color: ${colorsTheme.success};
  color: ${colorsTheme.white};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
`;
export const OnDownButton = styled.div`
  background-color: ${colorsTheme.grey100};
  color: ${colorsTheme.grey650};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
`;
