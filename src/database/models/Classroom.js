import { Schema, model, models } from "mongoose"

const classroomSchema = new Schema({
  name: String,
  description: String,
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

export const Classroom = models.Classroom || model("Classroom", classroomSchema)
