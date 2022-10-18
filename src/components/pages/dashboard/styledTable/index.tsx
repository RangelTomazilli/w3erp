import { ReactNode } from "react";
import { StyledTableData } from "./StyledTable.Style";

type TableProps = {
  header: string[];
  children: ReactNode;
};

export const StyledTable = ({ header, children }: TableProps) => {
  return (
    <div>
      <StyledTableData>
        <thead>
          <tr>
            {header.map((titleTable) => (
              <th key={titleTable}>{titleTable}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </StyledTableData>
    </div>
  );
};
