import { FC } from "react";

type TableActionsProps = {
  filters?: object;
  filtersHandler?: (filters: object) => void;
  searchFn: (search: string) => void;
};

const TableActions: FC<TableActionsProps> = ({ searchFn }) => {
  return (
    <div className=" mx-auto w-full ">
      <div className="relative bg-white shadow-md dark:bg-default-900 ">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-default-500 dark:text-default-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-default-900 border border-default-300 rounded-lg bg-default-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-default-700 dark:border-default-600 dark:placeholder-default-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                onChange={e => searchFn(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableActions;
