import { useEffect, useState } from "react";
import FilterIcon from "../../../assets/icons/FilterIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
import {
  GetProducts,
  StyledProductTableProps,
} from "../../services/getProduducts";
import { TopBar } from "../../topBar";
import {
  StyledCenterContainer,
  StyledContainer,
} from "../dashboard/Dashboard.Style";
import {
  BlockCenterDiv,
  IconDiv,
  TiltePages,
} from "../preditions/preditions.Style";
import {
  BackgroundFilterIcon,
  ProductsBlock,
  SearchPlusFilterBlock,
} from "./Products.Style";
import { ProductsTableData } from "./productsTableData";

const TitleTableProduct = ["ID", "Produto", "Status", "Percentual"];

export const Products = () => {
  const [tableProduct, setTableProduct] = useState<StyledProductTableProps>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await GetProducts();
        setTableProduct(result);
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
          <TiltePages>Produtos</TiltePages>
          <ProductsBlock>
            <SearchPlusFilterBlock>
              <input
                type="text"
                placeholder="Pesquise uma palavra-chave"
              ></input>
              <IconDiv>
                <SearchIcon />
              </IconDiv>
              <BackgroundFilterIcon>
                <FilterIcon />
              </BackgroundFilterIcon>
            </SearchPlusFilterBlock>
            <ProductsTableData header={TitleTableProduct}>
              {tableProduct.map((apiData) => (
                <tr key={apiData.id}>
                  <td>{apiData.id}</td>
                  <td>{apiData.nome}</td>
                  <td>{apiData.classificacao}</td>
                  <td>{apiData.percentual}%</td>
                </tr>
              ))}
            </ProductsTableData>
          </ProductsBlock>
        </BlockCenterDiv>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
