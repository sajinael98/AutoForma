import { Switch } from "@mantine/core";
import { FieldRendererProps } from "../renderer.types";

type SwitchFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function SwitchFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: SwitchFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  if (isReadOnly || isDisabled) {
    return (
      <Switch
        value={inputProps.value}
        readOnly={isReadOnly}
        disabled={isDisabled}
        required={field.required}
        placeholder={field.placeholder}
        variant={isReadOnly ? "filled" : "default"}
        error={undefined}
        checked={inputProps.value}
      />
    );
  }

  return (
    <Switch
      {...inputProps}
      checked={inputProps.value}
      onChange={(e) => inputProps.onFieldChange(e.target.checked)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
    />
  );
}

export default SwitchFieldRenderer;
