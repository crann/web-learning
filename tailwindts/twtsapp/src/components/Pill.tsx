import React, { FC } from "react";

const Pill: FC<{}> = (props) => {
  return (
    <>
      <span className="text-xs text-gray-700 border border-gray-500 hover:border-gray-400 rounded p-1 bg-gray-200 hover:bg-gray-100">
        My Pill
      </span>
    </>
  );
};

export default Pill;
