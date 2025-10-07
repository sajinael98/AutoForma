import React from "react";
import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";

type TextFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
};

export function TextFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: TextFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);

  return <TextInput placeholder={field.placeholder} {...inputProps} />;
}

export default TextFieldRenderer;
