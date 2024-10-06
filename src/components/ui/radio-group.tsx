import type React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CheckCircle2, Circle } from "lucide-react"

export const RadioGroup: React.FC<RadioGroupPrimitive.RadioGroupProps> = (props) => {
  return (
    <RadioGroupPrimitive.RadioGroup
      {...props}
      className="flex flex-col gap-2"
    />
  )
}

export const RadioGroupItem: React.FC<RadioGroupPrimitive.RadioGroupItemProps> = (props) => {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className="group bg-black border border-zinc-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10 data-[state=checked]:bg-pink-500/5 data-[state=checked]:border-pink-500"
    />
  )
}

export const RadioGroupIndicator: React.FC = () => {
  return (
    <>
      <Circle className="size-4 text-zinc-600 group-data-[state=checked]:hidden" />
      <CheckCircle2 className="size-4 text-pink-500 hidden group-data-[state=checked]:inline" />
    </>
  )
}
