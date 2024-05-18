"use server"

import { StudyMaterial } from "@/database/models/StudyMaterial"

export const createStudyMaterial = async (prev, formData) => {
  try {
    const title = formData.get("title").trim()
    const type = formData.get("type").trim()
    const text = formData.get("text").trim()
    const image = formData.get("image").trim()
    const video = formData.get("video").trim()
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
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
