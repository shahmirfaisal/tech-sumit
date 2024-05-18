import SignupForm from "@/components/SignupForm"
import Link from "next/link"
import React from "react"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="mb-6 text-xl font-semibold text-white text-center">
        User Registration Form: Create a user-friendly registration form.
      </p>
      <div className="flex sm:flex-row flex-col items-center">
        <div className="flex">
          <img
            src="/Mobile login-bro.svg"
            className="w-[44rem]"
            alt="Flowbite Logo"
          />
        </div>
        <SignupForm />
      </div>
    </div>
  )
}

export default page
