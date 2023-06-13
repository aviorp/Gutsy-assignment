import { FC } from "react";
import { TableBodyCases } from "./TableBodyCases";

type TableBodyProps = {
  context: any;
  loading?: boolean;
  onRowClick?: (row: any) => void;
};

const TableBody: FC<TableBodyProps> = ({ context, loading, onRowClick }) => {
  return (
    <tbody>
      <TableBodyCases
        loading={loading}
        context={context}
        onRowClick={onRowClick}
      />
    </tbody>
  );
};

export default TableBody;
