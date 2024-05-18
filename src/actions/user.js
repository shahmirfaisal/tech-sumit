"use server"

import { connectToDb } from "@/database/connection"
import { User } from "@/database/models/User"
import { createToken } from "@/lib/jwt"
import { comparePassword, encryptPassword } from "@/lib/passwords"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const types = ["Student", "Teacher"]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const signup = async (prevState, formData) => {
  try {
    const name = formData.get("name").trim()
    const email = formData.get("email").trim()
    const type = formData.get("type").trim()
    const password = formData.get("password").trim()

    if (name.length === 0) {
      return {
        success: false,
        error: "Enter your name"
      }
    }

    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Invalid email!"
      }
    }

    if (!types.includes(type)) {
      return {
        success: false,
        error: "Invalid Type"
      }
    }

    if (password.length < 6 || password.length > 32) {
      return {
        success: false,
        error: "Password should be between 6 and 32 characters"
      }
    }

    await connectToDb()

    const userExist = await User.findOne({ email })

    if (userExist) {
      return {
        success: false,
        error: "Email already exist"
      }
    }

    const hashedPassword = await encryptPassword(password)

    const user = new User({
      name,
      email,
      type,
      password: hashedPassword
    })
    await user.save()

    const token = createToken({ id: user._id, type })
    cookies().set("token", token, {
      httpOnly: true,
      secure: true
    })
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }

  redirect("/dashboard")
  return { error: null, success: true }
}

export const login = async (prev, formData) => {
  try {
    const email = formData.get("email").trim()
    const password = formData.get("password").trim()

    await connectToDb()

    const user = await User.findOne({ email })

    if (!user) {
      return {
        success: false,
        error: "Wrong email!"
      }
    }

    const validPassword = await comparePassword(password, user.password)

    if (!validPassword) {
      return {
        success: false,
        error: "Wrong password"
      }
    }

    const token = createToken({ id: user._id, type: user.type })
    cookies().set("token", token, {
      httpOnly: true,
      secure: true
    })
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }

  redirect("/dashboard")
  return { error: null, success: true }
}
