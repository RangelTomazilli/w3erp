import { useEffect, useState } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import {
  GetPredictions,
  StyledPredictionsProps,
} from "../../services/getPredictions/index.";
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
  BlockNoFlexDiv,
} from "./preditions.Style";

export const Preditions = () => {
  const [prediction, setPrediction] = useState<StyledPredictionsProps>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await GetPredictions();
        setPrediction(result);
      } catch (error) {
        alert((error as any).message);
      }
    })();
  }, []);
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
          <BlockNoFlexDiv>
            <BlockCenterCards>
              {prediction.map((data) => (
                <PredictionsCard
                  id={data.id}
                  nome={data.nome}
                  produtos={data.produtos}
                />
              ))}
            </BlockCenterCards>
          </BlockNoFlexDiv>
        </BlockCenterDiv>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
