import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { TextInput } from "@mantine/core";

const TextFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  return (
    <TextInput
      {...inputProps}
      onChange={(e) => inputProps.onFieldChange(e.target.value)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  );
};

export default TextFieldRenderer;
