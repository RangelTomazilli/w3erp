import {
  DashboardTitle,
  TitleReturnButton,
  TopoBlueBarStyle,
} from "./TopWhiteBarDasboard.Style";

import { TitleTopBar } from "./styledTitle";
import { ReturnButton } from "../returnButton";
import { DashboardWhiteBarData } from "./cardsBlueBar/DashboardWhiteBarData";

type Props = {
  color: string;
  fontSize: string;
  text: string;
};

export const TopWhiteBarDashboard = ({ color, fontSize, text }: Props) => {
  return (
    <TopoBlueBarStyle>
      <DashboardTitle>
        <TitleReturnButton>
          <ReturnButton previousPage="Detalhamento" />
          <TitleTopBar color={color} fontSize={fontSize} text={text} />
        </TitleReturnButton>
      </DashboardTitle>
      <DashboardWhiteBarData />
    </TopoBlueBarStyle>
  );
};
