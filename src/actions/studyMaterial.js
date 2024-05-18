"use server"

import { connectToDb } from "@/database/connection"
import { StudyMaterial } from "@/database/models/StudyMaterial"
import { getUser } from "@/lib/user"
import { revalidatePath } from "next/cache"

export const createStudyMaterial = async (prev, formData) => {
  try {
    console.log(formData.get("title"))
    const title = formData.get("title").trim()
    const type = formData.get("type").trim()
    const text = formData.get("text")
    const image = formData.get("image")
    const video = formData.get("video")
    const classroomId = formData.get("classroomId")

    if (title.length === 0) {
      return {
        success: false,
        error: "Enter the title"
      }
    }

    if (type === "Text" && text.length === 0) {
      return {
        success: false,
        error: "Enter the text"
      }
    }

    if (type === "Image" && image.length === 0) {
      return {
        success: false,
        error: "Upload an image"
      }
    }
    if (type === "Video" && video.length === 0) {
      return {
        success: false,
        error: "Enter the video link"
      }
    }

    await connectToDb()

    const user = await getUser()

    const data = {
      title,
      owner: user._id
    }
    if (type === "Text") data.text = text
    if (type === "Image") data.image = image
    if (type === "Video") data.video = video
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
