import MailIcon from "../../../assets/icons/MailIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import { TopBar } from "../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
} from "../dashboard/Dashboard.Style";
import { DashboardTableData } from "../dashboard/dashboardTableData";
import { ReturnButton } from "../deshboardDetalhamento/returnButton";
import {
  CenterContainer,
  ClientDataBar,
  ClientDataBlock,
  ClienteDataContact,
  ReturnButtonDiv,
  TitleClientDetail,
} from "./PredictionsDetail.Style";

export const PredictionsDetail = () => {
  return (
    <StyledContainer>
      <LeftBlueBar />
      <StyledCenterContainer>
        <TopBar name="Rangel Tomazilli" email="rangel.tomazilli@gmail.com" />
        <ReturnButtonDiv>
          <ReturnButton previousPage="Predição" />
        </ReturnButtonDiv>
        <ClientDataBar>
          <TitleClientDetail>Hotel Ibis</TitleClientDetail>
          <ClientDataBlock>
            <PhoneIcon />
            <ClienteDataContact>31 99468-9894</ClienteDataContact>
            <MailIcon />
            <ClienteDataContact>hotelibis@gmail.com</ClienteDataContact>
          </ClientDataBlock>
        </ClientDataBar>
        <CenterContainer>
          <DashboardTableData />
          <DashboardTableData />
        </CenterContainer>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
