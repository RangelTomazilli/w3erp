import styled from "styled-components";

export const BackgroundCard = styled.div<{ color: string; fontColor: string }>`
  background-color: ${({ color }) => `${color}`};
  color: ${({ fontColor }) => `${fontColor}`};
  border-radius: 20px;
  width: 235px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
`;
