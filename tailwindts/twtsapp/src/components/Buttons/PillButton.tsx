import React, { FC } from "react";

const PillButton: FC<{}> = (props) => {
  return (
    <>
      <div className="cursor-default border rounded border-gray-400 hover:border-gray-500 p-1 bg-gray-200 inline-flex overflow-hidden rounded-full">
        <div className="cursor-default text-xs text-gray-700 overflow-ellipsis whitespace-nowrap overflow-hidden">
          My really long pill
        </div>
        <div className="rounded-full bg-gray-400 hover:bg-gray-500 text-gray-200 text-center text-xs pt-0.5 ml-2 w-5 h-5 cursor-pointer">
          X
        </div>
      </div>
    </>
  );
};

export default PillButton;
