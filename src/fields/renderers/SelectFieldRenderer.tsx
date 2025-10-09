import React from "react";
import { Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FieldSchema, SelectFieldSchema } from "../types";

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
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <Select
        data={field.data}
        value={inputProps.value}
        disabled={isDisabled || isReadOnly}
        readOnly={isReadOnly}
        placeholder={field.placeholder}
        required={field.required}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
      />
    );
  }

  return (
    <Select
      data={field.data}
      placeholder={field.placeholder}
      error={undefined}
      {...inputProps}
    />
  );
}

export default SelectFieldRenderer;
