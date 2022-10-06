import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import { TopBar } from "../../topBar";
import { DashboardBlueBarData } from "./dasboardBlueBarData/DashboardBlueBarData";
import {
  StyledCenterContainer,
  StyledContainer,
  StyledLowCenterContainer,
} from "./Dashboard.Style";
import { DashboardTableData } from "./dashboardTableData";

export const Dashboard = () => {
  return (
    <StyledContainer>
      <LeftBlueBar />
      <StyledCenterContainer>
        <TopBar name="Rangel Tomazilli" email="rangel.tomazilli@gmail.com" />
        <DashboardBlueBarData />
        <StyledLowCenterContainer>
          <DashboardTableData />
          <DashboardTableData />
        </StyledLowCenterContainer>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
