import { Classroom } from "@/database/models/Classroom"
import { parseData } from "@/lib/database"
import React from "react"

const page = async ({ params: { id } }) => {
  let classroom = await Classroom.findById(id)
  classroom = parseData(classroom)

  return (
    <div className="max-w-7xl mx-auto text-center mt-10 flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-3xl">{classroom.name}</h2>
        <p>{classroom.description}</p>
      </div>
    </div>
  )
}

export default page
