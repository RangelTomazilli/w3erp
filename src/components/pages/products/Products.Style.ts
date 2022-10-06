import styled from "styled-components";
import { colorsTheme } from "../../theme";

export const StyledDiv = styled.div`
  display: flex;
`;
export const BackgroundFilterIcon = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: ${colorsTheme.grey100};
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
export const ProductsBlock = styled.div`
  display: flex;
  flex-direction: column;
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
export const SearchPlusFilterBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  align-self: flex-start;
`;
export const ProductsTable = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;

  td,
  th {
    padding: 10px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 16px;
  }
  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: ${colorsTheme.grey100};
  }
  thead {
    background-color: ${colorsTheme.primary};
    color: ${colorsTheme.white};
  }
  tr:hover {
    color: ${colorsTheme.primary};
    cursor: pointer;
  }
`;
