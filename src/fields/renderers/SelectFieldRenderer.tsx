import React from "react";
import { Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FieldSchema, SelectFieldSchema } from "../types";

type SelectOption = { label: string; value: string };

type SelectFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = {
  field: SelectFieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
};

export function SelectFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: SelectFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name as any);

  return (
    <Select data={field.data} placeholder={field.placeholder} {...inputProps} />
  );
}

export default SelectFieldRenderer;
