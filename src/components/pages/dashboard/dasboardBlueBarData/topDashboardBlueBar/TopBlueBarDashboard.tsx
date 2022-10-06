import ArrowDownDashboardIcon from "../../../../../assets/icons/ArrowDownDashboardIcon";
import { TextDateBlueBar } from "../DashboardBlueBarData.Style";
import {
  DashboardTitle,
  FilterDateDashBoard,
  TopoBlueBarStyle,
} from "./TopBlueBarDasboard.Style";
import { TitleTopBar } from "../styledTitle";
import Calendar from "../../../../../assets/icons/calendar.png";
import { colorsTheme } from "../../../../theme";

export const TopBlueBarDashboard = () => {
  return (
    <TopoBlueBarStyle>
      <DashboardTitle>
        <TitleTopBar color={colorsTheme.white} fontSize="32" text="Dashboard" />
      </DashboardTitle>
      <FilterDateDashBoard>
        <img src={Calendar} alt="calendário" />
        <TextDateBlueBar>
          Mostrar: <strong>Esse mês</strong>
        </TextDateBlueBar>
        <ArrowDownDashboardIcon />
      </FilterDateDashBoard>
    </TopoBlueBarStyle>
  );
};
