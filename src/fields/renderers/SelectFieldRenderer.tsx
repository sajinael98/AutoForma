import { Select } from "@mantine/core";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import { SelectFieldSchema } from "../types";

type SelectFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function SelectFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: SelectFieldRendererProps<TValues>) {
  const selectField = field as SelectFieldSchema<TValues>;

  const inputProps = form.getInputProps(selectField.name as any);
  const isReadOnly = selectField.readOnly === true;
  const isDisabled = selectField.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <Select
        data={selectField.data}
        value={inputProps.value}
        disabled={isDisabled || isReadOnly}
        readOnly={isReadOnly}
        placeholder={selectField.placeholder}
        required={selectField.required}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
      />
    );
  }

  return (
    <Select
      data={selectField.data}
      {...inputProps}
      placeholder={selectField.placeholder}
      error={undefined}
      onChange={(val) => inputProps.onFieldChange(val)}
    />
  );
}

export default SelectFieldRenderer;
