"use client"

import { joinClassroom } from "@/actions/classroom"
import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "sonner"

const JoinClassroom = ({ user, classroom }) => {
  const [joinClassroomState, joinClassroomAction] = useFormState(
    joinClassroom,
    {
      error: null,
      success: false
    }
  )

  useEffect(() => {
    if (joinClassroomState.success) {
      toast.success("Classroom Joined!")
    }
    if (joinClassroomState.error) {
      toast.error(joinClassroomState.error)
    }
  }, [joinClassroomState])

  return (
    <form action={joinClassroomAction}>
      <input name="classroomId" readyOnly hidden value={classroom._id} />
      <Button>Join Classroom</Button>
    </form>
  )
}

export default JoinClassroom
