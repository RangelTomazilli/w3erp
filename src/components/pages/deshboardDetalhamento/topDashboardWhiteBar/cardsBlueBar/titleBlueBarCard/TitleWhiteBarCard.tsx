import { ReactNode } from "react";
import { StyledTitle } from "./TitleWhiteCard.Style";

type Props = {
  children: ReactNode;
};

export const TitleWhiteCard = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};
