import { TitleStyle } from "./Title.Style";

type Props = {
  text: string;
  fontSize: string;
  color: string;
};

export const TitleTopBar = ({ text, color, fontSize }: Props) => {
  return (
    <TitleStyle color={color} fontSize={fontSize}>
      {text}
    </TitleStyle>
  );
};
