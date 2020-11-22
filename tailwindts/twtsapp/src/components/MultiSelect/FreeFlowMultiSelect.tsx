import React, { FC, ReactElement, useState } from 'react';
import PillButton from '../Buttons/PillButton';

const FreeFlowMultiSelect: FC<{}> = (props) => {
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [pills, setPills] = useState<ReactElement[]>([])

    // TODO: Move this to parent and props.
    const [selectedOptions, setSelectedOptions] = useState<string[]>();

    // TODO: Clicking x on pill should remove pill and add place focus on the input

    const deleteAllSelected = () => {
        console.log("da");
    }

    return (
        <>
            <div className={`flex w-72 rounded cursor-text ${hasFocus ? "border-2 border-blue-500" : "border border-gray-400 hover:border-gray-600"}`}>
                <div className="flex-grow px-2 py-2">
                    <span className="pr-1">
                        <PillButton
                            id={1}
                            text="Canvas"
                            onDelete={(k) => console.log(k)} />
                    </span>
                    <span className="pr-1">
                        <PillButton
                            id={2}
                            text="Oil Painting"
                            onDelete={(k) => console.log(k)} />
                    </span>
                    <input
                        placeholder="Materials"
                        className="h-10 outline-none"
                        onFocus={_ => setHasFocus(true)}
                        onBlur={_ => setHasFocus(false)}
                    />
                </div>
                <div className="flex-grow-0 flex justify-center items-center w-12 rounded-r text-center pr-1">
                    <span
                        onClick={() => deleteAllSelected()}
                        className="rounded-full h-8 w-8 cursor-pointer hover:bg-gray-200 flex justify-center items-center">
                        <span className="text-gray-600 text-sm font-bold">X</span>
                    </span>
                </div>
            </div>
        </>
    )
}
/*
    focus-within:border-blue-500
    hover:border-gray-800 
*/

export default FreeFlowMultiSelect;