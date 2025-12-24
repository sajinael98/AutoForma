import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { NumberInput } from "@mantine/core";

const NumberFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  return (
    <NumberInput
      {...inputProps}
      onChange={(value) => inputProps.onFieldChange(Number(value))}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  );
};

export default NumberFieldRenderer;
