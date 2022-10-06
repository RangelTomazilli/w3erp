import { ReactNode } from "react";
import { StyledTitle } from "./TitleBlueCard.Style";

type Props = {
  children: ReactNode;
};

export const TitleBlueCard = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};
