"use server"

import { Classroom } from "@/database/models/Classroom"
import { getUser } from "@/lib/user"

export const createClassroom = async (prev, formData) => {
  try {
    const name = formData.get("name").trim()

    if (name.length === 0) {
      return {
        success: false,
        error: "Enter the name"
      }
    }

    await connectToDb()

    const user = await getUser()

    const classroom = new Classroom({
      name,
      owner: user._id
    })
    await classroom.save()
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const joinClassroom = async (prev, formData) => {
  try {
    const userId = formData.get("userId").trim()
    const classroomId = formData.get("classroomId").trim()

    await connectToDb()

    const classroom = await Classroom.findById(classroomId)
    classroom.members.push(userId)
    await classroom.save()
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
