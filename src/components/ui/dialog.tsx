import * as DialogPrimitive from "@radix-ui/react-dialog"
import type React from "react"

export const Dialog: React.FC<DialogPrimitive.DialogProps> = (props) => <DialogPrimitive.Dialog {...props} />

export const DialogTrigger: React.FC<DialogPrimitive.DialogTriggerProps> = (props) => <DialogPrimitive.DialogTrigger {...props} />

export const DialogClose: React.FC<DialogPrimitive.DialogCloseProps> = (props) => <DialogPrimitive.DialogClose {...props} />

export const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps> = (props) => <DialogPrimitive.DialogPortal {...props} />

export const DialogOverlay: React.FC<DialogPrimitive.DialogOverlayProps> = (props) => (
  <DialogPrimitive.DialogOverlay
    {...props}
    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
  />
)

export const DialogContent: React.FC<DialogPrimitive.DialogContentProps> = (props) => (
  <DialogPortal>
    <DialogOverlay />

    <DialogPrimitive.DialogContent
      {...props}
      className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 p-8"
    />
  </DialogPortal>
)

export const DialogTitle: React.FC<DialogPrimitive.DialogTitleProps> = (props) => (
  <DialogPrimitive.DialogTitle {...props} className="text-lg font-semibold" />
)

export const DialogDescription: React.FC<DialogPrimitive.DialogDescriptionProps> = (props) => (
  <DialogPrimitive.DialogDescription
    {...props}
    className="text-zinc-400 text-sm leading-relaxed"
  />
)

