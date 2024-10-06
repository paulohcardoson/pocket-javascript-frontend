import type React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

export const Progress: React.FC<ProgressPrimitive.ProgressProps> = (props) => {
  return (
    <ProgressPrimitive.Progress
      {...props}
      className="bg-zinc-900 rounded-full h-2"
    />
  )
}

export const ProgressIndicator: React.FC<ProgressPrimitive.ProgressIndicatorProps> = (props) => {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className="bg-gradient-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full"
    />
  )
}
