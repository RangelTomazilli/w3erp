import { colorsTheme } from "../../../../../theme";
import { IconTitleTopTable } from "./iconTitleTopTable";
import { ToggleButtonTop } from "./toggleTopTable";
import { StyledTopTableBox } from "./TopTableBlock.Style";

type Props = {
  titleTable: string;
  icon: React.ReactNode;
  backgroundIcon: string;
};

export const TopTableBlock = ({ titleTable, icon, backgroundIcon }: Props) => {
  return (
    <StyledTopTableBox>
      <IconTitleTopTable
        background={backgroundIcon}
        icon={icon}
        titleTable={titleTable}
      />
      <ToggleButtonTop />
    </StyledTopTableBox>
  );
};
