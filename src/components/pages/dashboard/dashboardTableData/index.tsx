import { ReactNode } from "react";
import { StyledTableBlock } from "./DashboardTableData.Style";
import { StyledTableBox } from "./styledTableBox";

type TableProps = {
  header?: string[];
  children?: ReactNode;
  titleTable?: string;
  icon?: React.ReactNode;
  backgroundIcon: string;
};

export const DashboardTableData = ({
  header,
  children,
  titleTable,
  icon,
  backgroundIcon,
}: TableProps) => {
  return (
    <StyledTableBlock>
      <StyledTableBox
        backgroundIcon={backgroundIcon}
        icon={icon}
        titleTable={titleTable || ""}
        children={children}
        header={header || []}
      />
    </StyledTableBlock>
  );
};
