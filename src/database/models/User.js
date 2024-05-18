import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    enum: ["Student", "Teacher"]
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

export const User = models.User || model("User", userSchema)
