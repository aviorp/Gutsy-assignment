import { flexRender } from "@tanstack/react-table";
import { FC } from "react";

type TableBodyProps = {
  context: any;
  loading?: boolean;
  onRowClick?: (row: any) => void;
};
export const TableBodyCases: FC<TableBodyProps> = ({
  loading,
  context,
  onRowClick
}) => {
  if (loading) {
    return (
      <tr className="bg-white h-4 border-b dark:bg-default-900 dark:border-default-700 dark:text-white">
        <td colSpan={100} className="p-3 text-center">
          <div
            className="inline-block h-8 w-8 m-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-default-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </td>
      </tr>
    );
  }

  if (context.getRowModel().rows.length) {
    return context.getRowModel().rows.map((row: any, idx: number) => (
      <tr
        onClick={() => (onRowClick ? onRowClick(row.original) : null)}
        key={row.id}
        className={
          idx % 2 === 0
            ? "bg-white border-b dark:bg-default-900 dark:border-default-700 dark:text-white hover:bg-default-100 hover:text-default-700 dark:hover:bg-default-600 cursor-pointer "
            : "border-b bg-default-50 dark:bg-default-800 dark:border-default-700 dark:text-white  hover:bg-default-100 hover:text-default-700 dark:hover:bg-default-600  cursor-pointer"
        }>
        {row.getVisibleCells()
          ? row.getVisibleCells().map((cell: any) => (
              <td key={cell.id} className="py-3 pl-6 bg-red">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))
          : null}
      </tr>
    ));
  } else {
    return (
      <tr className="bg-white h-4 border-b dark:bg-default-900 dark:border-default-700 dark:text-white">
        <td colSpan={100} className="p-3 text-center">
          No data available
        </td>
      </tr>
    );
  }
};
