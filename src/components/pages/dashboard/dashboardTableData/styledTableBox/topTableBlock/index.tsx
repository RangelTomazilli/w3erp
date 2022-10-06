import ProductsIcon from "../../../../../../assets/icons/ProductsIcon";
import { colorsTheme } from "../../../../../theme";
import { IconTitleTopTable } from "./iconTitleTopTable";
import { ToggleButtonTop } from "./toggleTopTable";
import { StyledTopTableBox } from "./TopTableBlock.Style";

export const TopTableBlock = () => {
  return (
    <StyledTopTableBox>
      <IconTitleTopTable
        background={colorsTheme.azul4}
        icon={<ProductsIcon />}
        title="Produtos"
      />
      <ToggleButtonTop />
    </StyledTopTableBox>
  );
};
