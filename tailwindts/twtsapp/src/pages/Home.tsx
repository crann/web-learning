import React, { FC } from 'react'
import FilledButton from '../components/Buttons/FilledButton';
import OutlinedButton from '../components/Buttons/OutlinedButton';
import PillButton from '../components/Buttons/PillButton';
import Input from '../components/Input';
import FreeFlowMultiSelect from '../components/MultiSelect/FreeFlowMultiSelect';
import Pill from '../components/Pill';

const Home: FC<{}> = (props) => {
    return (
        <>
            <div className="pl-10 pt-10">
                <Input />
            </div>
            <div className="pl-10 pt-10">
                <FilledButton />
            </div>
            <div className="pl-10 pt-10">
                <OutlinedButton />
            </div>
            <div className="pl-10 pt-10">
                <Pill />
            </div>
            {/* <div className="pl-10 pt-10">
                <div className="py-14 w-32 flex">
                    <PillButton text="my really long pi;;" />
                </div>
            </div> */}

            <div className="pl-10 pt-10">
                <div className="py-14 w-52">
                    <FreeFlowMultiSelect />
                </div>
            </div>
        </>
    );
}

export default Home;