import React from "react";
import FilledButton from "../components/Buttons/FilledButton";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Input from "../components/Input";
import Pill from "../components/Pill";

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
    </>
  );
};

export default Home;
