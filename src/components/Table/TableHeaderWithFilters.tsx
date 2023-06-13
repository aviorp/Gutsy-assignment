import { Menu } from "@headlessui/react";
import { FC } from "react";

type ActionListItem = {
  title: string;
  onClick: void;
};

type TableHeaderWithFiltersProps = {
  title: string;
  actions: ActionListItem[];
};

const TableHeaderWithFilters: FC<TableHeaderWithFiltersProps> = ({
  title,
  actions
}) => {
  return (
    <Menu>
      <Menu.Button>
        <span className="uppercase">{title}</span>
      </Menu.Button>
      <Menu.Items>
        <div className="flex flex-col items-start space-y-1 bg-white py-4 absolute z-10 w-1/5 rounded-sm shadow-md transition-all ease-in-out">
          {actions.map((action: ActionListItem, index: number) => (
            <Menu.Item key={index}>
              <button
                className="block px-4 py-2 w-full hover:bg-default-100 hover:text-default-700 focus:outline-none focus:ring-2 focus:ring-default-700 focus:text-default-700 cursor-pointer"
                onClick={() => action.onClick}>
                {action.title}
              </button>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default TableHeaderWithFilters;
