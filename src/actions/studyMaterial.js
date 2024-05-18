"use server"

import { connectToDb } from "@/database/connection"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import { getUser } from "@/lib/user"
import { revalidatePath } from "next/cache"

export const createStudyMaterial = async (prev, formData) => {
  try {
    console.log(formData.get("title"))
    const title = formData.get("title").trim()
    const text = formData.get("text")
    const image = formData.get("image")
    const video = formData.get("video")
    const classroomId = formData.get("classroomId")
    console.log(title)
    console.log(text)
    if (title.length === 0) {
      return {
        success: false,
        error: "Enter the title"
      }
    }

    if (text.length === 0) {
      return {
        success: false,
        error: "Enter the text"
      }
    }

    await connectToDb()

    const user = await getUser()

    const data = {
      title,
      text,
      video,
      image,
      owner: user._id
    }

    if (classroomId) data.classroom = classroomId

    const studyMaterial = new StudyMaterial(data)
    await studyMaterial.save()
    revalidatePath("/dashboard")

    return { success: true, error: null }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
