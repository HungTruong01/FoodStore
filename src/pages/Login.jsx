import React, { useState } from "react";
import loginImg from "../assets/assets/Login.png";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <section className="absolute top-0 left-0 w-full h-full z-50 bg-white">
      {/* container */}
      <div className="w-full h-full flex">
        <div className="w-1/2 hidden sm:block">
          <img
            src={loginImg}
            alt=""
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <form
            action=""
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-14">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-1 outline-none ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-14">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-3 py-1 outline-none ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-14">
                Password
              </label>
              <input
                type="text"
                placeholder="Password"
                className="w-full px-3 py-1 outline-none ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button
              type="submit"
              className="btn-dark w-full mt-5 !py-[7px] !rounded"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3 medium-14">
              <div className="underline">Forgot your password?</div>
              {currState === "Login" ? (
                <div className="underline">
                  Don't have an account?
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="cursor-pointer"
                  >
                    Create an account
                  </span>
                </div>
              ) : (
                <div className="underline">
                  Already have an account?
                  <span
                    className="cursor-pointer"
                    onClick={() => setCurrState("Login")}
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
