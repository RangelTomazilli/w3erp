import { ReactNode } from "react";
import {
  BackgroundIcon,
  IconAndTitleDiv,
  TitleTable,
} from "./IconTitleTopTable.Style";

type BackgroundProps = {
  background: string;
  title: string;
  icon: ReactNode;
  color?: string;
};

export const IconTitleTopTable = ({
  background,
  title,
  icon,
}: BackgroundProps) => {
  return (
    <IconAndTitleDiv>
      <BackgroundIcon background={background}>{icon}</BackgroundIcon>
      <TitleTable>{title}</TitleTable>
    </IconAndTitleDiv>
  );
};
