import { connectToDb } from "@/database/connection"
import { getUser } from "@/lib/user"
import { redirect } from "next/navigation"
import React from "react"

const layout = async ({ children }) => {
  await connectToDb()
  const user = await getUser()

  if (!user) redirect("/")

  return (
    <div className="my-12">
      <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 mx-24">
        <li className="me-2 w-1/2">
          <a
            href="/dashboard/public"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 w-full rounded-t-lg active "
          >
            Public
          </a>
        </li>
        <li className="me-2 w-1/2">
          <a
            href="/dashboard/classrooms"
            className="inline-block p-4 rounded-t-lg w-full hover:text-gray-600 hover:bg-gray-50 "
          >
            Classrooms
          </a>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default layout
