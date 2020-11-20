import React from "react";
import FilledButton from "../components/Buttons/FilledButton";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Input from "../components/Input";

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
    </>
  );
};

export default Home;
