import FilterIcon from "../../../assets/icons/FilterIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { LeftBlueBar } from "../../leftBlueBar/LeftBlueBar";
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

export const Products = () => {
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
            <ProductsTableData />
          </ProductsBlock>
        </BlockCenterDiv>
      </StyledCenterContainer>
    </StyledContainer>
  );
};
