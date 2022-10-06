import { BackgroundCard } from "./CardWhiteBar.Style";
import { TitleWhiteCard } from "./titleBlueBarCard/TitleWhiteBarCard";
import { ValuesWhiteBarCards } from "./valuesBlueBarCard";

type Props = {
  color: string;
  title: string;
  percent?: string;
  total: number;
  fontColor: string;
};

export const CardWhiteBar = ({
  color,
  title,
  percent,
  total,
  fontColor,
}: Props) => {
  return (
    <BackgroundCard color={color} fontColor={fontColor}>
      <TitleWhiteCard children={title} />
      <ValuesWhiteBarCards
        percent={percent}
        total={total}
      ></ValuesWhiteBarCards>
    </BackgroundCard>
  );
};
