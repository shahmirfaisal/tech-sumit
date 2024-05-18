"use client"

import { useFormStatus } from "react-dom"
import { LoaderIcon } from "lucide-react"

const SubmitButton = ({ children, className = "", disabled = false }) => {
  // const { pending } = useFormStatus()
  let pending = true

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className={className + " flex items-center gap-1"}
    >
      {pending && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}

export default SubmitButton
