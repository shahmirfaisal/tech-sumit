import { Schema, model, models } from "mongoose"

const studyMaterialSchema = new Schema({
  title: String,
  text: String,
  image: String,
  video: String,

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  classroom: {
    type: Schema.Types.ObjectId,
    ref: "Classroom"
  }
})

export const StudyMaterial =
  models.StudyMaterial || model("StudyMaterial", studyMaterialSchema)
