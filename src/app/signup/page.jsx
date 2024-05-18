import SignupForm from "@/components/SignupForm"
import { connectToDb } from "@/database/connection"
import { getUser } from "@/lib/user"
import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"

const page = async () => {
  await connectToDb()
  const user = await getUser()

  if (user) redirect("/dashboard/public")

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
