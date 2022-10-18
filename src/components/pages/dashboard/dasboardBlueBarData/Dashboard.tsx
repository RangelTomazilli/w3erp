import { useEffect, useState } from "react";
import ArrowRightIcon from "../../../../assets/icons/ArrowRight";
import ProductsIcon from "../../../../assets/icons/ProductsIcon";
import EveryUserIcon from "../../../../assets/icons/EveryUser";
import { LeftBlueBar } from "../../../leftBlueBar/LeftBlueBar";
import {
  GetDashboardResume,
  GetDashboardResumeProps,
  GetDashboardTableClient,
  GetDashboardTableProduct,
  StyledTableProps,
} from "../../../services/getDashboard";
import { colorsTheme } from "../../../theme";
import { TopBar } from "../../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
  StyledLowCenterContainer,
} from "../Dashboard.Style";
import { DashboardTableData } from "../dashboardTableData";
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

const TitleTableProduct = ["ID", "Produto", "Percentual", " "];
const TitleTableClient = ["ID", "Cliente", "Percentual", " "];

export const Dashboard = () => {
  const [totalData, setTotalData] = useState<GetDashboardResumeProps>();
  const [tableProduct, setTableProduct] = useState<StyledTableProps>([]);
  const [tableClient, setTableClient] = useState<StyledTableProps>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await GetDashboardResume("06/10/2022", "05/10/2022");
        setTotalData(result);
      } catch (error) {
        alert((error as any).message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await GetDashboardTableProduct(
          "06/10/2022",
          "05/10/2022",
          "EM_ALTA"
        );
        setTableProduct(result);
      } catch (error) {
        alert((error as any).message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const result = await GetDashboardTableClient(
          "06/10/2022",
          "05/10/2022",
          "EM_BAIXA"
        );
        setTableClient(result);
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
        <BlueBarDataStyle>
          <TopBlueBarDashboard />
          <CardsBlockBlueBar>
            <CardBlueBar>
              <RadialBar series={totalData?.percentualTotalProdutosAlta || 0} />
              <RightBlockDiv>
                <TitleBlueCard children="Total Produtos em alta" />
                <ValuesBlueBarCards
                  percent={totalData?.percentualVariacaoProdutosAlta || 0}
                  total={totalData?.quantidadeProdutosAlta || 0}
                />
              </RightBlockDiv>
            </CardBlueBar>
            <CardBlueBar>
              <RadialBar
                series={totalData?.percentualTotalProdutosBaixa || 0}
              />
              <RightBlockDiv>
                <TitleBlueCard children="Total Produtos em baixa" />
                <ValuesBlueBarCards
                  percent={totalData?.percentualVariacaoProdutosBaixa || 0}
                  total={totalData?.quantidadeProdutosBaixa || 0}
                />
              </RightBlockDiv>
            </CardBlueBar>
            <CardBlueBar>
              <RadialBar series={totalData?.percentualTotalClientesAlta || 0} />
              <RightBlockDiv>
                <TitleBlueCard children="Total clientes em alta" />
                <ValuesBlueBarCards
                  percent={totalData?.percentualVariacaoClientesAlta || 0}
                  total={totalData?.quantidadeClientesAlta || 0}
                />
              </RightBlockDiv>
            </CardBlueBar>
            <CardBlueBar>
              <RadialBar
                series={totalData?.percentualTotalClientesBaixa || 0}
              />
              <RightBlockDiv>
                <TitleBlueCard children="Total Produtos em alta" />
                <ValuesBlueBarCards
                  percent={totalData?.percentualVariacaoClientesBaixa || 0}
                  total={totalData?.quantidadeClientesBaixa || 0}
                />
              </RightBlockDiv>
            </CardBlueBar>
          </CardsBlockBlueBar>
        </BlueBarDataStyle>
        <StyledLowCenterContainer>
          <DashboardTableData
            titleTable="Produtos"
            header={TitleTableProduct}
            backgroundIcon={colorsTheme.azul4}
            icon={<ProductsIcon />}
          >
            {tableProduct.map((apiData) => (
              <tr key={apiData.id}>
                <td>{apiData.id}</td>
                <td>{apiData.nome}</td>
                <td>{apiData.percentual}%</td>
                <td>
                  <ArrowRightIcon />
                </td>
              </tr>
            ))}
          </DashboardTableData>
          <DashboardTableData
            backgroundIcon={colorsTheme.primary}
            icon={<EveryUserIcon />}
            titleTable="Clientes"
            header={TitleTableClient}
          >
            {tableClient.map((apiData) => (
              <tr key={apiData.id}>
                <td>{apiData.id}</td>
                <td>{apiData.nome}</td>
                <td>{apiData.percentual}%</td>
                <td>
                  <ArrowRightIcon />
                </td>
              </tr>
            ))}
          </DashboardTableData>
        </StyledLowCenterContainer>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
