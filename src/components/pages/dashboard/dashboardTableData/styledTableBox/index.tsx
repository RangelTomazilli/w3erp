import { ReactNode } from "react";
import { StyledTable } from "../../styledTable";
import { TopTableBlock } from "./topTableBlock";

type TableProps = {
  header: string[];
  children: ReactNode;
  titleTable: string;
  icon: React.ReactNode;
  backgroundIcon: string;
};

export const StyledTableBox = ({
  header,
  children,
  titleTable,
  icon,
  backgroundIcon,
}: TableProps) => {
  return (
    <div>
      <TopTableBlock
        backgroundIcon={backgroundIcon}
        icon={icon}
        titleTable={titleTable}
      />
      <StyledTable children={children} header={header} />
    </div>
  );
};
