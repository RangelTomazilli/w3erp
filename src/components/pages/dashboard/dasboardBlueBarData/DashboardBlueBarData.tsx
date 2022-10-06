import { RadialBar } from "./cardsBlueBar/graphicBlueBarCard";
import { TitleBlueCard } from "./cardsBlueBar/titleBlueBarCard/TitleBLueBarCard";
import { ValuesBlueBarCards } from "./cardsBlueBar/valuesBlueBarCard";
import {
  BlueBarDataStyle,
  CardsBlockBlueBar,
  CardBlueBar,
  RightBlockDiv,
} from "./DashboardBlueBarData.Style";
import { TopBlueBarDashboard } from "./topDashboardBlueBar/TopBlueBarDashboard";

export const DashboardBlueBarData = () => {
  return (
    <BlueBarDataStyle>
      <TopBlueBarDashboard />
      <CardsBlockBlueBar>
        <CardBlueBar>
          <RadialBar series={70} />
          <RightBlockDiv>
            <TitleBlueCard children="Total Produtos em alta" />
            <ValuesBlueBarCards percent="13%" total={120} />
          </RightBlockDiv>
        </CardBlueBar>
        <CardBlueBar>
          <RadialBar series={20} />
          <RightBlockDiv>
            <TitleBlueCard children="Total Produtos em baixa" />
            <ValuesBlueBarCards percent="29%" total={56} />
          </RightBlockDiv>
        </CardBlueBar>
        <CardBlueBar>
          <RadialBar series={72} />
          <RightBlockDiv>
            <TitleBlueCard children="Total Clientes em alta" />
            <ValuesBlueBarCards percent="25%" total={501} />
          </RightBlockDiv>
        </CardBlueBar>
        <CardBlueBar>
          <RadialBar series={28} />
          <RightBlockDiv>
            <TitleBlueCard children="Total Clientes em baixa" />
            <ValuesBlueBarCards percent="15%" total={103} />
          </RightBlockDiv>
        </CardBlueBar>
      </CardsBlockBlueBar>
    </BlueBarDataStyle>
  );
};
