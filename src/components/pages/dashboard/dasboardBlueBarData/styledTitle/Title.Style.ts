import styled from "styled-components";
import { colorsTheme } from "../../../../theme";

export const TitleStyle = styled.h4<{ fontSize: string; color: string }>`
  color: ${({ color }) => `${color}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
`;

export const ColorThemeActive = styled.div`
  color: ${colorsTheme.white};
`;
