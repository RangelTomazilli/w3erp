import styled from "styled-components";
import { colorsTheme } from "../../../theme";

export const FullPredictionCard = styled.div`
  width: 300px;
  height: 240px;
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  border-radius: 24px;
  padding: 20px;
  margin: 0 10px 20px 0;
`;
export const TopPredictionCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ClientName = styled.span`
  color: ${colorsTheme.grey900};
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
`;
export const ClientStatus = styled.span`
  color: ${colorsTheme.success};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
export const ClientDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
export const ClientDataBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const ClientCardContent = styled.div`
  border-radius: 16px;
  padding: 10px;
  background-color: ${colorsTheme.grey200};
  margin-top: 20px;

  table {
    width: 130%;
    text-align: justify;
  }

  table th {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    color: ${colorsTheme.azul2};
    padding-right: 10px;
  }
  table td {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0px;
  }
`;
