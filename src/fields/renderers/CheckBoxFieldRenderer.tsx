import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { Checkbox } from "@mantine/core";

const CheckBoxFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  return (
    <Checkbox
      {...inputProps}
      checked={inputProps.value}
      onChange={(e) => inputProps.onFieldChange(e.target.checked)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      disabled={isDisabled}
      readOnly={isReadOnly}
    />
  );
};

export default CheckBoxFieldRenderer;
