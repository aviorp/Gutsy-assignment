import { Table } from "@/components/Table";
import Page from "@/layouts/Page";
import { useQuery } from "react-query";
import { Player, getPlayers, getSuspects } from "@/api";
import { useEffect, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  createColumnHelper
} from "@tanstack/react-table";
import { Menu } from "@headlessui/react";
import { LEVEL_ACTION_FILTERS } from "./constants";

const columnHelper = createColumnHelper<Player>();

export const Players = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [queryPageIndex, setQueryPageIndex] = useState(0);
  const [queryPageSize, setQueryPageSize] = useState(10);

  const {
    data: suspects,
    isLoading: isSuspectsLoading,
    error: isSuspectsFetchingError
  } = useQuery({
    queryKey: "suspects",
    queryFn: getSuspects
  });

  const {
    data,
    isLoading,
    error: isPlayersFetchingError
  } = useQuery({
    queryKey: [
      "players",
      { start: queryPageIndex * queryPageSize, n: queryPageSize }
    ],
    queryFn: getPlayers,
    refetchOnWindowFocus: true,
    enabled: !!suspects
  });

  const columns = [
    columnHelper.accessor("id", {
      cell: info => info.getValue(),
      footer: props => props.column.id
    }),
    columnHelper.accessor("name", {
      id: "name",
      cell: info => info.getValue(),
      header: () => <span> Name</span>,
      footer: props => props.column.id
    }),
    columnHelper.accessor("level", {
      header: () => (
        <Menu>
          <Menu.Button>
            <span className="uppercase">Level</span>
          </Menu.Button>
          <Menu.Items>
            <div className="flex flex-col items-start space-y-1 bg-white py-4 absolute z-10 w-1/5 rounded-sm shadow-md transition-all ease-in-out">
              {LEVEL_ACTION_FILTERS.map(({ title, value }, index) => (
                <Menu.Item key={index}>
                  <button
                    className="block px-4 py-2 w-full hover:bg-default-100 hover:text-default-700 focus:outline-none focus:ring-2 focus:ring-default-700 focus:text-default-700 cursor-pointer"
                    onClick={() => context.setGlobalFilter(value)}>
                    {title}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      ),
      cell: info => info.renderValue(),
      footer: props => props.column.id
    }),
    columnHelper.accessor("score", {
      header: () => <span>Score</span>,
      footer: props => props.column.id
    }),
    columnHelper.accessor("suspect", {
      header: () => <span>Suspect Of Cheating</span>,
      cell: ({ row }) => (
        <>{suspects?.includes(row.original.id) ? "Yes" : "No"}</>
      ),
      footer: props => props.column.id
    })
  ];

  const context = useReactTable({
    data: data?.players || [],
    columns,
    state: {
      globalFilter
    },
    debugTable: true,
    manualPagination: true,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  const { pageIndex, pageSize } = context.getState().pagination;

  useEffect(() => {
    setQueryPageIndex(pageIndex);
    setQueryPageSize(pageSize);
  }, [pageIndex, pageSize]);

  return (
    <Page
      error={
        (isSuspectsFetchingError as string) ||
        (isPlayersFetchingError as string)
      }>
      <Table
        context={context}
        searchFn={setGlobalFilter}
        loading={isLoading || isSuspectsLoading}
        count={data?.count}
      />
    </Page>
  );
};
