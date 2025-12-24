import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";

const DateFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);

  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  const handleChange = (value: Date | null) => {
    inputProps.onFieldChange(dayjs(value, "YYYY-MM-DD").toDate());
  };

  return (
    <DateInput
      value={inputProps.value ?? null}
      onChange={handleChange}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={field.required}
      placeholder={field.placeholder}
      valueFormat="YYYY-MM-DD"
      error={undefined}
    />
  );
};

export default DateFieldRenderer;
