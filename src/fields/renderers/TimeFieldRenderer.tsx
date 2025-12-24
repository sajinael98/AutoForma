import { TimeInput } from "@mantine/dates";
import { useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";

const TimeFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  const currentValue =
    typeof inputProps.value === "string" ? inputProps.value : "";

  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      &#9200;
    </ActionIcon>
  );

  return (
    <TimeInput
      value={currentValue}
      onChange={(e) => inputProps.onChange(e.currentTarget.value)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      ref={ref}
      rightSection={pickerControl}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  );
};

export default TimeFieldRenderer;
