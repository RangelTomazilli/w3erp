import ArrowRightIcon from "../../../../assets/icons/ArrowRight";
import { StyledTableData } from "./StyledTable.Style";

export const StyledTable = () => {
  return (
    <div>
      <StyledTableData>
        <thead>
          <th>ID</th>
          <th>Produto</th>
          <th>Percentual</th>
          <th> </th>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
          <tr>
            <td>004</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
          <tr>
            <td>005</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
          <tr>
            <td>006</td>
            <td>Papel higiênico</td>
            <td>-72%</td>
            <td>{<ArrowRightIcon />}</td>
          </tr>
        </tbody>
      </StyledTableData>
    </div>
  );
};
