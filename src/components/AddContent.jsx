"use client"

import { createStudyMaterial } from "@/actions/studyMaterial"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useFormState } from "react-dom"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Textarea } from "./ui/textarea"
import { uploadFile } from "@/lib/cloudinary"

const AddContent = ({ children }) => {
  const [type, setType] = useState("Text")

  const [createContentState, createContentAction] = useFormState(
    createStudyMaterial,
    {
      error: null,
      success: false
    }
  )

  const [open, setOpen] = useState(false)
  const [image, setImage] = useState("")

  const uploadImage = async (e) => {
    const file = e.target.files?.[0]

    if (!file) return

    const url = await uploadFile(file)
    console.log(url)
    setImage(url)
  }

  useEffect(() => {
    console.log(createContentState)
    if (createContentState.success) {
      toast.success("Content Posted!")
    }
    if (createContentState.error) {
      toast.error(createContentState.error)
    }
  }, [createContentState])

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Content</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={createContentAction}>
          <Input placeholder="Title" name="title" />

          <Select
            value={type}
            name="type"
            onValueChange={(value) => setType(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Text">Text</SelectItem>
              <SelectItem value="Image">Image</SelectItem>
              <SelectItem value="Video">Video</SelectItem>
            </SelectContent>
          </Select>

          {type === "Text" ? (
            <Textarea placeholder="Text" rows={10} />
          ) : type === "Image" ? (
            <div className="w-full group relative h-60 border-black border-2">
              <input
                onChange={uploadImage}
                type="file"
                id="event-image"
                hidden
              />
              <label
                htmlFor="event-image"
                className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
              ></label>
              <img src={image} alt="" className="block w-full h-full" />
            </div>
          ) : (
            <Input placeholder="Youtube Video Link" name="video" />
          )}

          <input name="type" value={type} hidden />
          <input name="image" value={image} hidden />

          <Button type="submit">Post</Button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddContent