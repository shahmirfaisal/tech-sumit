import LoginForm from "@/components/LoginForm"
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
      <LoginForm />
    </div>
  )
}

export default page
