import styled from "styled-components";
import { colorsTheme } from "../../theme";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const StyledBlockContent = styled.div`
  width: 60%;
  height: 100%;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleBox = styled.div`
  justify-content: flex-start;
`;
export const StyledBlockImage = styled.div`
  width: 40%;
  height: 100%;
  align-content: center;
  justify-content: center;
  display: flex;
  background-color: #${colorsTheme.primary};
`;
export const StyledParagraph = styled.p`
  font-family: "Sora";
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const StyledTitle = styled.h3`
  font-family: "Sora";
  font-weight: 700;
  font-size: 36px;
  color: ${colorsTheme.grey900};
  margin-bottom: 40px;
`;

export const SpaceBlock = styled.div`
  width: 334px;
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
`;

export const StyledButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  padding: 12px 70px;
  gap: 10px;
  background-color: ${colorsTheme.primary};
  border-radius: 12px;
  color: ${colorsTheme.white};
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: #${colorsTheme.grey700};
`;

export const InputRemember = styled.input`
  font-weight: 600;
  font-size: 16px;
  margin-right: 5px;
`;
export const StyledBlockInput = styled.div`
  position: relative;
`;
export const EayeButtonStyled = styled.button`
  border-style: none;
  background-color: transparent;
  position: absolute;
  right: 14px;
  top: 17px;
`;
