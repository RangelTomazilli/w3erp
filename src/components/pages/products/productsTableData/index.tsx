import { ReactNode } from "react";
import { ProductsTable } from "../Products.Style";

export type ProductTableProps = {
  header: string[];
  children: ReactNode;
};

export const ProductsTableData = ({ header, children }: ProductTableProps) => {
  return (
    <ProductsTable>
      <thead>
        <tr>
          {header.map((titleTable) => (
            <th key={titleTable}>{titleTable}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </ProductsTable>
  );
};
