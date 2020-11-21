import React, { FC } from "react";

const Input: FC<{}> = (props) => {
  return (
    <>
      <input
        placeholder="Jane Doe"
        className="pl-2 h-10 ml-5 w-1/2 rounded focus:rounded border focus:border-2 border-gray-500 focus:border-blue-500 outline-none"
      />
    </>
  );
};

export default Input;
