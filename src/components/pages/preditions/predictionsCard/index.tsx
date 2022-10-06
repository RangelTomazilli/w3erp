import ArrowRightIcon from "../../../../assets/icons/ArrowRight";
import ClientIcon from "../../../../assets/icons/ClientIcon";
import {
  ClientCardContent,
  ClientDataBlock,
  ClientDataDiv,
  ClientName,
  ClientStatus,
  FullPredictionCard,
  TopPredictionCardDiv,
} from "./PredictionsCard.Styled";

type Props = {
  name: string;
  status: string;
  product?: string;
  date?: string;
};

export const PredictionsCard = ({ name, status, product, date }: Props) => {
  return (
    <FullPredictionCard>
      <TopPredictionCardDiv>
        <ClientDataBlock>
          <ClientIcon />
          <ClientDataDiv>
            <ClientName>{name}</ClientName>
            <ClientStatus>{status}</ClientStatus>
          </ClientDataDiv>
        </ClientDataBlock>
        <ArrowRightIcon />
      </TopPredictionCardDiv>
      <ClientCardContent>
        <table>
          <thead>
            <th>Produto</th>
            <th>Próx.Compra</th>
          </thead>
          <tbody>
            <tr>
              <td>{product}</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>Álcool em gel</td>
              <td>05/09/22</td>
            </tr>
            <tr>
              <td>Álcool em gel</td>
              <td>10/09/22</td>
            </tr>
          </tbody>
        </table>
      </ClientCardContent>
    </FullPredictionCard>
  );
};
