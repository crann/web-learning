import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={"min-h-screen flex justify-center my-20 p-5"}>
      <div className={"w-full sm:w-2/4 bg-yellow-400"}>
        <div>Logo</div>
        <div className={"text-2xl"}>Sign Up</div>
        <form>
          <div>
            <label className={"text-gray-500"}>First name</label>
            <input type="text" />
          </div>
          <div>
            <label className={"text-gray-500"}>Last name</label>
            <input type="text" />
          </div>
          <div>
            <label className={"text-gray-500"}>Email</label>
            <input type="text" />
          </div>
          <div>
            <label className={"text-gray-500"}>Password</label>
            <input type="password" />
          </div>
        </form>
        Already have an account?<Link to="login">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
