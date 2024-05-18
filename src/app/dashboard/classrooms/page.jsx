import CreateClassroom from "@/components/CreateClassroom"
import { Button } from "@/components/ui/button"
import { connectToDb } from "@/database/connection"
import { Classroom } from "@/database/models/Classroom"
import { parseData } from "@/lib/database"
import { getUser } from "@/lib/user"
import Link from "next/link"
import React from "react"

const page = async () => {
  await connectToDb()
  const user = await getUser()

  if (user.type === "Teacher") {
    var classrooms = await Classroom.find({ owner: user._id })
    classrooms = parseData(classrooms)
  } else {
    var classrooms = await Classroom.find()
    classrooms = parseData(classrooms)
  }

  return (
    <>
      {user.type === "Teacher" && (
        <CreateClassroom>
          <div className="flex justify-end mx-24 my-4 max-md:mx-4">
            <Button>Create Classroom</Button>
          </div>
        </CreateClassroom>
      )}
      <div className="flex flex-wrap gap-4 mx-24 my-4 justify-center max-md:mx-4">
        {classrooms.map((classroom) => (
          <div
            className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow "
            key={classroom._id}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {classroom.name}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {classroom.description}
            </p>
            <Link
              href={`/dashboard/classrooms/${classroom._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default page
