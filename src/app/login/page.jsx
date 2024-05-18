import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="mb-6 text-xl font-semibold text-white text-center">
        User System: Develop a simple login page with user name and password.
      </p>
      <div className="flex sm:flex-row flex-col items-center">
        <div className="w-full h-fit bg-white order-2 lg:order-1 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="border outline-0 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring--[#92E3A9] focus:border-[#92E3A9]"
                  placeholder="Muhammad Usman"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border outline-0 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring--[#92E3A9] focus:border-[#92E3A9]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#92E3A9] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#92E3A9] focus:ring-white"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don't have an account yet?
                <Link
                  href="/signup"
                  className="font-medium ml-2 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="flex order-1 lg:order-2">
          <img src="/Mobile login-bro.svg" className="w-[44rem]" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default page;
