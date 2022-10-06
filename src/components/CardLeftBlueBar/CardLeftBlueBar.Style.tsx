import styled from "styled-components";

export const CardLeftBlueBarStyle = styled.div `
    width: 90%;
    height: 10%;
    display: flex;
    border-radius: 20px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;

    cursor: pointer;
    :hover {
        background-color: #7682C1;
    }

    span {
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`