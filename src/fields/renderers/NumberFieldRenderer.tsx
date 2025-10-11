import { NumberInput } from "@mantine/core";
import { FieldRendererProps } from "../renderer.types";

type NumberFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function NumberFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: NumberFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <NumberInput
        value={inputProps.value}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={field.required}
        placeholder={field.placeholder}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
      />
    );
  }

  return (
    <NumberInput
      {...inputProps}
      onChange={(value) => inputProps.onFieldChange(Number(value))}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default NumberFieldRenderer;
