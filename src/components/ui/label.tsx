import type React from "react"
import { twMerge } from "tailwind-merge"

export const Label: React.FC<React.ComponentProps<"label">> = (props) => {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      {...props}
      className={twMerge(
        "font-medium text-sm tracking-tight leading-normal",
        props.className
      )}
    />
  )
}
