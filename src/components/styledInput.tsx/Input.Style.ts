import styled from "styled-components";

export const StyledLabel = styled.div`
  position: relative;
  margin: 10px;

  label {
    position: absolute;
    top: -9px;
    left: 10px;
    font-weight: 400;
    font-size: 14px;
    color: #00c247;
    background-color: white;
  }
  input {
    border: 1px solid #00c247;
    border-radius: 12px;
    padding: 15px 30px 7px 10px;
    font-size: 14px;
    align-items: center;
    width: 340px;
  }
`;
