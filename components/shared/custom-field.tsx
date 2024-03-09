import { z } from "zod"
import { Control, ControllerRenderProps } from "react-hook-form"

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form"

import { formSchema } from "./transformation-form"

interface CustomFieldProps {
  control: Control<z.infer<typeof formSchema>> | undefined
  render: (props: {
    field: ControllerRenderProps<
      z.infer<typeof formSchema>,
      "title" | "aspectRatio" | "color" | "prompt" | "publicId"
    >
  }) => React.ReactNode
  name: keyof z.infer<typeof formSchema>
  formLabel?: string
  className?: string
}

export const CustomField = ({
  control,
  render,
  name,
  formLabel,
  className,
}: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
