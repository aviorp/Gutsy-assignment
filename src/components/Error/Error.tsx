import { FC } from "react";

type ErrorProps = {
  error: string;
};

export const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div className="absolute bottom-0 right-0 animate-pulse transition-all ease-in-out flex justify-center items-center m-1 font-medium px-4 py-2  rounded-md text-red-700 bg-red-100 border border-red-300  ">
      <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-alert-octagon w-5 h-5 mx-2">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div className="text-md font-normal  max-w-full flex-initial">
        {error}
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};
