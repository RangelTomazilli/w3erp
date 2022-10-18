import { ReactNode } from "react";
import {
  BackgroundIcon,
  IconAndTitleDiv,
  TitleTable,
} from "./IconTitleTopTable.Style";

type BackgroundProps = {
  background: string;
  titleTable: string;
  icon: ReactNode;
  color?: string;
};

export const IconTitleTopTable = ({
  background,
  titleTable,
  icon,
}: BackgroundProps) => {
  return (
    <IconAndTitleDiv>
      <BackgroundIcon background={background}>{icon}</BackgroundIcon>
      <TitleTable>{titleTable}</TitleTable>
    </IconAndTitleDiv>
  );
};
