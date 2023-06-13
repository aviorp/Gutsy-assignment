import { FC } from "react";

type PaginationProps = {
  context: any;
  count: number;
};

const Pagination: FC<PaginationProps> = ({ context, count }) => {
  const handleNextPage = () => {
    context.nextPage();
  };
  const handlePreviousPage = () => {
    context.previousPage();
  };
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    context.setPageSize(Number(e.target.value));
  };
  return (
    <tfoot
      style={{
        userSelect: "none"
      }}>
      <tr className="text-default-700 bg-default-100 dark:bg-default-900 dark:text-white">
        <td colSpan={100} className="p-4">
          <span className="mr-2 text-sm ">Total: {count}</span>
          <label>
            <span className="mr-2 text-sm">Page Size:</span>
            <select
              className="px-3 py-1 mr-2 cursor-pointer rounded-md focus:outline-none focus:shadow-outline-default inline-flex items-center text-sm font-medium text-default-500 bg-white border border-default-300 rounded-lg hover:bg-default-100 hover:text-default-700 dark:bg-default-800 dark:border-default-700 dark:text-default-400 dark:hover:bg-default-700 dark:text-white"
              onChange={handlePageSizeChange}>
              {[10, 25, 50, 100].map(pageSize => (
                <option key={pageSize}>{pageSize}</option>
              ))}
            </select>
          </label>

          <button
            className="px-3 py-1 mr-2 rounded-md focus:outline-none focus:shadow-outline-default inline-flex items-center text-sm font-medium text-default-500 bg-white border border-default-300 rounded-lg hover:bg-default-100 hover:text-default-700 dark:bg-default-800 dark:border-default-700 dark:text-default-400 dark:hover:bg-default-700 dark:text-white"
            onClick={handlePreviousPage}
            aria-label="Previous">
            Previous
          </button>
          <span className="px-3 py-1 mr-2 rounded-md focus:outline-none focus:shadow-outline-default inline-flex items-center text-sm font-medium text-default-500 bg-white border border-default-300 rounded-lg hover:bg-default-100 hover:text-default-700 dark:bg-default-800 dark:border-default-700 dark:text-default-400 dark:hover:bg-default-700 dark:text-white">
            {context.getState().pagination.pageIndex + 1}
          </span>
          <button
            onClick={handleNextPage}
            className="px-3 py-1 mr-2 rounded-md focus:outline-none focus:shadow-outline-default inline-flex items-center text-sm font-medium text-default-500 bg-white border border-default-300 rounded-lg hover:bg-default-100 hover:text-default-700 dark:bg-default-800 dark:border-default-700 dark:text-default-400 dark:hover:bg-default-700 dark:text-white"
            aria-label="Next">
            Next
          </button>
        </td>
      </tr>
    </tfoot>
  );
};

export default Pagination;
