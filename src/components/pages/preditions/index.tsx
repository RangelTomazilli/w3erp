import SearchIcon from "../../../assets/icons/SearchIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import { TopBar } from "../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
} from "../dashboard/Dashboard.Style";
import { PredictionsCard } from "./predictionsCard";
import {
  BlockCenterDiv,
  TiltePages,
  SearchDiv,
  IconDiv,
  BlockCenterCards,
} from "./preditions.Style";

export const Preditions = () => {
  return (
    <StyledContainer>
      <LeftBlueBar />
      <StyledCenterContainer>
        <TopBar name="Rangel Tomazilli" email="rangel.tomazilli@gmail.com" />
        <BlockCenterDiv>
          <TiltePages>Predições</TiltePages>
          <SearchDiv>
            <input type="text" placeholder="Pesquise uma palavra-chave"></input>
            <IconDiv>
              <SearchIcon />
            </IconDiv>
          </SearchDiv>
          <BlockCenterCards>
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
            <PredictionsCard
              name="Hotel Ibis"
              status="Status"
              product="Álcool em gel"
              date="02/09/2022"
            />
          </BlockCenterCards>
        </BlockCenterDiv>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
