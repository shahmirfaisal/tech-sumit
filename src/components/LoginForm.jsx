"use client";

import { login } from "@/actions/user";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const LoginForm = () => {
  const [loginState, loginAction] = useFormState(login, {
    error: null,
    success: false,
  });

  useEffect(() => {
    if (loginState.success) {
      toast.success("Signed up!");
    }
    if (loginState.error) {
      toast.error(loginState.error);
    }
  }, [loginState]);

  return (
    <div className="flex sm:flex-row flex-col items-center">
      <div className="w-full h-fit bg-white order-2 lg:order-1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action={loginAction}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Muhammad Usman"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              Dont have an account yet?
              <Link href="/signup" className="font-medium ml-2 hover:underline">
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
  );
};

export default LoginForm;
