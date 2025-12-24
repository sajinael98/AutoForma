import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { Switch } from "@mantine/core";

const SwitchFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  return (
    <Switch
      {...inputProps}
      checked={inputProps.value}
      onChange={(e) => inputProps.onFieldChange(e.target.checked)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  );
};

export default SwitchFieldRenderer;
