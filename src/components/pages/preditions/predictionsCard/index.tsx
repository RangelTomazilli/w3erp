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

export type PredictionProps = {
  id: number;
  nome: string;
  produtos: {
    nome: string;
    proximaCompra: string;
  }[];
};

export const PredictionsCard = ({ id, nome, produtos }: PredictionProps) => {
  return (
    <FullPredictionCard>
      <TopPredictionCardDiv>
        <ClientDataBlock>
          <ClientIcon />
          <ClientDataDiv>
            <ClientName>{nome}</ClientName>
            <ClientStatus>Status</ClientStatus>
          </ClientDataDiv>
        </ClientDataBlock>
        <ArrowRightIcon />
      </TopPredictionCardDiv>
      <ClientCardContent>
        <table>
          <thead>
            <th key={id}>Produto</th>
            <th>Próx.Compra</th>
          </thead>
          <tbody>
            {produtos.map((item) => (
              <tr>
                <td>{item.nome}</td>
                <td>{item.proximaCompra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ClientCardContent>
    </FullPredictionCard>
  );
};
