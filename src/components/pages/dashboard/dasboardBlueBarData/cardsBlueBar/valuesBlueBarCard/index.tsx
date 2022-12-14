import {
  DataBlock,
  PercentBackGround,
  TotalStyled,
} from "./valuesBlueCard.Style";

type Props = {
  total: number;
  percent: number;
};

export const ValuesBlueBarCards = ({ total, percent }: Props) => {
  return (
    <DataBlock>
      <TotalStyled>{total}</TotalStyled>
      <PercentBackGround>{percent}%</PercentBackGround>
    </DataBlock>
  );
};
