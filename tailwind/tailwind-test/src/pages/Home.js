import React from "react";
import FilledButton from "../components/Buttons/FilledButton";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Input from "../components/Input";
import Pill from "../components/Pill";
import PillButton from "../components/PillButton";

const Home = () => {
  return (
    <>
      <div class="pl-10 pt-10">
        <Input />
      </div>
      <div class="pl-10 pt-10">
        <FilledButton />
      </div>
      <div class="pl-10 pt-10">
        <OutlinedButton />
      </div>
      <div class="pl-10 pt-10">
        <Pill />
      </div>
      <div class="pl-10 pt-10">
        <PillButton />
      </div>
    </>
  );
};

export default Home;
