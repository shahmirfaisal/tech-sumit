import { connectToDb } from "@/database/connection"
import { getUser } from "@/lib/user"
import { redirect } from "next/navigation"
import React from "react"
import Tabs from "./Tabs"

const layout = async ({ children }) => {
  await connectToDb()
  const user = await getUser()

  if (!user) redirect("/")

  return (
    <div className="my-12">
      <Tabs />
      {children}
    </div>
  )
}

export default layout
