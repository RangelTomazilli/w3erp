import styled from "styled-components";
import { colorsTheme } from "../../theme";

export const TiltePages = styled.h4`
  font-family: "Sora";
  font-weight: 600;
  font-size: 32px;
  color: ${colorsTheme.grey900};
`;

export const BlockCenterDiv = styled.div`
  display: flex;
  margin-top: 100px;
  padding-left: 27px;
  width: 100%;
  flex-direction: column;
`;
export const BlockCenterCards = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 80vw;
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  border-radius: 24px;
  padding: 20px;
  align-items: center;

  input {
    border: 1.5px solid ${colorsTheme.grey60};
    border-radius: 16px;
    padding: 15px 30px 15px 10px;
    font-size: 14px;
    width: 340px;
    font-size: 16px;
    font-family: "Poppins";
    font-weight: 400;
  }
`;
export const IconDiv = styled.div`
  margin-left: -30px;
`;
