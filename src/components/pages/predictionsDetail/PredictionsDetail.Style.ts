import styled from "styled-components";
import { colorsTheme } from "../../theme";

export const ReturnButtonDiv = styled.div`
  width: 95%;
  margin-top: 80px;
  padding: 30px;
`;
export const ClientDataBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 95%;
  border-radius: 24px;
  background-color: ${colorsTheme.primary};
  padding: 30px;
`;
export const TitleClientDetail = styled.h4`
  font-family: "Sora";
  font-weight: 600;
  font-size: 32px;
  color: ${colorsTheme.white};
`;
export const ClienteDataContact = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${colorsTheme.white};
  margin: 0px 20px 0 10px;
`;
export const ClientDataBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;
export const CenterContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 103%;
`;
