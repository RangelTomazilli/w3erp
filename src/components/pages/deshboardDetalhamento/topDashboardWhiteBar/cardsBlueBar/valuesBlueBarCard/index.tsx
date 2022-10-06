import {
  DataBlock,
  PercentBackGround,
  TotalStyled,
} from "./valuesBlueCard.Style";

type Props = {
  total: number;
  percent?: string;
};

export const ValuesWhiteBarCards = ({ total, percent }: Props) => {
  return (
    <DataBlock>
      <TotalStyled>{total}</TotalStyled>
      <PercentBackGround style={{ display: `${percent ? "block" : "none"}` }}>
        {percent}
      </PercentBackGround>
    </DataBlock>
  );
};
