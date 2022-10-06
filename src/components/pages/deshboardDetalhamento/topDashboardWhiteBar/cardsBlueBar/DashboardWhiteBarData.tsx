import { CardsBlockBlueBar } from "./DashboardWhiteBarData.Style";
import { CardWhiteBar } from "./CardWhiteBar";
import { colorsTheme } from "../../../../theme";

export const DashboardWhiteBarData = () => {
  return (
    <CardsBlockBlueBar>
      <CardWhiteBar
        color={`${colorsTheme.primary}`}
        title="Média 120 dias"
        total={300}
        fontColor={`${colorsTheme.white}`}
      />
      <CardWhiteBar
        color={`${colorsTheme.grey50}`}
        title="Últimos 30 dias"
        total={222}
        percent="-26%"
        fontColor={`${colorsTheme.primary}`}
      />
      <CardWhiteBar
        color={`${colorsTheme.grey50}`}
        title="Últimos 60 dias"
        total={350}
        fontColor={`${colorsTheme.primary}`}
      />
      <CardWhiteBar
        color={`${colorsTheme.grey50}`}
        title="Últimos 90 dias"
        total={320}
        fontColor={`${colorsTheme.primary}`}
      />

      <CardWhiteBar
        color={`${colorsTheme.grey50}`}
        title="Últimos 120 dias"
        total={280}
        fontColor={`${colorsTheme.primary}`}
      />
    </CardsBlockBlueBar>
  );
};
