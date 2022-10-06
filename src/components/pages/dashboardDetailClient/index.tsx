import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import { colorsTheme } from "../../theme";
import { TopBar } from "../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
  StyledLowCenterContainer,
} from "../dashboard/Dashboard.Style";
import { DashboardTableData } from "../dashboard/dashboardTableData";
import { TopWhiteBarDashboard } from "../deshboardDetalhamento/topDashboardWhiteBar/TopWhiteBarDashboard";

export const DashboardDetailClient = () => {
  return (
    <StyledContainer>
      <LeftBlueBar />
      <StyledCenterContainer>
        <TopBar name="Rangel Tomazilli" email="rangel.tomazilli@gmail.com" />
        <TopWhiteBarDashboard
          color={colorsTheme.primary}
          fontSize="32"
          text="Hotel Ibis"
        />
        <StyledLowCenterContainer>
          <DashboardTableData />
          <DashboardTableData />
        </StyledLowCenterContainer>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
