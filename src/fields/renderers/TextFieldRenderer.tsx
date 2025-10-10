import { TextInput } from "@mantine/core";
import { FieldRendererProps } from "../renderer.types";

type TextFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function TextFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: TextFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <TextInput
        value={inputProps.value}
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
    <TextInput
      {...inputProps}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default TextFieldRenderer;
