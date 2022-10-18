import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLeftBlueBarStyle = styled(Link)`
  text-decoration: none;
  width: 90%;
  height: 10%;
  display: flex;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

  :hover {
    background-color: #7682c1;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
