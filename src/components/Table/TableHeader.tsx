import { flexRender } from "@tanstack/react-table";

type TableHeaderProps = {
  context: any;
};

const TableHeader = ({ context }: TableHeaderProps) => {
  return (
    <thead className="text-default-700 uppercase bg-default-50 dark:bg-default-700  dark:text-white">
      {context.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <th key={header.id} scope="col" className="px-6 py-3">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
