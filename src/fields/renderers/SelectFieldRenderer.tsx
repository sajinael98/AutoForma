import { Select } from "@mantine/core";
import { SelectFieldSchema } from "../types";
import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";

const SelectFieldRenderer = ({ field, form }: FieldRendererProps) => {
  const selectField = field as SelectFieldSchema;

  const inputProps = form.getInputProps(selectField.name as any);

  const isReadOnly = selectField.readOnly;
  const isDisabled = selectField.disabled;

  return (
    <Select
      data={selectField.data}
      {...inputProps}
      placeholder={selectField.placeholder}
      error={undefined}
      onChange={(val) => inputProps.onFieldChange(val)}
      disabled={isDisabled}
      readOnly={isReadOnly}
    />
  );
};

export default SelectFieldRenderer;
