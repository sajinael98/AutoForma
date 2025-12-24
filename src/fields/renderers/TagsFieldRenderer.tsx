import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { TagsInput } from "@mantine/core";

const TagsInputFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const inputProps = form.getInputProps(field.name);
  
  const isReadOnly = field.readOnly;
  const isDisabled = field.disabled;

  return (
    <TagsInput
      value={inputProps.value || []}
      onChange={(val) => inputProps.onChange(val)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  );
};

export default TagsInputFieldRenderer;
