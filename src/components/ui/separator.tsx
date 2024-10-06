import type React from "react"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const Separator: React.FC<ComponentProps<"div">> = (props) => {
  return (
    <div {...props} className={twMerge("h-px bg-zinc-900", props.className)} />
  )
}
