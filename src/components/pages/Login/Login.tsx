import {
  EayeButtonStyled,
  SpaceBlock,
  StyledBlockContent,
  StyledBlockImage,
  StyledBlockInput,
  StyledButtonLogin,
  StyledContainer,
  StyledParagraph,
  StyledTitle,
  TitleBox,
} from "./Login.Style";
import { useState } from "react";
import fundo from "../../../assets/images/fundo.png";
import { InputPlusLabel } from "../../styledInput.tsx";
import { CheckboxRemember } from "../../loginCheckbox";
import { ForgotPasswordLink } from "../../forgotPassword";
import EyeIcon from "../../../assets/icons/EyeIcon";
import EyeOffIcon from "../../../assets/icons/EyeOffLine";
import { useNavigate } from "react-router-dom";
import { AuthLogin } from "../../services/Auth";

type InputProps = {
  eye: boolean;
};

export const Login = ({ eye }: InputProps) => {
  const [email, setEmail] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [isShowing, setIsShoing] = useState(!eye);

  const isPassword = () => setIsShoing(!isShowing);

  const ValidateLogin = async () => {
    const navigate = useNavigate();

    const postLogin = await AuthLogin(email, password);
    if (postLogin.logged) {
      navigate("/dashboard");
      return;
    }
    alert(postLogin.message);
  };

  // const validateLogin = async () => {

  //   try {
  //     setIsLoading(true)
  //     const result = await AuthLogin.login({email: email, password: password})
  //     alert(result)
  //     setIsLoading(false)
  //     Navigate('/list')
  //   } catch (error) {
  //     alert(error as any).message)
  //   }
  // };

  return (
    <StyledContainer>
      <StyledBlockContent>
        <TitleBox>
          <StyledParagraph>Seja bem vindo!</StyledParagraph>
          <StyledTitle>Realize seu Login</StyledTitle>
        </TitleBox>
        <InputPlusLabel
          htmlfor="email"
          id="email"
          labelName="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Insira seu e-mail"
          type="text"
        />
        <StyledBlockInput>
          <InputPlusLabel
            htmlfor="password"
            id="password"
            labelName="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={isShowing ? "text" : "password"}
            placeholder="Insira sua senha"
          />
          <EayeButtonStyled type="button" onClick={isPassword}>
            {isShowing ? <EyeIcon /> : <EyeOffIcon />}
          </EayeButtonStyled>
        </StyledBlockInput>
        <SpaceBlock>
          <CheckboxRemember
            id="remember"
            htmlFor="remember"
            labelName="Lembrar-me"
          />
          <ForgotPasswordLink text="Esqueci minha senha" />
        </SpaceBlock>
        <StyledButtonLogin type="button" onClick={ValidateLogin}>
          Entrar
        </StyledButtonLogin>
      </StyledBlockContent>
      <StyledBlockImage>
        <img
          src={fundo}
          alt="Acompanhe suas vendas de um jeito fácil e simples."
        />
      </StyledBlockImage>
    </StyledContainer>
  );
};
