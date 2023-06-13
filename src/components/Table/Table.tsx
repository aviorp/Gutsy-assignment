import TableActions from "./TableActions";
import { FC } from "react";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

type TableProps = {
  context: any;
  hidePagination?: boolean;
  hideTableActions?: boolean;
  loading?: boolean;
  count?: number;
  filters?: any;
  onRowClick?: (row: any) => void;
  filtersHandler?: (filters: any) => void;
  searchFn?: (value: string) => void;
};

export const Table: FC<TableProps> = ({
  context,
  loading,
  count,
  filters,
  onRowClick,
  filtersHandler,
  searchFn
}) => {
  return (
    <>
      <TableActions
        filters={filters}
        filtersHandler={filtersHandler}
        searchFn={searchFn || context.setGlobalFilter}
      />
      <table className="w-full text-sm text-left text-default-500 dark:text-default-400">
        <TableHeader context={context} />
        <TableBody
          context={context}
          loading={loading}
          onRowClick={onRowClick}
        />
        <Pagination
          context={context}
          count={count || context.getRowModel().rows.length}
        />
      </table>
    </>
  );
};
