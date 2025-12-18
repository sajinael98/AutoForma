import { DateTimePicker } from "@mantine/dates";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import dayjs from "dayjs";

type DateTimeFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

const ensureDateTime = (value: any): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return value;
  return null;
};

export function DateTimeFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: DateTimeFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);

  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  const value = ensureDateTime(inputProps.value);

  const handleChange = (date: Date | null) => {
    inputProps.onFieldChange(dayjs(date, 'YYYY-MM-DD HH:mm:ss').toDate());
  };
  return (
    <DateTimePicker
      value={value}
      onChange={isReadOnly || isDisabled ? undefined : handleChange}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={field.required}
      placeholder={field.placeholder}
      valueFormat="DD-MM-YYYY hh:mm A"
      variant={isReadOnly ? "filled" : "default"}
      error={undefined}
    />
  );
}

export default DateTimeFieldRenderer;
