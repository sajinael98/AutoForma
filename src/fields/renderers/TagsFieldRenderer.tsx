import { TagsInput } from "@mantine/core";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";

type TagsInputFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function TagsInputFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: TagsInputFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <TagsInput
        value={inputProps.value || []}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={field.required}
        placeholder={field.placeholder}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
      />
    );
  }

  return (
    <TagsInput
      value={inputProps.value || []}
      onChange={(val) => inputProps.onChange(val)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default TagsInputFieldRenderer;
