export const uploadFile = async (file) => {
  const data = new FormData()
  data.append("file", file)
  data.append("upload_preset", "nascon")

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dw3ap99ie/image/upload",
    {
      body: data,
      method: "POST",
      cache: "no-store"
    }
  )
  const fileData = await res.json()
  return fileData.secure_url
}
