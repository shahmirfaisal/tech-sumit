import jwt from "jsonwebtoken"

export const createToken = (tokenData) => {
  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })
  return token
}

export const verifyToken = (token) => {
  const tokenData = jwt.verify(token, process.env.JWT_SECRET)
  return tokenData
}
