import { Checkbox } from "@mantine/core";
import { FieldRendererProps } from "../renderer.types";

type CheckBoxFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function CheckBoxFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: CheckBoxFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <Checkbox
        value={inputProps.value}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={field.required}
        placeholder={field.placeholder}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
        checked={inputProps.value}
      />
    );
  }

  return (
    <Checkbox
      {...inputProps}
      checked={inputProps.value}
      onChange={(e) => inputProps.onFieldChange(e.target.value)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default CheckBoxFieldRenderer;
