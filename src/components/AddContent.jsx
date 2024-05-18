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
            <Input placeholder="Title" name="image" />
          ) : (
            <Input placeholder="Youtube Video Link" name="video" />
          )}

          <input name="type" value={type} hidden />

          <Button type="submit">Post</Button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddContent
