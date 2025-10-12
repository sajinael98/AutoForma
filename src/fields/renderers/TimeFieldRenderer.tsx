import { TimeInput } from "@mantine/dates";
import { FieldRendererProps } from "../renderer.types";
import { useRef } from "react";
import { ActionIcon } from "@mantine/core";

type TimeFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function TimeFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: TimeFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  // تأكد القيمة دايمًا string بصيغة HH:mm
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

  if (isReadOnly || isDisabled) {
    return (
      <TimeInput
        value={currentValue}
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
    <TimeInput
      value={currentValue}
      onChange={(e) => inputProps.onChange(e.currentTarget.value)}
      required={field.required}
      placeholder={field.placeholder}
      error={undefined}
      ref={ref}
      rightSection={pickerControl}
    />
  );
}

export default TimeFieldRenderer;
