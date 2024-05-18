import bcrypt from "bcrypt"

export const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 10)
  return encryptedPassword
}

export const comparePassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash)
  return result
}
