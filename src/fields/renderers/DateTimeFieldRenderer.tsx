import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";

const ensureDateTime = (value: any): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return value;
  return null;
};

const DateTimeFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);

  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  const value = ensureDateTime(inputProps.value);

  const handleChange = (date: Date | null) => {
    inputProps.onFieldChange(dayjs(date, "YYYY-MM-DD HH:mm:ss").toDate());
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
};

export default DateTimeFieldRenderer;
