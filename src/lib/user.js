"use server"

import { cookies } from "next/headers"
import { verifyToken } from "./jwt"
import { User } from "@/database/models/User"
import { connectToDb } from "@/database/connection"
import { parseData } from "./database"

export const getUser = async () => {
  try {
    await connectToDb()

    const token = cookies().get("token")?.value
    if (!token) return null

    const tokenData = verifyToken(token)

    if (!tokenData?.id) return null

    const user = await User.findById(tokenData.id)
    return parseData(user)
  } catch (error) {
    return null
  }
}
