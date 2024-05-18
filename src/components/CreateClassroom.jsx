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
import { createClassroom } from "@/actions/classroom"

const CreateClassroom = ({ children }) => {
  const [type, setType] = useState("Text")

  const [createClassroomState, createClassroomAction] = useFormState(
    createClassroom,
    {
      error: null,
      success: false
    }
  )

  useEffect(() => {
    if (createClassroomState.success) {
      toast.success("Classroom Created!")
    }
    if (createClassroomState.error) {
      toast.error(createClassroomState.error)
    }
  }, [createClassroomState])

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Classroom</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={createClassroomAction}>
          <Input placeholder="Name" name="name" />
          <Textarea placeholder="Description" name="description" rows={10} />

          <Button type="submit">Post</Button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateClassroom
