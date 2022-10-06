import styled from "styled-components";
import { colorsTheme } from "../../../theme";

export const StyledTableData = styled.table`
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
