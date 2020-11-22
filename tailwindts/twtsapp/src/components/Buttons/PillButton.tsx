import React, { FC } from "react";

type Props = {
  id: number;
  text: string;
  onDelete: (key: number) => void;
}

const PillButton: FC<Props> = (props) => {
  return (
    <>
      <div className="cursor-default border border-gray-400 hover:border-gray-500 p-1 bg-gray-200 inline-flex overflow-hidden rounded-full">
        <div className="cursor-default text-xs text-gray-700 overflow-ellipsis whitespace-nowrap overflow-hidden">
          {props.text}
        </div>
        <div
          onClick={() => props.onDelete(props.id)}
          className="cursor-pointer rounded-full bg-gray-400 hover:bg-gray-500 text-gray-200 text-center text-xs pt-0.5 ml-2 w-5 h-5">
          X
        </div>
      </div>
    </>
  );
};

export default PillButton;
