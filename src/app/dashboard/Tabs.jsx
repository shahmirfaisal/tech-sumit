"use client"

import { usePathname } from "next/navigation"
import React from "react"

const Tabs = () => {
  const path = usePathname()
  console.log(path)

  return (
    <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 mx-24">
      <li className="me-2 w-1/2">
        <a
          href="/dashboard/public"
          aria-current="page"
          className={`inline-block p-4 ${
            path.includes("public") ? "text-blue-600 bg-gray-100" : ""
          } w-full rounded-t-lg active `}
        >
          Public
        </a>
      </li>
      <li className="me-2 w-1/2">
        <a
          href="/dashboard/classrooms"
          className={`inline-block p-4 rounded-t-lg w-full ${
            path.includes("classrooms") ? "text-blue-600 bg-gray-100" : ""
          } `}
        >
          Classrooms
        </a>
      </li>
    </ul>
  )
}

export default Tabs
