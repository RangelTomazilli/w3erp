import styled from "styled-components";

export const BackgroundIcon = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconAndTitleDiv = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const TitleTable = styled.span`
  font-family: "Sora";
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
`;
