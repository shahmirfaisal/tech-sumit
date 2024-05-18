import { userTypes } from "@/constants/user"
import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    enum: userTypes
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  bio: {
    type: String
  },
  image: {
    type: String
  }
})

export const User = models.User || model("User", userSchema)
