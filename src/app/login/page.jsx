import LoginForm from "@/components/LoginForm"
import Link from "next/link"
import React from "react"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="mb-6 text-xl font-semibold text-white text-center">
        User System: Develop a simple login page with user name and password.
      </p>
      <LoginForm />
    </div>
  )
}

export default page
