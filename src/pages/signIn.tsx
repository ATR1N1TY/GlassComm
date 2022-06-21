import React from "react";
import Navbar from "../components/navbar/navbar";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";

//simple login page, nothing crazy, not ready for backend right now

const signIn = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-tr from-red-300 to-red-600 dark:from-zinc-900 dark:to-slate-900">
      <Navbar />
      <HamburgerMenu />

      <main className="flex items-center justify-center mt-16">
        <div className="wrapper glass p-8 rounded-2xl ">
          <form action="sign-in flex flex-col ">
            <div className="nameWrap mt-4">
              <label className="mr-2" htmlFor="username">
                Username
              </label>
              <input className="glass rounded-md" name="username" type="text" />
            </div>

            <div className="passWrap mt-4">
              <label className="mr-2" htmlFor="password">
                Password
              </label>
              <input
                className="glass rounded-md"
                name="password"
                type="password"
              />
            </div>

            <p className="mt-8">Forgot your password?</p>
            <p>Register</p>

            <button className="loginBtn glass mt-8 w-full rounded-md">
              Log in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default signIn;
