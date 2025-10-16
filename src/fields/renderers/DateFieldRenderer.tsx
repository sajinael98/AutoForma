import { DateInput } from "@mantine/dates";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";

type DateFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function DateFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: DateFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  const currentValue = inputProps.value
    ? typeof inputProps.value === "string"
      ? new Date(inputProps.value)
      : inputProps.value
    : null;

  const handleChange = (value: Date | null) => {
    const transformed = value ? value.toISOString() : null;
    inputProps.onFieldChange(transformed);
  };

  if (isReadOnly || isDisabled) {
    return (
      <DateInput
        valueFormat="YYYY-MMM-DD"
        value={currentValue}
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
    <DateInput
      valueFormat="YYYY-MMM-DD"
      value={currentValue}
      onChange={handleChange}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default DateFieldRenderer;
