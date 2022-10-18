import { useEffect, useState } from "react";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../assets/icons/ArrowRight";
import TrendingUpIcon from "../../../assets/icons/TrendingUpIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import {
  GetDashboardResume,
  GetDashboardResumeProps,
  GetDashboardTableProduct,
  StyledTableProps,
} from "../../services/getDashboard";
import { colorsTheme } from "../../theme";
import { TopBar } from "../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
  StyledLowCenterContainer,
} from "../dashboard/Dashboard.Style";
import { DashboardTableData } from "../dashboard/dashboardTableData";
import { TopWhiteBarDashboard } from "../deshboardDetalhamento/topDashboardWhiteBar/TopWhiteBarDashboard";

const TitleTableProduct = ["ID", "Produto", "Percentual", "Qtd"];

export const DashboardDetailClient = () => {
  const [totalData, setTotalData] = useState<GetDashboardResumeProps>();
  const [tableProductHight, setTableProductHigh] = useState<StyledTableProps>(
    []
  );
  const [tableProductLow, setTableProductLow] = useState<StyledTableProps>([]);

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
        setTableProductHigh(result);
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
          "EM_BAIXA"
        );
        setTableProductLow(result);
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
        <TopWhiteBarDashboard
          color={colorsTheme.primary}
          fontSize="32"
          text="Hotel Ibis"
        />
        <StyledLowCenterContainer>
          <DashboardTableData
            backgroundIcon={colorsTheme.error}
            icon={<ArrowLeftIcon />}
            titleTable="Produtos em baixa"
            header={TitleTableProduct}
          >
            {tableProductLow.map((apiData) => (
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
            backgroundIcon={colorsTheme.success}
            icon={<TrendingUpIcon />}
            titleTable="Produtos em alta"
            header={TitleTableProduct}
          >
            {tableProductHight.map((apiData) => (
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
